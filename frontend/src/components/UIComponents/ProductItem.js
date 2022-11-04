import { useState } from 'react';
import { useOrderContext } from '../../hooks/useOrderContext';
// components & icons
import Button from './Button';
import { FaPlus, FaMinus } from 'react-icons/fa';
// Css
import './ProductItem.scss';

function ProductItem({ product, index, productPage }) {
	const [productQuantity, setProductQuantity] = useState(1);
	const { dispatch } = useOrderContext();

	const handleMinusClick = () => {
		setProductQuantity((quantity) => (quantity !== 1 ? quantity - 1 : 1));
	};

	const handlePlusClick = () => {
		setProductQuantity((quantity) => quantity + 1);
	};

	const handleAddToCart = () => {
		const productItem = {
			id: product._id,
			name: product.shortName,
			price: product.price,
			image: product.image.mobile,
			quantity: productQuantity,
		};

		setProductQuantity(1);

		dispatch({ type: 'ADD_ORDER', payload: productItem });
	};

	if (productPage) {
		return (
			<div className='product-item flex'>
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
					<h6>$ {new Intl.NumberFormat('en-US').format(product.price)}</h6>

					<div className='product-action flex'>
						<div className='flex'>
							<FaMinus className='icon' onClick={handleMinusClick} />
							<input
								type='number'
								value={productQuantity}
								onChange={(e) => setProductQuantity(e.target.value)}
							/>
							<FaPlus className='icon' onClick={handlePlusClick} />
						</div>

						<Button
							className='btn btn-primary'
							text='Add to cart'
							onClick={handleAddToCart}
						/>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className={`product-item flex ${index === 1 ? 'flex-reverse' : ''}`}>
			<div>
				<picture>
					<source
						media='(max-width: 50em)'
						srcSet={product.categoryImage.tablet}
					/>
					<source
						media='(max-width: 37.5em)'
						srcSet={product.categoryImage.mobile}
					/>
					<img src={product.categoryImage.desktop} alt='product' />
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
