import { useCallback, useLayoutEffect, useRef, useState } from 'react';

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
  const [webConsole, setWebConsole] = useState<string[]>([]);

  const log = (...messages: string[]) => {
    setWebConsole((_messages) => [..._messages, ...messages]);
  };

  const containerRef = useCallback((container: HTMLDivElement) => {
    if (!container) return;

    const { width, height } = container.getBoundingClientRect();
    log(`Current size : (${width} ${height})`);
  }, []);

  return (
    <div
      className={clsx(['rounded-full w-80 h-80', className])}
      ref={containerRef}
    >
      <div className="fixed left-0 top-0 flex flex-col text-black font-mono">
        {webConsole.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      {/* <canvas ref={canvasRef} className="border border-purple-500"></canvas> */}
    </div>
  );
};

export default ParticleAnimation;
