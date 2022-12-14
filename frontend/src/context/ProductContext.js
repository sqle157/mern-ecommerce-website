import { createContext, useReducer, useEffect } from 'react';
import { useHttpHook } from '../hooks/useHttpHook';

const initialState = {
	products: null,
	product: null,
};

export const ProductContext = createContext();

const productReducer = (state, action) => {
	switch (action.type) {
		case 'SET_PRODUCTS':
			return {
				...state,
				products: action.payload,
			};
		case 'SET_PRODUCT':
			return {
				...state,
				product: action.payload,
			};
		default:
			return state;
	}
};

export const ProductContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(productReducer, initialState);
	const { sendRequest } = useHttpHook();

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const data = await sendRequest('/api/products');

				dispatch({ type: 'SET_PRODUCTS', payload: data });
			} catch (error) {}
		};

		fetchProducts();
	}, [sendRequest]);

	return (
		<ProductContext.Provider value={{ ...state, dispatch }}>
			{children}
		</ProductContext.Provider>
	);
};
