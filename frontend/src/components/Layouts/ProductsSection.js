import { useProductContext } from '../../hooks/useProductContext';
// components
import Button from '../UIComponents/Button';
import ProductItem from '../UIComponents/ProductItem';
// css
import './ProductsSection.scss';

function Products({ category }) {
	const { products } = useProductContext();

	const productsList = products?.filter(
		(product) => product.category === category
	);

	if (productsList?.length === 0) {
		return (
			<div className='error'>
				<h1>No such category</h1>
				<Button className={'btn btn-primary'} text='Go To Home' to='/' />
			</div>
		);
	}

	return (
		<section>
			<div className='grid products-container'>
				{productsList &&
					productsList
						.reverse()
						.map((product, index) => (
							<ProductItem key={index} product={product} index={index} />
						))}
			</div>
		</section>
	);
}
export default Products;
