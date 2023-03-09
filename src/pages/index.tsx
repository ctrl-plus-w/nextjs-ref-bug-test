import clsx from 'clsx';
import { useCallback, useState } from 'react';

const Content = ({ className}: { className: string }) => {
	
	const [webConsole, setWebConsole] = useState<string[]>([])

	const log = (...messages: string[]) => {
		setWebConsole(wc => [...wc, ...messages]);
	}

	const ref = useCallback((node: HTMLDivElement) => {
		if (!node) return;
			
		const { width, height } = node.getBoundingClientRect();
		log(`Current size : (${width}, ${height})`);
	}, []);

	return <>
		<div className="fixed top-2 left-2 flex flex-col p-2 bg-black bg-opacity-30 text-black font-mono">
			{webConsole.map((msg, index) => <p key={index}>{msg}</p>)}
		</div>

		<div className={clsx(["bg-purple-500 w-80 h-80", className])} ref={ref}></div>
	</>

}

export default function Home() {
	return (
		<div className="w-full h-full flex justify-center items-center">
			<Content className="" />
		</div>
  )
}
