import styles from './title.module.scss';

import type { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';
import cn from 'classnames';

export const Title = ({ children, className, ...rest }: Props) => (
	<div className={cn(styles.title, className)} {...rest}>
		{children}
	</div>
);

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & PropsWithChildren;
