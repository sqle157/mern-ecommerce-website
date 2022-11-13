import { useLayoutEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useOrderContext } from '../../hooks/useOrderContext';
import { useWindowSize } from '../../hooks/useWindowSize';
// Icons & Images
import Logo from '../../assets/shared/desktop/logo.svg';
import CartIcon from '../../assets/shared/desktop/icon-cart.svg';
import BurgerIcon from '../../assets/shared/tablet/icon-hamburger.svg';
// Components
import Hero from './Hero';
import MobileMenu from './MobileMenu';
import Cart from './Cart';
// CSS
import './Navbar.scss';

function Navbar() {
	const [openMenu, setOpenMenu] = useState(false);
	const [openCart, setOpenCart] = useState(false);
	const { orders } = useOrderContext();
	const { width } = useWindowSize();
	const location = useLocation();

	useLayoutEffect(() => {
		if (width > 600) {
			document.body.style.overflow = openMenu || openCart ? 'hidden' : '';
		} else {
			document.body.style.overflow = openMenu ? 'hidden' : '';
		}
	}, [openMenu, openCart, width]);

	const handleMenuClick = () => {
		window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
		setOpenCart(false);
		setOpenMenu((prevState) => !prevState);
	};

	const handleLogoClick = () => {
		setOpenCart(false);
		setOpenMenu(false);
	};

	const handleCartClick = () => {
		setOpenMenu(false);
		setOpenCart((prevState) => !prevState);
	};

	return (
		<header
			className={`header ${
				location.pathname === '/' ? 'header--background' : ''
			}`}>
			{openMenu && <MobileMenu setOpenMenu={setOpenMenu} />}
			<div className='container'>
				<div className='flex header__navbar'>
					<img
						className='menu-burger'
						src={BurgerIcon}
						alt=''
						onClick={handleMenuClick}
					/>
					<Link to='/' onClick={handleLogoClick}>
						<img src={Logo} alt='logo' />
					</Link>
					<nav aria-label='navbar nav'>
						<ul className='flex header__nav'>
							<li>
								<Link
									to='/'
									onClick={() =>
										window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
									}>
									Home
								</Link>
							</li>
							<li>
								<Link
									to='/headphones'
									onClick={() =>
										window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
									}>
									Headphones
								</Link>
							</li>
							<li>
								<Link
									to='/speakers'
									onClick={() =>
										window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
									}>
									Speakers
								</Link>
							</li>
							<li>
								<Link
									to='/earphones'
									onClick={() =>
										window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
									}>
									Earphones
								</Link>
							</li>
						</ul>
					</nav>
					<div className='icon-wrapper'>
						<img
							className='cart-icon'
							src={CartIcon}
							alt=''
							onClick={handleCartClick}
						/>
						{orders.length > 0 && (
							<div className='cart-basket'>
								{orders.reduce((acc, order) => acc + order.quantity, 0)}
							</div>
						)}
					</div>
				</div>

				<Hero />
				{openCart && <Cart setOpenCart={setOpenCart} />}
			</div>
		</header>
	);
}
export default Navbar;
