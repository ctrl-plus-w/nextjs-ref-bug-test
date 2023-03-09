import { useCallback, useLayoutEffect, useRef } from 'react';

import type { ReactElement } from 'react';

import clsx from 'clsx';

import ParticleJS from '@class/ParticleJS';

import { deepCopy } from '@helper/object';
import { px } from '@helper/react';

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

  const updateCanvasSize = (
    container: HTMLDivElement,
    canvas: HTMLCanvasElement
  ) => {
    const { width, height } = container.getBoundingClientRect();

    canvas.style.width = px(width);
    canvas.style.height = px(height);

    canvas.width = width;
    canvas.height = height;
  };

  const containerRef = useCallback(
    (container: HTMLDivElement) => {
      if (!container || !canvasRef.current) return;

      // Updating canvas size
      let _particleJSConfig = deepCopy(particleJSConfig);

      updateCanvasSize(container, canvasRef.current);

      particleJS.current = new ParticleJS(canvasRef.current, _particleJSConfig);

      return () => {
        particleJS.current?.clear();
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
