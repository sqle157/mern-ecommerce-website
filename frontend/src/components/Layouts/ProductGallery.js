import { useProductContext } from '../../hooks/useProductContext';
// css
import './ProductGallery.scss';

function ProductGallery() {
	const { product } = useProductContext();

	return (
		product && (
			<section id='gallery'>
				<div className='product-gallery grid'>
					<div>
						<div className='product-gallery__image'>
							<picture>
								<source
									media='(max-width: 50em)'
									srcSet={product.gallery.first.tablet}
								/>
								<source
									media='(max-width: 37.5em)'
									srcSet={product.gallery.first.mobile}
								/>
								<img
									src={product.gallery.first.desktop}
									alt='product gallery'
								/>
							</picture>
						</div>
					</div>
					<div>
						<div className='product-gallery__image'>
							<picture>
								<source
									media='(max-width: 50em)'
									srcSet={product.gallery.second.tablet}
								/>
								<source
									media='(max-width: 37.5em)'
									srcSet={product.gallery.second.mobile}
								/>
								<img
									src={product.gallery.second.desktop}
									alt='product gallery'
								/>
							</picture>
						</div>
					</div>
					<div>
						<div className='product-gallery__image'>
							<picture>
								<source
									media='(max-width: 50em)'
									srcSet={product.gallery.third.tablet}
								/>
								<source
									media='(max-width: 37.5em)'
									srcSet={product.gallery.third.mobile}
								/>
								<img
									src={product.gallery.third.desktop}
									alt='product gallery'
								/>
							</picture>
						</div>
					</div>
				</div>
			</section>
		)
	);
}
export default ProductGallery;
