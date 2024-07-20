import { type ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Loading } from '@/shared/ui';
import { setUserData, useAuthorizeMutation } from '@/entities';
import { useAppDispatch } from '@/shared/hooks';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [authorize, { isSuccess, isLoading, data: authData }] = useAuthorizeMutation();
	const dispatch = useAppDispatch();

	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const data = searchParams.get('data');

	useEffect(() => {
		if (data) {
			authorize(JSON.parse(data)).unwrap();
		}
	}, [data, authorize]);

	useEffect(() => {
		if (authData && isSuccess) {
			dispatch(setUserData(authData));
		}
	}, [authData, isSuccess, dispatch]);

	if (isLoading && !isSuccess) {
		return <Loading/>;
	}

	return isSuccess && !isLoading ? children : null;
};
