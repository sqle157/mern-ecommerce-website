import Button from './Button';
// Css
import './ProductItem.scss';

function ProductItem({ product, index }) {
	return (
		<div className={`product-item flex ${index === 1 ? 'flex-reverse' : ''}`}>
			<div>
				<picture>
					<source media='(max-width: 50em)' srcSet={product.image.tablet} />
					<source media='(max-width: 37.5em)' srcSet={product.image.mobile} />
					<img src={product.image.desktop} alt='product' />
				</picture>
			</div>
			<div className='product-intro'>
				{product.new && <span>New Product</span>}
				<h2>{product.name}</h2>
				<p className='opacity-5'>{product.description}</p>
				<Button
					className='btn btn-primary'
					text='See Product'
					to={`/products/${product.slug}`}
				/>
			</div>
		</div>
	);
}
export default ProductItem;
