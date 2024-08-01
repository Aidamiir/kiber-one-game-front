import { Fragment, type ReactNode, useEffect } from 'react';
import { Loading } from '@/shared/ui';
import { setUserData, useAuthorizeMutation } from '@/entities';
import { useAppDispatch, useTelegramData } from '@/shared/hooks';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const dispatch = useAppDispatch();
	const { user, isReady, error } = useTelegramData();
	const [authorize, { isSuccess, isLoading, data: authData }] = useAuthorizeMutation();

	useEffect(() => {
		if (isReady && user) {
			// const dataToSend = {
			// 	id: user.id,
			// 	username: user.username,
			// 	firstName: user.first_name,
			// 	lastName: user.last_name
			// };

			// const dataToSend = {
			// 	id: 12313123,
			// 	username: 'asdasdasd',
			// 	firstName: 'asdasdas',
			// 	lastName: user.last_name
			// };
			//
			// authorize(dataToSend).unwrap()
		}

		const dataToSend = {
			id: 12313123,
			username: 'asdasdasd',
			firstName: 'asdasdas',
			lastName: 'asdaasd'
		};

		authorize(dataToSend).unwrap()

		// [isReady, user, authorize]
	}, []);

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
