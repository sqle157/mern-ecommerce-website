import { useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';

// Helper component to make the page scroll to top when we navigate to different route
export const ScrollToTop = ({ children }) => {
	const location = useLocation();

	useLayoutEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
	}, [location.pathname]);

	return <>{children}</>;
};
