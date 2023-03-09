import { useEffect, useRef } from 'react';

import Curve from '@class/Curve';
import { vectorLerp } from '@helper/animation';

const FPS = 60;
const ANIMATION_DURATION = 3;

const useAnimatedCurves = <T extends HTMLElement>(
  curve1: Curve,
  curve2: Curve
) => {
  let containerRef = useRef<T | null>(null);

  let curve1Ref = useRef(curve1.copy());
  let curve2Ref = useRef(curve2.copy());

  let curve1FinalRef = useRef(curve2);
  let curve2FinalRef = useRef(curve1);

  let iterations = useRef(0);

  const getOtherCurve = (curve: Curve) => {
    return curve === curve1 ? curve2 : curve1;
  };

  useEffect(() => {
    if (containerRef.current === null) return;

    let animationFrame: number;
    let tickInterval: number;

    const tick = () => {
      const progress = iterations.current / (ANIMATION_DURATION * FPS);

      if (progress < 1) {
        const c1n = getOtherCurve(curve1FinalRef.current);
        const c1f = curve1FinalRef.current;

        const c2n = getOtherCurve(curve2FinalRef.current);
        const c2f = curve2FinalRef.current;

        curve1Ref.current.p0 = vectorLerp(c1f.p0, c1n.p0, progress);
        curve1Ref.current.p0Drag = vectorLerp(c1f.p0Drag, c1n.p0Drag, progress);
        curve1Ref.current.p1Drag1 = vectorLerp(
          c1f.p1Drag1,
          c1n.p1Drag1,
          progress
        );
        curve1Ref.current.p1 = vectorLerp(c1f.p1, c1n.p1, progress);
        curve1Ref.current.p1Drag2 = vectorLerp(
          c1f.p1Drag2,
          c1n.p1Drag2,
          progress
        );
        curve1Ref.current.p2 = vectorLerp(c1f.p2, c1n.p2, progress);
        curve1Ref.current.p2Drag = vectorLerp(c1f.p2Drag, c1n.p2Drag, progress);

        curve2Ref.current.p0 = vectorLerp(c2f.p0, c2n.p0, progress);
        curve2Ref.current.p0Drag = vectorLerp(c2f.p0Drag, c2n.p0Drag, progress);
        curve2Ref.current.p1Drag1 = vectorLerp(
          c2f.p1Drag1,
          c2n.p1Drag1,
          progress
        );
        curve2Ref.current.p1 = vectorLerp(c2f.p1, c2n.p1, progress);
        curve2Ref.current.p1Drag2 = vectorLerp(
          c2f.p1Drag2,
          c2n.p1Drag2,
          progress
        );
        curve2Ref.current.p2 = vectorLerp(c2f.p2, c2n.p2, progress);
        curve2Ref.current.p2Drag = vectorLerp(c2f.p2Drag, c2n.p2Drag, progress);
      } else {
        iterations.current = 0;

        curve1FinalRef.current = getOtherCurve(curve1FinalRef.current);
        curve2FinalRef.current = getOtherCurve(curve2FinalRef.current);
      }

      containerRef.current!.innerHTML = Curve.combinePaths(
        curve1Ref.current,
        curve2Ref.current
      );

      iterations.current++;
    };

    tickInterval = window.setInterval(() => {
      animationFrame = window.requestAnimationFrame(tick);
    }, 1000 / FPS);

    return () => {
      window.clearInterval(tickInterval);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [containerRef.current]);

  return containerRef;
};

export default useAnimatedCurves;
