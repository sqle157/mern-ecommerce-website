// Layouts Components
import ProductCategories from '../components/Layouts/ProductCategories';
import ProductsPreview from '../components/Layouts/ProductsPreview';
import BestGear from '../components/Layouts/BestGear';

function Home() {
	return (
		<div className='container'>
			<ProductCategories />
			<ProductsPreview />
			<BestGear />
		</div>
	);
}
export default Home;
