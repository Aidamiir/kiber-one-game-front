import styles from './balance.module.scss';

import { useAppSelector } from '@/shared/hooks';

export const Balance = () => {
	const balance = useAppSelector(({ user }) => user.user.balance);

	return (
		<div className={styles.balance}>
			<img src="./images/coin.svg" alt="Монетка"/>
			<span className={styles.coins}>{balance}</span>
		</div>
	);
};
