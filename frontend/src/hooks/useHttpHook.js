import { useState, useCallback, useRef, useEffect } from 'react';

// Custom hook to handle fetch request
export const useHttpHook = () => {
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [emptyFields, setEmptyFields] = useState([]);
	const [errorFields, setErrorFields] = useState([]);

	const activeHttpRequest = useRef([]);

	// Handle fetch request
	const sendRequest = useCallback(
		async (url, method = 'GET', body = null, headers = {}) => {
			setIsLoading(true);
			// reset previous error & field lists
			setError(null);
			setEmptyFields([]);
			setErrorFields([]);

			// Set controller signal
			const httpAbortController = new AbortController();
			activeHttpRequest.current.push(httpAbortController);

			try {
				// Fetch the response
				const response = await fetch(url, {
					method,
					body,
					headers,
					signal: httpAbortController.signal,
				});

				const data = await response.json();

				// Filter out the signal from the current signals
				activeHttpRequest.current = activeHttpRequest.current.filter(
					(reqCtrl) => reqCtrl !== httpAbortController
				);

				if (!response.ok) {
					// If there's empty fields list
					if (data.emptyFields) {
						setEmptyFields(data.emptyFields);
					}

					// If there's error fields list
					if (data.errorFields) {
						setErrorFields(data.errorFields);
					}

					throw new Error(data.error);
				}

				setIsLoading(false);

				return data;
			} catch (error) {
				console.log(error.message);
				if (
					error.message !== 'The user aborted a request.' &&
					error.message !== 'The operation was aborted. ' &&
					error.message !== 'Fetch is aborted'
				) {
					// Catch & set the error
					setError(error.message);
					setIsLoading(false);
					throw error;
				}
			}
		},
		[]
	);

	// Cleanup function everytime the component re-renders
	useEffect(() => {
		return () => {
			activeHttpRequest.current.forEach((abortCtrl) => abortCtrl.abort());
		};
	}, []);

	return { isLoading, error, emptyFields, errorFields, sendRequest };
};
