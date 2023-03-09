import { useEffect, useRef } from 'react';

const useFPS = (callback: VoidFunction, fps: number = 60) => {
  const frameRef = useRef<number | null>(null);
  const timeRef = useRef<number>(Date.now());

	const render = () => {
    const fpsInterval = 1000 / fps;

    frameRef.current = window.requestAnimationFrame(render);

    const now = Date.now();
    const elapsed = now - timeRef.current;

    if (elapsed < fpsInterval) return;

    timeRef.current = now - (elapsed % fpsInterval);
		callback();
  };

	useEffect(() => {
		frameRef.current = window.requestAnimationFrame(render);
		return () => {
			if(frameRef.current) window.cancelAnimationFrame(frameRef.current);
		}
	}, []);

} 

export default useFPS;