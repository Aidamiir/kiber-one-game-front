import './main.scss';

import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App, AuthProvider, PageLoadedProvider, store } from './app';

ReactDOM.createRoot(document.getElementById('kog-root')!).render(
	<React.StrictMode>
		{/*<BrowserRouter>*/}
			<BrowserRouter basename={'/kiber-one-game-front/'}>
			<Provider store={store}>
				<AuthProvider>
					<PageLoadedProvider>
						<App/>
					</PageLoadedProvider>
				</AuthProvider>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
);
