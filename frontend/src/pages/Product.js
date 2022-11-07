import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHttpHook } from '../hooks/useHttpHook';
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
	const { isLoading, error, sendRequest } = useHttpHook();

	const { slug } = useParams();

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const data = await sendRequest(`/api/products/${slug}`);

				console.log(data);
				dispatch({ type: 'SET_PRODUCT', payload: data });
			} catch (error) {}
		};

		fetchProduct();
	}, [dispatch, slug, sendRequest]);

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
