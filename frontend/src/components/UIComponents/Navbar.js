import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useOrderContext } from '../../hooks/useOrderContext';
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
	const { orders, openModal } = useOrderContext();
	const location = useLocation();

	useEffect(() => {
		document.body.style.overflow =
			openMenu || openCart || openModal ? 'hidden' : '';
	}, [openMenu, openCart, openModal]);

	const handleMenuClick = () => {
		setOpenCart(false);
		setOpenMenu((prevState) => !prevState);
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
					<Link to='/' onClick={() => setOpenCart(false)}>
						<img src={Logo} alt='logo' />
					</Link>
					<nav>
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
							onClick={() => setOpenCart((prevState) => !prevState)}
						/>
						{orders.length > 0 && (
							<div className='cart-basket' data-count={orders.length}>
								{orders.length}
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
