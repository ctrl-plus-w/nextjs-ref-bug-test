import { useCallback, useLayoutEffect, useRef } from 'react';

import type { ReactElement } from 'react';

import clsx from 'clsx';

import ParticleJS from '@class/ParticleJS';

import { deepCopy } from '@helper/object';

import particleJSConfig from '@config/particleJSConfig';
import useFPS from '@hook/useFPS';

interface IProps {
  className?: string;
}

const ParticleAnimation = ({ className }: IProps): ReactElement => {
  const particleJS = useRef<ParticleJS | null>();

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useFPS(() => {
    if (particleJS.current) particleJS.current.tick();
  });

  const containerRef = useCallback((container: HTMLDivElement) => {
    const canvas = canvasRef.current;

    if (!container || !canvas) return;

    // Updating canvas size
    let _particleJSConfig = deepCopy(particleJSConfig);

    canvas.style.width = '100%';
    canvas.style.height = '100%';

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    particleJS.current = new ParticleJS(canvas, _particleJSConfig);

    return () => {
      particleJS.current?.clear();
    };
  }, []);

  return (
    <div className={clsx(['rounded-full', className])} ref={containerRef}>
      <canvas ref={canvasRef} className="border border-purple-500"></canvas>
    </div>
  );
};

export default ParticleAnimation;
