import { Outlet } from 'react-router-dom';
import Navbar from '../UIComponents/Navbar';
import Footer from '../UIComponents/Footer';

// MainContainer component to wrap all the content
export const MainContainer = () => {
	return (
		<>
			<Navbar />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};
