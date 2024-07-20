import './main.scss';

import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App, AuthProvider, EnergyProvider, PageLoadedProvider, store } from './app';

ReactDOM.createRoot(document.getElementById('kog-root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			{/*<BrowserRouter basename={'/kiber-one-web-app/'}>*/}
			<Provider store={store}>
				<AuthProvider>
					<PageLoadedProvider>
						<EnergyProvider>
							<App/>
						</EnergyProvider>
					</PageLoadedProvider>
				</AuthProvider>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
);
