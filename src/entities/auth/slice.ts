import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
	accessToken: string | null;
}

const initialState: AuthState = {
	accessToken: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {}
});

// export const { } = authSlice.actions;
export const { reducer: authReducer } = authSlice;
