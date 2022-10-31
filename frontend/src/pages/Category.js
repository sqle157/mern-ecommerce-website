import { useParams } from 'react-router-dom';
// Layouts
import ProductsSection from '../components/Layouts/ProductsSection';
import ProductCategories from '../components/Layouts/ProductCategories';
import BestGear from '../components/Layouts/BestGear';

function Category() {
	const { category } = useParams();

	return (
		<div className='container'>
			<ProductsSection category={category} />
			<ProductCategories />
			<BestGear />
		</div>
	);
}
export default Category;
