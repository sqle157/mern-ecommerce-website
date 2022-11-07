import Button from '../UIComponents/Button';
// Images
import ZX9ImageDesktop from '../../assets/home/desktop/image-speaker-zx9.png';
import ZX9ImageTablet from '../../assets/home/tablet/image-speaker-zx9.png';
import ZX9ImageMobile from '../../assets/home/mobile/image-speaker-zx9.png';
// CSS
import './ProductsPreview.scss';

function ProductsPreview() {
	return (
		<section id='product__preview'>
			<div className='grid preview-container'>
				<div className='preview flex'>
					<div className='image-wrapper'>
						<picture>
							<source media='(max-width: 50em)' srcSet={ZX9ImageTablet} />
							<source media='(max-width: 37.5em)' srcSet={ZX9ImageMobile} />
							<img src={ZX9ImageDesktop} alt='product preview' />
						</picture>
					</div>
					<div className='preview-intro'>
						<h1>ZX9 Speaker</h1>
						<p className='opacity-75'>
							Upgrade to premium speakers that are phenomenally built to deliver
							truly remarkable sound.
						</p>
						<Button
							className='btn btn-neutral-300'
							text='See Product'
							to='/products/zx9-speaker'
						/>
					</div>
				</div>
				<div className='preview'>
					<div className='preview-intro'>
						<h4>ZX7 Speaker</h4>
						<Button
							className='btn btn-neutral-100'
							text='See Product'
							to='/products/zx7-speaker'
						/>
					</div>
				</div>
				<div className='preview'></div>
				<div className='preview'>
					<div className='preview-intro'>
						<h4>YX1 Earphones</h4>
						<Button
							className='btn btn-neutral-100'
							text='See Product'
							to='/products/yx1-earphones'
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
export default ProductsPreview;
