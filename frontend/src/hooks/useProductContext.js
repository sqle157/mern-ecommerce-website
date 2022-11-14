import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

// Custom hook to return the context of ProductContext
export const useProductContext = () => {
	const context = useContext(ProductContext);

	if (!context) {
		throw Error(
			'useProductContext must be used inside an ProductContextProvider'
		);
	}

	return context;
};
