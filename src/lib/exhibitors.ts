import { m } from './paraglide/messages';

export interface Exhibitor {
	name: string;
	about: () => string;
	logo: string;
	slug: string;
	priority?: boolean;
}

export const exhibitors: Exhibitor[] = [
	{
		name: 'Axis',
		about: m.axis_desc,
		logo: '/exhibitors/axis.png',
		slug: 'axis',
		priority: true
	},
	{
		name: 'Ericsson',
		about: m.ericsson_desc,
		logo: '/exhibitors/ericsson.png',
		slug: 'ericsson',
		priority: true
	},
	{
		name: 'D-fine',
		about: m.dfine_desc,
		logo: '/exhibitors/dfine.png',
		slug: 'dfine',
		priority: true
	}
];
