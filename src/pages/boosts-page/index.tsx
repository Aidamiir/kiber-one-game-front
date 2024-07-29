import styles from './boosts-page.module.scss';

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import cn from 'classnames';

import { Balance } from '@/features/balance';
import { ROUTER_MAP } from '@/shared/constatns';
import { useAppSelector } from '@/shared/hooks';
import { Container, FadeUpAnimation, Title } from '@/shared/ui';
import { BoostBox, FreeBoostButton } from '@/pages/boosts-page/ui';
import {
	useEnergyBoostMutation,
	useRestoreBoostsMutation,
	useTurboBoostMutation,
	useUpgradeEnergyLimitMutation,
	useUpgradeMultitapMutation
} from '@/entities';

export default function BoostsPage() {
	const [upgradeMultitap] = useUpgradeMultitapMutation();
	const [upgradeEnergyLimit] = useUpgradeEnergyLimitMutation();
	const [restoreBoosts] = useRestoreBoostsMutation();
	const [energyBoost] = useEnergyBoostMutation();
	const [turboBoost] = useTurboBoostMutation();
	const navigate = useNavigate();

	const {
		id,
		quantityEnergyBoost,
		maxQuantityEnergyBoost,
		quantityTurboBoost,
		maxQuantityTurboBoost,
		energyBoostTimeLeft,
		turboBoostTimeLeft,
		multitapLevel,
		multitapPrice,
		energyLimitLevel,
		energyLimitPrice
	} = useAppSelector(({ user }) => user.user);

	const handleRestoreBoosts = async () => {
		await restoreBoosts(id).unwrap();
	};

	const handleEnergyBoost = async () => {
		await energyBoost(id).unwrap();
		navigate(ROUTER_MAP.home);
	};

	const handleTurboBoost = async () => {
		await turboBoost(id).unwrap();
		navigate(ROUTER_MAP.home);
	};

	const handleUpgradeMultitap = async () => {
		await upgradeMultitap(id).unwrap();
		navigate(ROUTER_MAP.home);
	}

	const handleUpgradeEnergyLimit = async () => {
		await upgradeEnergyLimit(id).unwrap();
		navigate(ROUTER_MAP.home);
	}

	useEffect(() => {
		handleRestoreBoosts();
	}, []);

	return (
		<FadeUpAnimation className={'page'}>
			<Container className={styles.container}>
				<div className={styles.top}>
					<Balance/>
					<a href="#">How it works?</a>
				</div>
				<Title className={styles.title}>
					Free daily boosters:
				</Title>
				<div className={styles.freeBoostsBody}>
					<FreeBoostButton
						name={'Full energy'}
						icon={'⚡'}
						time={energyBoostTimeLeft}
						quantity={quantityEnergyBoost}
						maxQuantity={maxQuantityEnergyBoost}
						onClick={handleEnergyBoost}
					/>
					<FreeBoostButton
						name={'3 x Turbo'}
						icon={'🚀'}
						time={turboBoostTimeLeft}
						quantity={quantityTurboBoost}
						maxQuantity={maxQuantityTurboBoost}
						onClick={handleTurboBoost}
					/>
				</div>
				<Title className={cn(styles.title)}>
					Boosters
				</Title>
				<div className={styles.boostsBox}>
					<BoostBox
						title={'Multitap'}
						image={'☝️'}
						price={multitapPrice ?? 100}
						level={multitapLevel ?? 0}
						callback={handleUpgradeMultitap}
					/>
					<BoostBox
						title={'Energy limit'}
						image={'🔋'}
						price={energyLimitPrice ?? 100}
						level={energyLimitLevel ?? 0}
						callback={handleUpgradeEnergyLimit}
					/>
				</div>
			</Container>
		</FadeUpAnimation>
	);
}
