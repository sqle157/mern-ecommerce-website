import { Link } from 'react-router-dom';
// Components
import Form from '../UIComponents/Form';
import Summary from '../UIComponents/Summary';
// CSS
import './CheckoutSection.scss';

function CheckoutSection() {
	return (
		<>
			<section id='checkout'>
				<Link to='/' className='opacity-5'>
					Go Back
				</Link>
				<div className='grid checkout-container'>
					<Form />
					<Summary />
				</div>
			</section>
		</>
	);
}
export default CheckoutSection;
