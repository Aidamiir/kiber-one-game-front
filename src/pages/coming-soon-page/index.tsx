import styles from './coming-soon-page.module.scss';
import { Container, FadeUpAnimation } from '@/shared/ui';

export default function ComingSoonPage() {
	return (
		<FadeUpAnimation className={'page'}>
			<div className={styles.wrapper}>
				<Container className={styles.container}>
					Скоро...
				</Container>
			</div>
		</FadeUpAnimation>
	);
};
