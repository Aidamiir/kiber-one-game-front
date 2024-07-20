import styles from './energy.module.scss';

import cn from 'classnames';
import { useAppSelector } from '@/shared/hooks';

export const Energy = (props: Props) => {
	const { className } = props;
	const { energy, max_energy } = useAppSelector(({ user }) => user.user);

	return (
		<div className={cn(className, styles.energy)}>
			<div className={styles.body}>
				<span>⚡</span>
				<span>{energy}</span>
			</div>
			<div className={styles.bar}>
				{energy && max_energy && (
					<div className={styles.barInner} style={{ width: `${(energy / max_energy) * 100}%` }}></div>
				)}
			</div>
		</div>
	);
};

type Props = {
	className?: string;
}
