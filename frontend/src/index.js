import React from 'react';
import ReactDOM from 'react-dom/client';
import 'the-new-css-reset/css/reset.css';
import './sass/main.scss';
import App from './App';
import { ProductContextProvider } from './context/ProductContext';
import { OrderContextProvider } from './context/OrderContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ProductContextProvider>
			<OrderContextProvider>
				<App />
			</OrderContextProvider>
		</ProductContextProvider>
	</React.StrictMode>
);
