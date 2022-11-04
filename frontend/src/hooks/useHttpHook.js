import { useState, useCallback, useRef, useEffect } from 'react';

export const useHttpHook = () => {
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const activeHttpRequest = useRef([]);

	const sendRequest = useCallback(
		async (url, method = 'GET', body = null, headers = {}) => {
			setIsLoading(true);
			setError(null);
			// Set controller signal
			const httpAbortController = new AbortController();
			activeHttpRequest.current.push(httpAbortController);

			try {
				const response = await fetch(url, {
					method,
					body,
					headers,
					signal: httpAbortController.signal,
				});

				const data = await response.json();

				activeHttpRequest.current = activeHttpRequest.current.filter(
					(reqCtrl) => reqCtrl !== httpAbortController
				);

				if (!response.ok) {
					throw new Error(data.error);
				}

				setIsLoading(false);

				return data;
			} catch (error) {
				if (error.message !== 'The user aborted a request.') {
					setError(error.message);
					setIsLoading(false);
					throw error;
				}
			}
		},
		[]
	);

	useEffect(() => {
		return () => {
			activeHttpRequest.current.forEach((abortCtrl) => abortCtrl.abort());
		};
	}, []);

	return { isLoading, error, sendRequest };
};
