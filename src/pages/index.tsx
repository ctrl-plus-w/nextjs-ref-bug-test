import { useCallback, useRef, useState } from 'react';

import clsx from 'clsx';

import ParticleJS from '@/classes/ParticleJS';

import useFPS from '@/hooks/useFPS';

const ParticleAnimation = ({ className }: { className: string }) => {
  const [webConsole, setWebConsole] = useState<string[]>([]);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const particleJS = useRef<ParticleJS | null>();

  const log = (...messages: string[]) => {
    setWebConsole((wc) => [...wc, ...messages]);
  };

  useFPS(() => {
    if (particleJS.current) particleJS.current.tick();
  }, 60);

  const ref = useCallback((node: HTMLDivElement) => {
    if (!node) return;

    const { width, height } = node.getBoundingClientRect();
    log(`Current size : (${width}, ${height})`);

    const canvas = canvasRef.current;
    if (canvas !== null) {
      canvas.width = width;
      canvas.height = height;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      particleJS.current = new ParticleJS(canvas, {
        particle: {
          minSize: 4,
          size: 11,
          amount: 40,
          speed: 4,
        },
        attract: {
          distance: 300,
          rotateX: 500,
          rotateY: 500,
        },
      });
    }
  }, []);

  return (
    <>
      <div className='fixed top-2 left-2 flex flex-col p-2 bg-black bg-opacity-30 text-black font-mono'>
        {webConsole.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>

      <div className={clsx(['rounded-full border border-purple-500', className])} ref={ref}>
        <canvas ref={canvasRef}></canvas>
      </div>
    </>
  );
};

export default function Home() {
  return (
    <section className='flex flex-col lg:flex-row items-center justify-around min-h-screen p-8 lg:px-32 lg:py-16'>
      <ParticleAnimation className='w-80 h-80 lg:w-96 lg:h-96' />

      <div className='flex flex-col items-center lg:items-end'>
        <h1 className='text-[64px] lg:text-[78px] font-mono text-center lg:text-right mt-8'>Lukas</h1>

        <p className='text-primaryLight text-center lg:text-right mt-12'>
          Développeur web et designer indépendant <br /> Création d’applications web complexes
        </p>

        <a href='/contact' className='border-b border-primary text-primary text-xl font-mono mt-16'>
          Se rencontrer
        </a>
      </div>
    </section>
  );
}
