import clsx from 'clsx';
import { useCallback, useEffect, useRef, useState } from 'react';

const Content = ({ className }: { className: string }) => {
  const [webConsole, setWebConsole] = useState<string[]>([]);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const log = (...messages: string[]) => {
    setWebConsole((wc) => [...wc, ...messages]);
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let frame: number;
    let i = 0;

    const render = () => {
      if (ctx) {
        ctx.fillStyle = '#ffff00';
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillRect(0, 0, canvas.width, i);

        i++;
        if (i > canvas.height) i = 0;
      }

      frame = window.requestAnimationFrame(render);
    };

    frame = window.requestAnimationFrame(render);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [canvasRef]);

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
    }
  }, []);

  return (
    <>
      <div className='fixed top-2 left-2 flex flex-col p-2 bg-black bg-opacity-30 text-black font-mono'>
        {webConsole.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>

      <div className={clsx(['bg-purple-500', className])} ref={ref}>
        <canvas ref={canvasRef}></canvas>
      </div>
    </>
  );
};

export default function Home() {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <Content className='w-80 h-80' />
    </div>
  );
}
