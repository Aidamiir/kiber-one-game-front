import styles from './text.module.scss';

import cn from 'classnames';
import type { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';

export const Text = (props: Props) => {
	const { children, className, ...rest } = props;

	return (
		<div
			className={cn(styles.text, className)}
			{...rest}
		>
			{children}
		</div>
	);
};

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & PropsWithChildren;
