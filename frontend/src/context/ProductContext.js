import { createContext, useReducer, useEffect } from 'react';
import { useHttpHook } from '../hooks/useHttpHook';

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
	const [state, dispatch] = useReducer(productReducer, {
		products: null,
		product: null,
	});
	const { sendRequest } = useHttpHook();

	useEffect(() => {
		const fetchProducts = async () => {
			const data = await sendRequest('/api/products');

			dispatch({ type: 'SET_PRODUCTS', payload: data });
		};

		fetchProducts();
	}, [sendRequest]);

	return (
		<ProductContext.Provider value={{ ...state, dispatch }}>
			{children}
		</ProductContext.Provider>
	);
};
