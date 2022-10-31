import { createContext, useReducer, useEffect } from 'react';

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

	useEffect(() => {
		const fetchProducts = async () => {
			const response = await fetch('/api/products');

			const data = await response.json();

			if (response.ok) {
				dispatch({ type: 'SET_PRODUCTS', payload: data });
			}

			console.log(data);
		};

		fetchProducts();
	}, []);

	return (
		<ProductContext.Provider value={{ ...state, dispatch }}>
			{children}
		</ProductContext.Provider>
	);
};
