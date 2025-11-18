import { m } from './paraglide/messages';

export const routes = [
	// {
	// 	href: '/exhibitors',
	// 	name: m.exhibitors
	// },
	{
		href: '/student',
		name: m.for_students
	},
	{
		href: '/company',
		name: m.for_companies
	}
] as const;
