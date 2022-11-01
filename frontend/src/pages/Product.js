import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProductContext } from '../hooks/useProductContext';

// Components
import LoadingSpinner from '../components/UIComponents/LoadingSpinner';
import Button from '../components/UIComponents/Button';
// Layouts
import ProductSection from '../components/Layouts/ProductSection';
import ProductFeatures from '../components/Layouts/ProductFeatures';
import ProductGallery from '../components/Layouts/ProductGallery';
import ProductOthers from '../components/Layouts/ProductOthers';
import ProductCategories from '../components/Layouts/ProductCategories';
import BestGear from '../components/Layouts/BestGear';

function Product() {
	const { dispatch } = useProductContext();
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const { slug } = useParams();

	useEffect(() => {
		setIsLoading(true);
		const fetchProduct = async () => {
			const response = await fetch(`/api/products/${slug}`);

			const data = await response.json();

			if (response.ok) {
				// console.log(data);
				dispatch({ type: 'SET_PRODUCT', payload: data });
			} else {
				setError(data.error);
			}

			setIsLoading(false);
		};

		fetchProduct();
	}, [dispatch, slug]);

	return (
		<div className='container'>
			{isLoading && (
				<div className='center'>
					<LoadingSpinner />
				</div>
			)}

			{!error && (
				<>
					<ProductSection />
					<ProductFeatures />
					<ProductGallery />
					<ProductOthers />
				</>
			)}

			{error && (
				<div className='error'>
					<h1>{error}</h1>
					<Button className={'btn btn-primary'} text='Go To Home' to='/' />
				</div>
			)}
			<ProductCategories />
			<BestGear />
		</div>
	);
}
export default Product;
