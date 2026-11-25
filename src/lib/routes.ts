import { m } from './paraglide/messages';

export const routes = [
	/*{
		href: '/exhibitors',
		name: m.exhibitors
	},*/
	{
		href: '/student',
		name: m.student_sessions
	},
	{
		href: '/company',
		name: m.for_companies
	},
	{
		href: '/sokvard',
		name: m.sok_vard
	},
	{
		href: '/exhibitors',
		name: m.exhibitors
	}
] as const;
