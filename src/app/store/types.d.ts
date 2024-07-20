import { store } from './store';

declare global {
	type AppDispatch = typeof store.dispatch;

	type RootState = ReturnType<typeof store.getState>;
}
