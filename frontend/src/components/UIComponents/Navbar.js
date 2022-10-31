import { Link, useLocation } from 'react-router-dom';
// icons & images
import Logo from '../../assets/shared/desktop/logo.svg';
import CartIcon from '../../assets/shared/desktop/icon-cart.svg';
import BurgerIcon from '../../assets/shared/tablet/icon-hamburger.svg';
// components
import Hero from './Hero';
// css
import './Navbar.scss';

function Navbar() {
	const location = useLocation();

	return (
		<header
			className={`header ${
				location.pathname === '/' ? 'header--background' : ''
			}`}>
			<div className='container'>
				<div className='flex header__navbar'>
					<div className='flex'>
						<img className='menu-burger' src={BurgerIcon} alt='' />
						<Link to='/'>
							<img src={Logo} alt='logo' />
						</Link>
					</div>
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
					<div>
						<img src={CartIcon} alt='' />
					</div>
				</div>

				<Hero />
			</div>
		</header>
	);
}
export default Navbar;
