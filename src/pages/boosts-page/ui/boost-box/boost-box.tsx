import styles from './boost-box.module.scss';
import { Title } from '@/shared/ui';

export const BoostBox = (props: Props) => {
	const { title = 'title', image, price, level, callback } = props;

	return (
		<button className={styles.box} type="button" onClick={callback}>
			<div className={styles.left}>
				<div className={styles.image}>
					<span>
						{image}
					</span>
				</div>
				<div className={styles.content}>
					<Title className={styles.title}>
						{title}
					</Title>
					<div className={styles.priceBox}>
						<div className={styles.price}>
							<img src="./images/coin.svg" alt="coin"/>
							<span>
							{price}
						</span>
						</div>
						<span className={styles.level}>
						{`${level} lvl`}
					</span>
					</div>
				</div>
			</div>
			<img className={styles.arrow} src="./images/arrow.svg" alt="arrow"/>
		</button>
	);
};

interface Props {
	image: string;
	title: string;
	price: number;
	level: number;
	callback: () => void;
}
