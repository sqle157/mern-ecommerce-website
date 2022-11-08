import { useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';

export const ScrollToTop = ({ children }) => {
	const location = useLocation();

	useLayoutEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
	}, [location.pathname]);

	return <>{children}</>;
};
