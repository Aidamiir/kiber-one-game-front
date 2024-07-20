import styles from './container.module.scss';

import type { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';
import cn from 'classnames';

export const Container = (props: Props) => {
	const { children, className, ...rest } = props;

	return (
		<div className={cn(styles.container, className)} {...rest}>
			{children}
		</div>
	);
};

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & PropsWithChildren;
