import { useProductContext } from '../../hooks/useProductContext';
// components
import Button from '../UIComponents/Button';
// css
import './ProductOthers.scss';

function ProductOthers() {
	const { product } = useProductContext();

	return (
		product && (
			<section>
				<div className='product-others grid'>
					<h3>You May Also Like</h3>
					{product.others.map((other, index) => (
						<div key={index} className='product-other'>
							<div>
								<picture>
									<source
										media='(max-width: 50em)'
										srcSet={other.image.tablet}
									/>
									<source
										media='(max-width: 37.5em)'
										srcSet={other.image.mobile}
									/>
									<img src={other.image.desktop} alt='other product' />
								</picture>
							</div>
							<h5>{other.name}</h5>
							<Button
								className='btn btn-primary'
								text='See Product'
								to={`/products/${other.slug}`}
							/>
						</div>
					))}
				</div>
			</section>
		)
	);
}
export default ProductOthers;
