import { Outlet } from 'react-router-dom';
import Navbar from '../UIComponents/Navbar';
import Footer from '../UIComponents/Footer';

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
