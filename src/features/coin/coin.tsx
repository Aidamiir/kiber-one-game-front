import styles from './coin.module.scss';
import React, { useCallback, useRef, useState } from 'react';
import cn from 'classnames';
import socket from '@/socket';
import { Energy } from '@/features';
import { useAppSelector } from '@/shared/hooks';

interface Popup {
	id: number;
	x: number;
	y: number;
	value: string;
}

export const Coin = () => {
	const { id, balanceAmount } = useAppSelector(({ user }) => user.user);
	const [popups, setPopups] = useState<Popup[]>([]);
	const touchHandled = useRef(false);

	const handleClick = useCallback((x: number, y: number) => {
		socket.emit('changeBalance', { id });

		const newPopup: Popup = {
			id: Date.now(),
			x,
			y,
			value: `+${balanceAmount}`,
		};
		setPopups((currentPopups) => [...currentPopups, newPopup]);

		setTimeout(() => {
			setPopups((currentPopups) => currentPopups.filter(p => p.id !== newPopup.id));
		}, 1000);

		window.Telegram.WebApp.HapticFeedback.impactOccurred('soft')
	}, [id, balanceAmount]);

	const handleMouseClick = useCallback((event: React.MouseEvent<HTMLImageElement>) => {
		if (!touchHandled.current) {
			handleClick(event.clientX, event.clientY);
		}
		touchHandled.current = false;
	}, [handleClick]);

	const handleTouch = useCallback((event: React.TouchEvent<HTMLButtonElement>) => {
		touchHandled.current = true;
		for (let i = 0; i < event.touches.length; i++) {
			const touch = event.touches[i];
			handleClick(touch.clientX, touch.clientY);
		}
	}, [handleClick]);

	return (
		<div className={styles.content}>
			<div className={styles.coinBody}>
				<button className={cn(styles.coin, 'active')} type="button" onTouchStart={handleTouch}>
					<img src="./images/coin.svg" alt="Монетка" onClick={handleMouseClick}/>
				</button>
			</div>
			<Energy className={styles.energy}/>
			{popups.map(popup => (
				<div
					key={popup.id}
					className={styles.popup}
					style={{ top: popup.y, left: popup.x }}
				>
					{popup.value}
				</div>
			))}
		</div>
	);
};
