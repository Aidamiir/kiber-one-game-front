import styles from './button.module.scss';

import { type ButtonHTMLAttributes, type DetailedHTMLProps } from 'react';
import cn from 'classnames';

export const Button = (props: Props) => {
	const {
		variant = '',
		size,
		children,
		className,
		...rest
	} = props;

	return (
		<button
			className={cn(styles.button, className, variant, size)}
			{...rest}
		>
			{children}
		</button>
	);
};

type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
	variant?: '';
	size?: '';
	isLink?: boolean;
};

