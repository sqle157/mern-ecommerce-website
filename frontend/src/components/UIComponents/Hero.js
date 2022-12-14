import { useParams, useLocation } from 'react-router-dom';
// Components
import Button from './Button';
// CSS
import './Hero.scss';

// render based on params and location
function Hero() {
	const params = useParams();
	const location = useLocation();

	// if there's a category param
	if (params.category) {
		return (
			<div className='header__hero header__hero--center'>
				<h2>{params.category}</h2>
			</div>
		);
	}

	// if there's a product slug param or location === '/checkout'
	if (params.slug || location.pathname === '/checkout') {
		return <></>;
	}

	// Default render
	return (
		<div className='header__hero'>
			<p className='overline'>New Product</p>
			<h1>XX99 Mark II Headphones</h1>
			<p className='opacity-75'>
				Experience natural, lifelike audio and exceptional build quality made
				for the passionate music enthusiast.
			</p>
			<Button
				className='btn btn-primary'
				text='See Product'
				to='/products/xx99-mark-two-headphones'
			/>
		</div>
	);
}
export default Hero;
