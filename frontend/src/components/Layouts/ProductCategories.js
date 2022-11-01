import { Link } from 'react-router-dom';
import { memo } from 'react';

// images & icon
import HeadphonesCategory from '../../assets/shared/desktop/image-category-thumbnail-headphones.png';
import EarphonesCategory from '../../assets/shared/desktop/image-category-thumbnail-earphones.png';
import SpeakersCategory from '../../assets/shared/desktop/image-category-thumbnail-speakers.png';

// css
import './ProductCategories.scss';

function ProductCategories({ setOpenMenu, mobileMenu }) {
	const handleLinkClick = () => {
		mobileMenu && setOpenMenu(false);
		window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
	};

	return (
		<section id='products__categories'>
			<div className='grid categories-container'>
				<div className='products__category grid'>
					<div className='products__category-wrapper grid'>
						<div className='products__category-image-wrapper'>
							<img src={HeadphonesCategory} alt='' />
						</div>
						<h6>Headphones</h6>
						<Link
							to='/headphones'
							onClick={handleLinkClick}
							className='opacity-5 products__link flex'>
							SHOP{' '}
							<svg width='8' height='12' xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M1.322 1l5 5-5 5'
									stroke='#D87D4A'
									strokeWidth='2'
									fill='none'
									fillRule='evenodd'
								/>
							</svg>
						</Link>
					</div>
				</div>
				<div className='products__category grid'>
					<div className='products__category-wrapper grid'>
						<div className='products__category-image-wrapper'>
							<img src={SpeakersCategory} alt='' />
						</div>
						<h6>Speakers</h6>
						<Link
							to='/speakers'
							onClick={handleLinkClick}
							className='opacity-5 products__link flex'>
							SHOP{' '}
							<svg width='8' height='12' xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M1.322 1l5 5-5 5'
									stroke='#D87D4A'
									strokeWidth='2'
									fill='none'
									fillRule='evenodd'
								/>
							</svg>
						</Link>
					</div>
				</div>
				<div className='products__category grid'>
					<div className='products__category-wrapper grid'>
						<div className='products__category-image-wrapper'>
							<img src={EarphonesCategory} alt='' />
						</div>
						<h6>Earphones</h6>
						<Link
							to='/earphones'
							onClick={handleLinkClick}
							className='opacity-5 products__link flex'>
							SHOP{' '}
							<svg width='8' height='12' xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M1.322 1l5 5-5 5'
									stroke='#D87D4A'
									strokeWidth='2'
									fill='none'
									fillRule='evenodd'
								/>
							</svg>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
export default memo(ProductCategories);
