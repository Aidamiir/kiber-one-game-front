import { api } from '@/app/api';
import type { ActionResult } from '@/shared/types';
import type {
	RestoreBoostsInterface,
	TopUserInterface,
	UpdateBalanceInterface,
	UpgradeEnergyLimitInterface,
	UpgradeMutitapInterface
} from '@/entities';

export const userService = api.injectEndpoints({
	endpoints: (builder) => ({
		updateBalance: builder.mutation<ActionResult<unknown>, UpdateBalanceInterface>({
			query: (dto) => ({
				url: '/users/update-balance',
				method: 'POST',
				body: dto,
				headers: {
					// 'Authorization': `Bearer ${dto.token}`,
				},
			})
		}),
		topUser: builder.query<TopUserInterface, void>({
			query: () => ({
				url: '/users/top-user',
				method: 'GET',
				headers: {
					// 'Authorization': `Bearer ${dto.token}`,
				},
				keepUnusedDataFor: 0
			})
		}),

		energyBoost: builder.mutation<{ quantity_energy_boost: number }, unknown>({
			query: (id: number) => ({
				url: `/users/use-energy-boost/${id}`,
				method: 'POST',
				headers: {
					// 'Authorization': `Bearer ${dto.token}`,
				},
			})
		}),

		turboBoost: builder.mutation<{ quantity_turbo_boost: number }, unknown>({
			query: (id) => ({
				url: `/users/use-turbo-boost/${id}`,
				method: 'POST',
				headers: {
					// 'Authorization': `Bearer ${dto.token}`,
				},
			})
		}),

		restoreBoosts: builder.mutation<RestoreBoostsInterface, unknown>({
			query: (id) => ({
				url: `/users/restore-boosts/${id}`,
				method: 'POST',
				headers: {
					// 'Authorization': `Bearer ${dto.token}`,
				},
			})
		}),

		upgradeMultitap: builder.mutation<UpgradeMutitapInterface, unknown>({
			query: (id) => ({
				url: `/users/upgrade-multitap/${id}`,
				method: 'POST',
				headers: {
					// 'Authorization': `Bearer ${dto.token}`,
				},
			})
		}),

		upgradeEnergyLimit: builder.mutation<UpgradeEnergyLimitInterface, unknown>({
			query: (id) => ({
				url: `/users/upgrade-energy-limit/${id}`,
				method: 'POST',
				headers: {
					// 'Authorization': `Bearer ${dto.token}`,
				},
			})
		}),
	})
});

export const {
	useUpdateBalanceMutation,
	useTopUserQuery,
	useEnergyBoostMutation,
	useTurboBoostMutation,
	useRestoreBoostsMutation,
	useUpgradeMultitapMutation,
	useUpgradeEnergyLimitMutation
} = userService;
