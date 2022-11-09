import { useEffect, useState } from 'react';
import { useOrderContext } from '../../hooks/useOrderContext';
import { useNavigate } from 'react-router-dom';
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

	const navigate = useNavigate();

	useEffect(() => {
		// if all orders are removed, then navigate to home page
		if (orders.length === 0) {
			navigate('/');
		}

		// Set Total
		setTotal(
			new Intl.NumberFormat('en-US').format(
				orders.reduce((acc, order) => acc + order.price * order.quantity, 0)
			)
		);

		// Set VAT
		setVat(
			new Intl.NumberFormat('en-US').format(
				orders.reduce((acc, order) => acc + order.price * order.quantity, 0) *
					0.05
			)
		);

		// Set grand total
		setGrandTotal(
			orders.reduce((acc, order) => acc + order.price * order.quantity, 0) + 50
		);
	}, [orders, navigate]);

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
				<div className='summary-final summary-final--1'>
					<p>Total</p>
					<h6>${total}</h6>
				</div>
				<div className='summary-final summary-final--2'>
					<p>Shipping</p>
					<h6>$50</h6>
				</div>
				<div className='summary-final summary-final--3'>
					<p>VAT (include)</p>
					<h6>${vat}</h6>
				</div>
				<div className='summary-final summary-final--4'>
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
			{openModal && <ConfirmModal grandTotal={grandTotal} orders={orders} />}
		</>
	);
};
export default Summary;
