import styles from './nav.module.scss';

import { useNavigate } from 'react-router-dom';
import { NavButton } from '@/widgets/nav/ui';
import { ROUTER_MAP } from '@/shared/constatns';
import { Container } from '@/shared/ui';

export const Nav = () => {
	const navigate = useNavigate();

	const handleSetPage = (page: string) => {
		navigate(page);
	};

	const navButtons = [
		{
			id: '1',
			icon: '🏠',
			text: 'Home',
			onClick: () => handleSetPage(ROUTER_MAP.home)
		},
		{
			id: '2',
			icon: '📋',
			text: 'Tasks',
			onClick: () => handleSetPage(ROUTER_MAP.tasks)
		},
		{
			id: '3',
			icon: '🤝',
			text: 'Referrals',
			onClick: () => handleSetPage(ROUTER_MAP.referrals)
		},
		{
			id: '4',
			icon: '🚀',
			text: 'Boosts',
			onClick: () => handleSetPage(ROUTER_MAP.boosts)
		}
	];

	return (
		<nav className={styles.nav}>
			<Container>
				<ul className={styles.list}>
					{navButtons.map((item) => (
						<li className={styles.listItem} key={item.id}>
							<NavButton
								{...item}
							/>
						</li>
					))}
				</ul>
			</Container>
		</nav>
	);
};
