import { ReactNode, useEffect } from 'react';
import { setBalance, setBalanceAmount, setEnergy } from '@/entities';
import socket from '@/socket.ts';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';

export const PageLoadedProvider = (props: Props) => {
	const { children } = props;
	const dispatch = useAppDispatch();
	const { id } = useAppSelector(({ user }) => user.user);

	useEffect(() => {
		window.onload = () => document.documentElement.classList.add('loaded');
	}, []);

	useEffect(() => {
		if (!id) return;

		const handleUpdateCoins = (newBalance: number, balanceAmount: number) => {
			dispatch(setBalanceAmount(balanceAmount));
			dispatch(setBalance(newBalance));
			console.log(newBalance, balanceAmount);
		};

		const handleUpdateEnergy = (newEnergy: number) => {
			console.log(newEnergy);
			dispatch(setEnergy(newEnergy));
		};

		const handleError = (message: string) => {
			console.error(message);
		};

		if (!id) return;

		const energyRecoveryInterval = setInterval(() => {
			socket.emit('recoverEnergy', { id });
		}, 2000);

		socket.on('updateCoins', handleUpdateCoins);
		socket.on('updateEnergy', handleUpdateEnergy);
		socket.on('error', handleError);

		return () => {
			clearInterval(energyRecoveryInterval);
			socket.off('updateCoins', handleUpdateCoins);
			socket.off('updateEnergy', handleUpdateEnergy);
			socket.off('error', handleError);
		};
	}, [id]);

	return children;
};

type Props = {
	children: ReactNode;
}
