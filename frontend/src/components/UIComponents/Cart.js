import ReactDOM from 'react-dom';

// CSS
import './Cart.scss';

const Cart = () => {
	return ReactDOM.createPortal(
		<div className='overlay'>
			<div className='cart'></div>
		</div>,
		document.getElementById('cart')
	);
};
export default Cart;
