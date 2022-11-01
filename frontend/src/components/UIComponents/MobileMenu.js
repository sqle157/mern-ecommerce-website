import { useRef } from 'react';
// Layouts & Components
import ProductCategories from '../Layouts/ProductCategories';
// CSS
import './MobileMenu.scss';

const MobileMenu = ({ setOpenMenu }) => {
	const ref = useRef();

	const handleMobileMenuClick = (e) => {
		if (e.target === ref.current) {
			setOpenMenu(false);
		}
	};

	return (
		<div
			className='overlay overlay--menu'
			ref={ref}
			onClick={handleMobileMenuClick}>
			<div className='navbar__mobile'>
				<div className='container'>
					<ProductCategories setOpenMenu={setOpenMenu} mobileMenu />
				</div>
			</div>
		</div>
	);
};
export default MobileMenu;
