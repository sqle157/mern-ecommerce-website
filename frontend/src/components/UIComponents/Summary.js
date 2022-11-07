import { useEffect, useState } from 'react';
import { useOrderContext } from '../../hooks/useOrderContext';
// Components
import Button from './Button';
import ConfirmModal from './ConfirmModal';
// CSS
import './Summary.scss';

const Summary = () => {
	const { orders, openModal } = useOrderContext();
	const [total, setTotal] = useState();
	const [vat, setVat] = useState();
	const [grandTotal, setGrandTotal] = useState();

	useEffect(() => {
		// Calculate Total (before taxes)
		setTotal(
			new Intl.NumberFormat('en-US').format(
				orders.reduce((acc, order) => acc + order.price * order.quantity, 0)
			)
		);
		// Calculate VAT
		setVat(
			new Intl.NumberFormat('en-US').format(
				orders.reduce((acc, order) => acc + order.price * order.quantity, 0) *
					0.05
			)
		);
		// Calculate grand total (include taxes)
		setGrandTotal(
			new Intl.NumberFormat('en-US').format(
				orders.reduce((acc, order) => acc + order.price * order.quantity, 0) *
					0.05 +
					50 +
					orders.reduce((acc, order) => acc + order.price * order.quantity, 0)
			)
		);
	}, [orders]);

	return (
		<>
			<div className='summary'>
				<h6>Summary</h6>
				{orders.map((order) => (
					<div key={order.id} className='summary-item flex'>
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
				<div className='summary-final'>
					<p>Total</p>
					<h6>${total}</h6>
				</div>
				<div className='summary-final'>
					<p>Shipping</p>
					<h6>$50</h6>
				</div>
				<div className='summary-final'>
					<p>VAT (include)</p>
					<h6>${vat}</h6>
				</div>
				<div className='summary-final'>
					<p>Grand Total</p>
					<h6>${grandTotal}</h6>
				</div>

				<Button
					className='btn btn-primary'
					text='Continue & pay'
					form='checkout-form'
					role='submit'
				/>
			</div>
			{openModal && <ConfirmModal grandTotal={grandTotal} />}
		</>
	);
};
export default Summary;
