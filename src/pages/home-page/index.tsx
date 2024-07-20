import styles from './home-page.module.scss';
import { Stats } from '@/widgets';
import { Container, FadeUpAnimation } from '@/shared/ui';
import { Balance, Coin } from '@/features';

export default function HomePage() {
	return (
		<FadeUpAnimation className={'page'}>
			<Container className={styles.container}>
				<div className={styles.content}>
					<Stats/>
					<div className={styles.inner}>
						<div className={styles.myStats}>
							<Balance/>
							<div className={styles.league}>
								Bronze
							</div>
						</div>
						<Coin/>
					</div>
				</div>
			</Container>
		</FadeUpAnimation>
	);
};
