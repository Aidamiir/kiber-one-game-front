export type UserState = {
	user: UserInterface;
	accessToken: string | null;
}

export interface UserInterface {
	id: string | null;
	createdAt: string | null;
	updatedAt: string | null;
	username?: string | null;
	firstName: string | null;
	lastName?: string | null;
	balance: number | null;
	balanceAmount: number | null;
	energy: number | null;
	energyAmount: number | null;
	energyRecoveryAmount: number | null;
	maxEnergy: number | null;
	quantityEnergyBoost: number | null;
	maxQuantityEnergyBoost: number | null;
	lastEnergyBoostUpdate: string | null;
	quantityTurboBoost: number | null;
	maxQuantityTurboBoost: number | null;
	lastTurboBoostUpdate: string | null;
	energyBoostTimeLeft: number | null;
	turboBoostTimeLeft: number | null;
	multitapLevel: number | null;
	multitapPrice: number | null;
	energyLimitLevel: number | null;
	energyLimitPrice: number | null;
}

export interface UpdateBalanceInterface {
	id: string;
	balance: string;
}

export interface TopUserInterface {
	firstName: string | null;
	lastName?: string | null;
	balance: number | null;
}

export interface RestoreBoostsInterface {
	quantityTurboBoost: number;
	quantityEnergyBoost: number;
	energyBoostTimeLeft: number | null;
	turboBoostTimeLeft: number | null;
}

export interface UpgradeMultitapInterface {
	balance: number;
	multitapLevel: number;
	multitapPrice: number;
	balanceAmount: number;
	energyAmount: number;
}

export interface UpgradeEnergyLimitInterface {
	balance: number;
	energyLimitLevel: number;
	energyLimitPrice: number;
	maxEnergy: number;
}
