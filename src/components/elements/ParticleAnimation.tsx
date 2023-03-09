import { useCallback, useLayoutEffect, useRef } from 'react';

import type { ReactElement } from 'react';

import clsx from 'clsx';

import useBreakpoints from '@hook/useBreakpoints';

import ParticleJS from '@class/ParticleJS';

import { deepCopy } from '@helper/object';
import { px } from '@helper/react';

import particleJSConfig from '@config/particleJSConfig';

interface IProps {
  className?: string;
}

const ParticleAnimation = ({ className }: IProps): ReactElement => {
  const { greaterThan } = useBreakpoints();

  const particleJS = useRef<ParticleJS | null>();

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const frameRef = useRef<number | null>(null);

  const t = useRef<number>(Date.now());

  const render = () => {
    const fpsInterval = 1000 / particleJSConfig.fps;

    frameRef.current = window.requestAnimationFrame(render);

    const now = Date.now();
    const elapsed = now - t.current;

    if (elapsed < fpsInterval || canvasRef.current == null) return;

    t.current = now - (elapsed % fpsInterval);
    particleJS.current?.tick();
  };

  const updateCanvasSize = (
    canvas: HTMLCanvasElement
  ) => {
    canvas.style.width = '100%';
    canvas.style.height = '100%';

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  };

  const containerRef = useCallback(
    (container: HTMLDivElement) => {
      if (!container || !canvasRef.current) return;

      // Updating canvas size
      let _particleJSConfig = deepCopy(particleJSConfig);

      updateCanvasSize(canvasRef.current);

      if (
        greaterThan('lg') &&
        _particleJSConfig.particle?.amount !== undefined &&
        particleJSConfig.particle?.amount !== undefined
      ) {
        _particleJSConfig.particle.amount =
          particleJSConfig.particle.amount * 1.3;
      }

      particleJS.current = new ParticleJS(canvasRef.current, _particleJSConfig);

      frameRef.current = window.requestAnimationFrame(render);

      return () => {
        particleJS.current?.clear();

        if (frameRef.current != null)
          window.cancelAnimationFrame(frameRef.current);
      };
    },
    [canvasRef]
  );

  return (
    <div className={clsx(['rounded-full', className])} ref={containerRef}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default ParticleAnimation;
