import styles from './free-boost-box.module.scss';
import cn from 'classnames';

export const FreeBoostButton = (props: Props) => {
	const { name, icon, quantity, maxQuantity, onClick, time } = props;

	return (
		<button className={cn(styles.boostBox, quantity === 0 && 'disabled')} type="button" onClick={onClick} disabled={quantity === 0}>
			<div className={styles.content}>
				<div className={styles.name}>
					{name}
				</div>
				<div className={styles.info}>
					{quantity !== 0 ? quantity + '/' + maxQuantity : time + ' hours'}
				</div>
			</div>
			<span className={styles.icon}>
				{icon}
			</span>
		</button>
	);
};

interface Props {
	name: string;
	icon: string;
	time: number | null;
	quantity: number | null;
	maxQuantity: number | null;
	onClick: () => void;
}
