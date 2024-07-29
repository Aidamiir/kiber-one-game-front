import styles from './energy.module.scss';

import cn from 'classnames';
import { useAppSelector } from '@/shared/hooks';

export const Energy = (props: Props) => {
	const { className } = props;
	const { energy, maxEnergy } = useAppSelector(({ user }) => user.user);

	return (
		<div className={cn(className, styles.energy)}>
			<div className={styles.body}>
				<span>⚡</span>
				<span>{energy}</span>
			</div>
			<div className={styles.bar}>
				{energy && maxEnergy && (
					<div className={styles.barInner} style={{ width: `${(energy / maxEnergy) * 100}%` }}></div>
				)}
			</div>
		</div>
	);
};

type Props = {
	className?: string;
}
