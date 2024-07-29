import { createSlice } from '@reduxjs/toolkit';
import { type UserState } from '@/entities/user';
import { userService } from '@/entities/user/user-service.ts';

const initialState: UserState = {
	user: {
		id: null,
		createdAt: null,
		updatedAt: null,
		username: null,
		firstName: null,
		lastName: null,
		balance: 0,
		balanceAmount: null,
		energy: null,
		maxEnergy: null,
		energyAmount: null,
		energyRecoveryAmount: null,
		quantityEnergyBoost: null,
		lastEnergyBoostUpdate: null,
		lastTurboBoostUpdate: null,
		maxQuantityEnergyBoost: null,
		maxQuantityTurboBoost: null,
		quantityTurboBoost: null,
		energyBoostTimeLeft: null,
		turboBoostTimeLeft: null,
		multitapLevel: null,
		multitapPrice: null,
		energyLimitLevel: null,
		energyLimitPrice: null
	},
	accessToken: null
};

const userSlice = createSlice({
	name: 'userSlice',
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
			state.user.balanceAmount = action.payload;
		},

		setEnergy: (state, action) => {
			state.user.energy = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder.addMatcher(userService.endpoints.energyBoost.matchFulfilled, (state, action) => {
			state.user.quantityEnergyBoost = action.payload.quantityEnergyBoost;
		});

		builder.addMatcher(userService.endpoints.turboBoost.matchFulfilled, (state, action) => {
			state.user.quantityTurboBoost = action.payload.quantityTurboBoost;
		});

		builder.addMatcher(userService.endpoints.restoreBoosts.matchFulfilled, (state, action) => {
			state.user.energyBoostTimeLeft = action.payload.energyBoostTimeLeft;
			state.user.turboBoostTimeLeft = action.payload.turboBoostTimeLeft;
			state.user.quantityEnergyBoost = action.payload.quantityEnergyBoost;
			state.user.quantityTurboBoost = action.payload.quantityTurboBoost;
		});

		builder.addMatcher(userService.endpoints.upgradeMultitap.matchFulfilled, (state, action) => {
			state.user.balance = action.payload.balance;
			state.user.energyAmount = action.payload.energyAmount;
			state.user.multitapLevel = action.payload.multitapLevel;
			state.user.multitapPrice = action.payload.multitapPrice;
		});

		builder.addMatcher(userService.endpoints.upgradeEnergyLimit.matchFulfilled, (state, action) => {
			state.user.balance = action.payload.balance;
			state.user.energyLimitLevel = action.payload.energyLimitLevel;
			state.user.energyLimitPrice = action.payload.energyLimitPrice;
			state.user.maxEnergy = action.payload.maxEnergy;
		});
	}
});

export const { setBalance, setUserData, setEnergy, setBalanceAmount } = userSlice.actions;

export const { reducer: userReducer } = userSlice;
