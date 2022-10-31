// Layouts Components
import ProductCategories from '../components/Layouts/ProductCategories';
import ProductPreview from '../components/Layouts/ProductPreview';
import BestGear from '../components/Layouts/BestGear';

function Home() {
	return (
		<div className='container'>
			<ProductCategories />
			<ProductPreview />
			<BestGear />
		</div>
	);
}
export default Home;
