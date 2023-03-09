import { useCallback, useState } from 'react';

import type { ReactElement } from 'react';

const Content = (): ReactElement => {
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
    <div className='border border-purple-500 w-80 h-80' ref={containerRef}>
      <div className='fixed left-0 top-0 flex flex-col text-black font-mono'>
        {webConsole.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
    </div>
  );
};

export default Content;
