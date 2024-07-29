import { Fragment, type ReactNode, useEffect } from 'react';
import { Loading } from '@/shared/ui';
import { useAppDispatch, useTelegramData } from '@/shared/hooks';
import { setUserData, useAuthorizeMutation } from '@/entities';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const dispatch = useAppDispatch();
	const { user, isReady, error } = useTelegramData();
	const [authorize, { isSuccess, isLoading, data: authData }] = useAuthorizeMutation();

	useEffect(() => {
		if (isReady && user) {
			const dataToSend = JSON.stringify({
				id: user.id,
				username: user.username,
				firstName: user.first_name,
				lastName: user.last_name
			});

			authorize(dataToSend).unwrap()
		}
	}, [isReady, user, authorize]);

	useEffect(() => {
		if (isSuccess && authData) {
			dispatch(setUserData(authData));
		}
	}, [authData, isSuccess, dispatch]);

	if (isLoading) {
		return <Loading/>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	return isSuccess && !isLoading ? <Fragment>{children}</Fragment> : null;
};
