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

		const handleUpdateCoins = (newBalance: number, balance_amount: number) => {
			dispatch(setBalanceAmount(balance_amount));
			dispatch(setBalance(newBalance));
		};

		const handleUpdateEnergy = (newEnergy: number) => {
			dispatch(setEnergy(newEnergy));
		};

		const handleError = (message: string) => {
			console.error(message);
			alert(message); // Можно заменить alert на более дружественный метод отображения ошибок
		};

		if (!id) return;

		// Устанавливаем интервал для периодического восстановления энергии
		const energyRecoveryInterval = setInterval(() => {
			socket.emit('recoverEnergy', { id });
		}, 2000);

		// Подписываемся на события WebSocket
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
