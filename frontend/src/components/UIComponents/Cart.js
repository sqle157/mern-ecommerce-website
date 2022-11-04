import { useRef } from 'react';
import ReactDOM from 'react-dom';
import { useOrderContext } from '../../hooks/useOrderContext';
// Components & Icons
import CartItem from './CartItem';
import Button from './Button';
// CSS
import './Cart.scss';

const Cart = ({ setOpenCart }) => {
	const { orders, dispatch } = useOrderContext();
	const ref = useRef();

	const handleOverlayClick = (e) => {
		if (e.target === ref.current || e.target.classList.contains('container')) {
			setOpenCart(false);
		}
	};

	const handleRemoveAll = () => {
		dispatch({ type: 'REMOVE_ALL_ORDER' });
	};

	return ReactDOM.createPortal(
		<div className='overlay' ref={ref} onClick={handleOverlayClick}>
			<div className='container'>
				<div className='cart'>
					{orders.length === 0 ? (
						<h6 className='opacity-5'>There is no order in the cart</h6>
					) : (
						<>
							<div className='cart__header flex'>
								<h6>Cart ({orders.length})</h6>
								<button className='cart__btn' onClick={handleRemoveAll}>
									Remove All
								</button>
							</div>
							<div className='cart__content'>
								{orders.map((order) => (
									<CartItem key={order.id} order={order} />
								))}
							</div>
							<div className='cart__total flex'>
								<p>Total</p>
								<h6>
									${' '}
									{new Intl.NumberFormat('en-US').format(
										orders.reduce(
											(acc, order) => acc + order.price * order.quantity,
											0
										)
									)}
								</h6>
							</div>
							<Button
								className='btn btn-primary'
								text='Checkout'
								to='/checkout'
								onClick={() => setOpenCart(false)}
							/>
						</>
					)}
				</div>
			</div>
		</div>,
		document.getElementById('cart')
	);
};
export default Cart;
