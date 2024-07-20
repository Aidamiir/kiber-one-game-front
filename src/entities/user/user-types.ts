export type UserState = {
	user: UserInterface;
	accessToken: string | null;
}

export interface UserInterface {
	id: string | null;
	created_at: string | null;
	updated_at: string | null;
	username?: string | null;
	first_name: string | null;
	last_name?: string | null;
	balance: number | null;
	balance_amount: number | null;
	energy: number | null;
	energy_amount: number | null;
	energy_recovery_amount: number | null;
	max_energy: number | null;
	quantity_energy_boost: number | null;
	max_quantity_energy_boost: number | null;
	last_energy_boost_update: string | null;
	quantity_turbo_boost: number | null;
	max_quantity_turbo_boost: number | null;
	last_turbo_boost_update: string | null;
	energy_boost_time_left: number | null;
	turbo_boost_time_left: number | null;
	multitap_level: number | null;
	multitap_price: number | null;
	energy_limit_level: number | null;
	energy_limit_price: number | null;
}

export interface UpdateBalanceInterface {
	id: string;
	balance: string;
}

export interface TopUserInterface {
	first_name: string | null;
	last_name?: string | null;
	balance: number | null;
}

export interface RestoreBoostsInterface {
	quantity_turbo_boost: number;
	quantity_energy_boost: number;
	energy_boost_time_left: number | null;
	turbo_boost_time_left: number | null;
}

export interface UpgradeMutitapInterface {
	balance: number,
	multitap_level: number;
	multitap_price: number;
	balance_amount: number;
	energy_amount: number;
}

export interface UpgradeEnergyLimitInterface {
	balance: number;
	energy_limit_level: number;
	energy_limit_price: number;
	max_energy: number;
}
