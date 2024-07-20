import styles from './header.module.scss';

import { IoMdSettings } from 'react-icons/io';
import { Container } from '@/shared/ui';

export const Header = () => {
	return (
		<header className={styles.header}>
			<Container className={styles.container}>
				<img className={styles.logo} src="./images/logo.jpg" alt="Логотип"/>
				<button className={styles.settings} type="button">
					<IoMdSettings/>
				</button>
			</Container>
		</header>
	);
};
