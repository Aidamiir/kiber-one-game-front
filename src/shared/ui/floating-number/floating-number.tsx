import styles from './floating-number.module.scss';
import { useEffect } from 'react';

export const FloatingNumber = (props: Props) => {
	const { x, y, number, onAnimationEnd } = props;

	useEffect(() => {
		const timer = setTimeout(onAnimationEnd, 1000);
		return () => clearTimeout(timer);
	}, [onAnimationEnd]);

	return (
		<div
			className={styles.floatingNumber}
			style={{
				left: `${x}px`,
				top: `${y}px`
			}}
		>
			+{number}
		</div>
	);
};

interface Props {
	x: number;
	y: number;
	number: number;
	onAnimationEnd: () => void;
}
