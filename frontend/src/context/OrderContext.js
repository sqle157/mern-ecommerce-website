import { createContext, useReducer } from 'react';

const initialState = {
	orders: JSON.parse(localStorage.getItem('order')) || [],
};

export const OrderContext = createContext();

const orderReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_ORDER': {
			let newOrders;
			// check if there is already the same item in the cart
			const existingOrder = state.orders.find(
				(order) => order.id === action.payload.id
			);

			if (existingOrder) {
				// update the order list if there is existing item
				newOrders = state.orders.map((order) => {
					if (order.id === action.payload.id) {
						order = {
							...action.payload,
							quantity: order.quantity + action.payload.quantity,
						};

						return order;
					}

					return order;
				});
			} else {
				// push the new item to the cart if there is no existing item before
				newOrders = [...state.orders, action.payload];
			}

			localStorage.setItem('order', JSON.stringify(newOrders));

			return {
				orders: [...newOrders],
			};
		}
		case 'UPDATE_ORDER': {
			const newOrders = state.orders.map((order) => {
				if (order.id === action.payload.id) {
					order = {
						...order,
						quantity: action.payload.quantity,
					};

					return order;
				}

				return order;
			});

			localStorage.setItem('order', JSON.stringify(newOrders));

			return {
				orders: [...newOrders],
			};
		}
		case 'REMOVE_ALL_ORDER':
			localStorage.removeItem('order');
			return {
				orders: [],
			};
		default:
			return state;
	}
};

export const OrderContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(orderReducer, initialState);

	return (
		<OrderContext.Provider value={{ ...state, dispatch }}>
			{children}
		</OrderContext.Provider>
	);
};
