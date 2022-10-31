import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export const ScrollToTop = ({ children }) => {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
	}, [location.pathname]);

	return <>{children}</>;
};
