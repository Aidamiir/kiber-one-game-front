import { createSlice } from '@reduxjs/toolkit';
import { type UserState } from '@/entities/user';
import { userService } from '@/entities/user/user-service.ts';

const initialState: UserState = {
	user: {
		id: null,
		created_at: null,
		updated_at: null,
		username: null,
		first_name: null,
		last_name: null,
		balance: 0,
		balance_amount: null,
		energy: null,
		max_energy: null,
		energy_amount: null,
		energy_recovery_amount: null,
		quantity_energy_boost: null,
		last_energy_boost_update: null,
		last_turbo_boost_update: null,
		max_quantity_energy_boost: null,
		max_quantity_turbo_boost: null,
		quantity_turbo_boost: null,
		energy_boost_time_left: null,
		turbo_boost_time_left: null,
		multitap_level: null,
		multitap_price: null,
		energy_limit_level: null,
		energy_limit_price: null
	},
	accessToken: null
};

const userSlice = createSlice({
	name: 'user-slice',
	initialState,
	reducers: {
		setUserData: (state, action) => {
			state.user = action.payload.user;
			state.accessToken = action.payload.accessToken;
		},

		setBalance: (state, action) => {
			state.user.balance = action.payload;
		},

		setBalanceAmount: (state, action) => {
			state.user.balance_amount = action.payload;
		},

		setEnergy: (state, action) => {
			state.user.energy = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder.addMatcher(userService.endpoints.energyBoost.matchFulfilled, (state, action) => {
			state.user.quantity_energy_boost = action.payload.quantity_energy_boost;
		});

		builder.addMatcher(userService.endpoints.turboBoost.matchFulfilled, (state, action) => {
			state.user.quantity_turbo_boost = action.payload.quantity_turbo_boost;
		});

		builder.addMatcher(userService.endpoints.restoreBoosts.matchFulfilled, (state, action) => {
			state.user.energy_boost_time_left = action.payload.energy_boost_time_left;
			state.user.turbo_boost_time_left = action.payload.turbo_boost_time_left;
			state.user.quantity_energy_boost = action.payload.quantity_energy_boost;
			state.user.quantity_turbo_boost = action.payload.quantity_turbo_boost;
		});

		builder.addMatcher(userService.endpoints.upgradeMultitap.matchFulfilled, (state, action) => {
			state.user.balance = action.payload.balance;
			state.user.energy_amount = action.payload.energy_amount;
			state.user.multitap_level = action.payload.multitap_level;
			state.user.multitap_price = action.payload.multitap_price;
		});

		builder.addMatcher(userService.endpoints.upgradeEnergyLimit.matchFulfilled, (state, action) => {
			state.user.balance = action.payload.balance;
			state.user.energy_limit_level = action.payload.energy_limit_level;
			state.user.energy_limit_price = action.payload.energy_limit_price;
			state.user.max_energy = action.payload.max_energy;
		});
	}
});

export const { setBalance, setUserData, setEnergy, setBalanceAmount } = userSlice.actions;

export const { reducer: userReducer } = userSlice;
