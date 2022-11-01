import { createContext, useReducer } from 'react';

const initialState = {
	orders: [],
};

export const OrderContext = createContext();

const orderReducer = (state, action) => {
	switch (action.type) {
		case 'SET_ORDER':
			return {
				orders: [...state.orders, action.payload],
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
