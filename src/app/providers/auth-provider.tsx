import { Fragment, type ReactNode, useEffect, useState } from 'react';
import { Loading } from '@/shared/ui';
import { setUserData, useAuthorizeMutation } from '@/entities';
import { useAppDispatch, useTelegramData } from '@/shared/hooks';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const dispatch = useAppDispatch();
	const { user, isReady, error } = useTelegramData();
	const [authorize, { isSuccess, isLoading, data: authData }] = useAuthorizeMutation();
	const [isExpanded, setIsExpanded] = useState(false);

	useEffect(() => {
		if (isReady && user) {
			const dataToSend = {
				id: user.id,
				username: user.username,
				firstName: user.first_name,
				lastName: user.last_name
			};

			setTimeout(() => {
				window.Telegram.WebApp.expand();
			}, 1500)
			setIsExpanded(true);
			authorize(dataToSend).unwrap();
		}
	}, [isReady, user, authorize]);

	useEffect(() => {
		if (isSuccess && authData) {
			dispatch(setUserData(authData));
		}
	}, [authData, isSuccess, dispatch]);

	if (isLoading || !isExpanded) {
		return <Loading/>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	return isSuccess && !isLoading ? <Fragment>{children}</Fragment> : null;
};
