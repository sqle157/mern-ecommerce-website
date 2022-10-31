import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
// pages & components
import { MainContainer } from './components/HelperComponents/MainContainer';
import { ScrollToTop } from './components/HelperComponents/ScrollToTop';
import LoadingSpinner from './components/UIComponents/LoadingSpinner';

const Home = lazy(() => import('./pages/Home'));
const Category = lazy(() => import('./pages/Category'));
const Product = lazy(() => import('./pages/Product'));

function App() {
	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
	}, []);

	return (
		<>
			<BrowserRouter>
				<ScrollToTop>
					<Suspense
						fallback={
							<div className='center'>
								<LoadingSpinner />
							</div>
						}>
						<Routes>
							<Route path='/' element={<MainContainer />}>
								<Route index element={<Home />} />
								<Route path=':category' element={<Category />} />
								<Route path='products/:slug' element={<Product />} />
								<Route path='*' element={<Navigate to='/' />} />
							</Route>
						</Routes>
					</Suspense>
				</ScrollToTop>
			</BrowserRouter>
		</>
	);
}

export default App;
