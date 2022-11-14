import { useEffect, useState } from 'react';

// Custom hook to keep track of the window width when resize event occurs
export const useWindowSize = () => {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleWindowResize = () => {
			setWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleWindowResize);

		return () => window.removeEventListener('resize', handleWindowResize);
	}, []);

	return { width };
};
