import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { api } from '@/app/api';
import { authReducer, userReducer } from '@/entities';

const rootReducer = combineReducers({
	auth: authReducer,
	user: userReducer,
	[api.reducerPath]: api.reducer
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => {
		const defaultMiddleware = getDefaultMiddleware();

		return defaultMiddleware.concat([api.middleware]);
	},
	devTools: true
});
