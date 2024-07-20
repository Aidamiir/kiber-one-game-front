import { api } from '@/app/api';
import type { ActionResult } from '@/shared/types';
import { type AuthorizeInterface } from '@/entities/auth';

export const authService = api.injectEndpoints({
	endpoints: (builder) => ({
		authorize: builder.mutation<ActionResult<AuthorizeInterface>, unknown>({
			query: (dto) => ({
				url: '/auth/sign-in/telegram',
				method: 'POST',
				body: dto,
			})
		}),
	})
});

export const {useAuthorizeMutation } = authService;
