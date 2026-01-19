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
		name: 'Acconeer',
		about: m.acconeer_desc,
		logo: '/exhibitors/acconeer.png',
		slug: 'acconeer'
	},
	{
		name: 'Axis',
		about: m.axis_desc,
		logo: '/exhibitors/axis.png',
		slug: 'axis'
	},
	{
		name: 'Coherent',
		about: m.coherent_desc,
		logo: '/exhibitors/coherent.svg',
		slug: 'coherent',
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
		name: 'FOI',
		about: m.foi_desc,
		logo: '/exhibitors/foi.svg',
		slug: 'foi',
		priority: true
	},
	{
		name: 'If',
		about: m.if_desc,
		logo: '/exhibitors/if.png',
		slug: 'if',
		priority: true
	},
	{
		name: 'Jane Street',
		about: m.janestreet_desc,
		logo: '/exhibitors/janestreet.png',
		slug: 'jane-street',
		priority: true
	},
	{
		name: 'LINC',
		about: m.linc_desc,
		logo: '/exhibitors/linc.png',
		slug: 'linc'
	},
	{
		name: 'Lunds lasercentrum',
		about: m.llc_desc,
		logo: '/exhibitors/llc.png',
		slug: 'llc'
	},
	{
		name: 'Nanolund',
		about: m.nanolund_desc,
		logo: '/exhibitors/nanolund.png',
		slug: 'nanolund'
	},
	{
		name: 'Susquehanna',
		about: m.susquehanna_desc,
		logo: '/exhibitors/susquehanna.png',
		slug: 'susquehanna'
	},
	{
		name: 'Sustainalink',
		about: m.sustainalink_desc,
		logo: '/exhibitors/sustainalink.png',
		slug: 'sustainalink'
	},
	{
		name: 'Triathlon',
		about: m.triathlon_desc,
		logo: '/exhibitors/triathlon.svg',
		slug: 'triathlon',
		priority: true
	},
	{
		name: 'Magma',
		about: m.magma_desc,
		logo: '/exhibitors/magma.png',
		slug: 'magma'
	},
	{
		name: 'Big Science Sweden',
		about: m.bigscience_desc,
		logo: '/exhibitors/bss.png',
		slug: 'big-science-sweden'
	}
];
