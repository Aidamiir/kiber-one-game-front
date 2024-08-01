import { Fragment, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Nav } from '@/widgets';
import { ROUTER_MAP } from '@/shared/constatns';
import { Loading } from '@/shared/ui';
import HomePage from "@/pages/home-page";
import ComingSoonPage from "@/pages/coming-soon-page";
import BoostsPage from "@/pages/boosts-page";

// const HomePage = lazy(() => import('@/pages/home-page'));
// const BoostPage = lazy(() => import('@/pages/boosts-page'));
// const ComingSoonPage = lazy(() => import('@/pages/coming-soon-page'));

export const App = () => {
	return (
		<Fragment>
			<Routes>
				<Route>
					<Route path={ROUTER_MAP.home} element={<Suspense fallback={<Loading/>}><HomePage/></Suspense>}/>
					<Route path={ROUTER_MAP.tasks} element={<Suspense fallback={<Loading/>}><ComingSoonPage/></Suspense>}/>
					<Route path={ROUTER_MAP.referrals} element={<Suspense fallback={<Loading/>}><ComingSoonPage/></Suspense>}/>
					<Route path={ROUTER_MAP.boosts} element={<Suspense fallback={<Loading/>}><BoostsPage/></Suspense>}/>
				</Route>

			</Routes>

			<Nav/>
		</Fragment>
	);
};
