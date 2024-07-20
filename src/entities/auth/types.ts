import { type UserInterface } from '@/entities';

export interface AuthorizeInterface {
	user: Omit<UserInterface, 'energy_boost_time_left turbo_boost_time_left'>;
	accessToken: string;
}
