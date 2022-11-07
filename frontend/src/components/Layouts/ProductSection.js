import { useNavigate, Link } from 'react-router-dom';
import { useProductContext } from '../../hooks/useProductContext';
// Components
import ProductItem from '../UIComponents/ProductItem';
// CSS
import './ProductSection.scss';

function ProductSection() {
	const { product } = useProductContext();

	const navigate = useNavigate();

	const handleClick = () => {
		navigate(-1);
	};

	return (
		product && (
			<section id='product'>
				<div className='grid product-container'>
					<Link className='opacity-5' onClick={handleClick}>
						Go Back
					</Link>
					<ProductItem product={product} productPage />
				</div>
			</section>
		)
	);
}
export default ProductSection;
