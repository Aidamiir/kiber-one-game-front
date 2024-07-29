import styles from './stats.module.scss';
import { useTopUserQuery } from '@/entities';

export const Stats = () => {
	const { data } = useTopUserQuery();


	return (
		<div className={styles.stats}>
				<div className={styles.body}>
					<div className={styles.content}>
						<div className={styles.img}>
						</div>
						<div className={styles.contentInner}>
							<div className={styles.name}>
								{data && data.firstName}
							</div>
							<div className={styles.coins}>
								<img src="./images/coin.svg" alt="coind"/>
								{data && data.balance}
							</div>
						</div>
					</div>
					<div className={styles.league}>
						Bronze
					</div>
				</div>
		</div>
	);
};
