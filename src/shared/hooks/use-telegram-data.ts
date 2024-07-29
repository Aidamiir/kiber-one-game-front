import { useEffect, useState } from 'react';

export const useTelegramData = () => {
	const [user, setUser] = useState<User>();
	const [isReady, setIsReady] = useState(false);
	const [error, setError] = useState('');

	useEffect(() => {
		const tg = window.Telegram?.WebApp as TelegramWebApp;

		if (tg) {
			const userData = tg.initDataUnsafe;

			tg.ready();
			setUser(userData.user);
			setIsReady(true);
		} else {
			setError('Error initializing Telegram Web App');
		}
	}, []);

	return { user, isReady, error };
};

interface User {
	id: number;
	first_name: string;
	last_name?: string;
	username?: string;
}

interface TelegramWebApp {
	initDataUnsafe: {
		user?: User;
	};
	ready: () => void;
}
