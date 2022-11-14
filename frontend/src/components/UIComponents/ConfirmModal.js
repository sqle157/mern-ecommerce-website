import { useState } from 'react';
import ReactDOM from 'react-dom';
import { useOrderContext } from '../../hooks/useOrderContext';
// Images & Components
import Button from './Button';
import OrderConfirmIcon from '../../assets/checkout/icon-order-confirmation.svg';
// CSS
import './ConfirmModal.scss';

const ConfirmModal = ({ grandTotal, orders }) => {
	const { dispatch } = useOrderContext();
	const [finalOrders, setFinalOrders] = useState([{ ...orders[0] }]);

	// handle see more event
	const handleSeeMoreOrder = () => {
		setFinalOrders(orders);
	};

	// handle see less event
	const handleSeeLessOrder = () => {
		setFinalOrders([{ ...orders[0] }]);
	};

	// handle back to home event
	const handleHomeClick = () => {
		dispatch({ type: 'REMOVE_ALL_ORDER' });
		dispatch({ type: 'TOGGLE_MODAL' });
	};

	return ReactDOM.createPortal(
		<div className='overlay overlay--modal'>
			<div className='container'>
				<div className='modal'>
					<div>
						<img src={OrderConfirmIcon} alt='' />
					</div>
					<h3>
						Thank you <br /> for your order
					</h3>
					<p>You will receive an email confirmation shortly</p>
					<div className='modal__content'>
						<div className='modal__items'>
							{finalOrders.map((order) => (
								<div key={order.id} className='modal__details'>
									<div className='order-image'>
										<img src={order.image} alt='' />
									</div>
									<div>
										<p className='order-name'>{order.name}</p>
										<span className='order-price'>
											$ {new Intl.NumberFormat('en-US').format(order.price)}
										</span>
									</div>
									<div>
										<p className='order-quantity'>x{order.quantity}</p>
									</div>
								</div>
							))}

							<p
								className='order-remaining'
								onClick={
									finalOrders.length === 1
										? handleSeeMoreOrder
										: handleSeeLessOrder
								}>
								{finalOrders.length === 1
									? `and ${orders.length - 1} other item(s)`
									: 'View Less'}
							</p>
						</div>
						<div className='modal__total'>
							<div>
								<p>Grand Total</p>
								<h6>$ {grandTotal}</h6>
							</div>
						</div>
					</div>
					<div className='modal__footer'>
						<Button
							className='btn btn-primary'
							text='Back to home'
							to='/'
							onClick={handleHomeClick}
						/>
					</div>
				</div>
			</div>
		</div>,
		document.getElementById('modal')
	);
};
export default ConfirmModal;
