import { useProductContext } from '../../hooks/useProductContext';
// css
import './ProductFeatures.scss';

function ProductFeatures() {
	const { product } = useProductContext();

	const featuresString = product?.features.replace(/\\n/g, '\n');

	return (
		product && (
			<section id='features'>
				<div className='product-features grid'>
					<div>
						<h3>Features</h3>
						{featuresString.split('\n\n').map((line, index) => (
							<p key={index} className='opacity-5'>
								{line}
								<br /> <br />
							</p>
						))}
					</div>
					<div>
						<h3>In The Box</h3>
						<div>
							{product.includes.map((include, index) => (
								<p key={index} className='text-caps'>
									<span className='opacity-1'>{include.quantity}x</span>
									<span className='opacity-5'>{include.item}</span>
								</p>
							))}
						</div>
					</div>
				</div>
			</section>
		)
	);
}
export default ProductFeatures;
