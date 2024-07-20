import styles from './nav-button.module.scss';

import cn from 'classnames';
import { type ReactNode } from 'react';

export const NavButton = (props: Props) => {
	const { onClick, icon, text, className } = props;

	return (
		<button
			className={cn(styles.navButton, className)}
			onClick={onClick}
			type="button"
		>
			<span className={styles.icon}>
				{icon}
			</span>
			<span className={styles.text}>
				{text}
			</span>
		</button>
	);
};

type Props = {
	onClick: () => void;
	icon: ReactNode;
	text: string;
	className?: string;
}
