import { useRef } from 'react';
import ReactDOM from 'react-dom';
import { useOrderContext } from '../../hooks/useOrderContext';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
// Components & Icons
import CartItem from './CartItem';
import Button from './Button';
// CSS
import './Cart.scss';

const Cart = ({ setOpenCart }) => {
	const { orders, dispatch } = useOrderContext();
	const ref = useRef();
	useOnClickOutside(ref, () => setOpenCart(false));

	// Handle remove all orders event
	const handleRemoveAll = () => {
		dispatch({ type: 'REMOVE_ALL_ORDER' });
		setOpenCart(false);
	};

	// render the component at the div with cart id
	return ReactDOM.createPortal(
		<div className='overlay'>
			<div className='container'>
				<div className='cart' ref={ref}>
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
