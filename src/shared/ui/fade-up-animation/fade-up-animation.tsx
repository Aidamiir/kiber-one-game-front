import styles from './fade-up-animation.module.scss';

import cn from 'classnames';
import { type ReactNode } from 'react';

export const FadeUpAnimation = (props: Props) => {
	const { className, children } = props;

	return (
		<div className={cn(styles.animation, className)}>{children}</div>
	);
};

type Props = {
	className?: string;
	children: ReactNode;
}
