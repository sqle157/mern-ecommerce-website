import { useState, useEffect } from 'react';
import { useOrderContext } from '../../hooks/useOrderContext';
// Icons
import { FaPlus, FaMinus } from 'react-icons/fa';
// CSS
import './CartItem.scss';

const CartItem = ({ order }) => {
	const [quantity, setQuantity] = useState(order.quantity);
	const { dispatch } = useOrderContext();

	useEffect(() => {
		dispatch({ type: 'UPDATE_ORDER', payload: { id: order.id, quantity } });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [quantity]);

	const handleReduceQuantiy = () => {
		setQuantity((prevQuantity) => {
			if (prevQuantity === 1) {
				// remove order if the quantity is reduced to 0
				dispatch({ type: 'REMOVE_ORDER', payload: { id: order.id } });
			} else {
				return prevQuantity - 1;
			}
		});
	};

	const handleAddQuantity = () => {
		setQuantity((prevQuantity) => prevQuantity + 1);
	};

	return (
		<div key={order.id} className='cart__item flex'>
			<div className='order-image'>
				<img src={order.image} alt='' />
			</div>
			<div>
				<p className='order-name'>{order.name}</p>
				<span className='order-price'>
					$ {new Intl.NumberFormat('en-US').format(order.price)}
				</span>
			</div>
			<div className='flex'>
				<FaMinus onClick={handleReduceQuantiy} />
				<input
					type='number'
					value={quantity}
					onChange={(e) => setQuantity(e.target.value)}
				/>
				<FaPlus onClick={handleAddQuantity} />
			</div>
		</div>
	);
};
export default CartItem;
