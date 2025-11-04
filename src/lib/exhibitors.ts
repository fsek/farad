import { m } from './paraglide/messages';

export interface Exhibitor {
	name: string;
	about: () => string;
	logo: string;
	slug: string;
}

export const exhibitors: Exhibitor[] = [
	{
		name: 'Algorithma',
		about: m.algorithma_desc,
		logo: '/exhibitors/algorithma.png',
		slug: 'algorithma'
	},
	{
		name: 'Axis',
		about: m.axis_desc,
		logo: '/exhibitors/axis.png',
		slug: 'axis'
	},
	{
		name: 'CellaVision',
		about: () => '',
		logo: '/exhibitors/cellavision.png',
		slug: 'cellavision'
	},
	{
		name: 'D-fine',
		about: m.dfine_desc,
		logo: '/exhibitors/dfine.png',
		slug: 'dfine'
	},
	{
		name: 'Electrolux',
		about: () => '',
		logo: '/exhibitors/electrolux.png',
		slug: 'electrolux'
	},
	{
		name: 'Ericsson',
		about: m.ericsson_desc,
		logo: '/exhibitors/ericsson.png',
		slug: 'ericsson'
	},
	{
		name: 'ESA',
		about: () => '',
		logo: '/exhibitors/esa.svg',
		slug: 'esa'
	},
	{
		name: 'FOI',
		about: () => '',
		logo: '/exhibitors/foi.svg',
		slug: 'foi'
	},
	{
		name: 'Hitachi Energy',
		about: () => '',
		logo: '/exhibitors/hitachi.svg',
		slug: 'hitachi-energy'
	},
	{
		name: 'IAESTE',
		about: m.iaeste_desc,
		logo: '/exhibitors/iaeste.png',
		slug: 'iaeste'
	},
	{
		name: 'If',
		about: m.if_desc,
		logo: '/exhibitors/if.png',
		slug: 'if'
	},
	{
		name: 'Lightbringer',
		about: m.lightbringer_desc,
		logo: '/exhibitors/lightbringer.png',
		slug: 'lightbringer'
	},
	{
		name: 'LINC',
		about: m.linc_desc,
		logo: '/exhibitors/linc.png',
		slug: 'linc'
	},
	{
		name: 'Lund Formula Student',
		about: () => '',
		logo: '/exhibitors/fs.png',
		slug: 'formula-student'
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
		name: 'Netcompany',
		about: m.netcompany_desc,
		logo: '/exhibitors/netcompany.png',
		slug: 'netcompany'
	},
	{
		name: 'Reglerteknik',
		about: m.regler_desc,
		logo: '/exhibitors/regler.png',
		slug: 'reglerteknik'
	},
	{
		name: 'SentianAI',
		about: m.sentianai_desc,
		logo: '/exhibitors/sentianai.png',
		slug: 'sentianai'
	},
	{
		name: 'SVL',
		about: m.svl_desc,
		logo: '/exhibitors/svl.png',
		slug: 'svl'
	},
	{
		name: 'Sveriges Ingenjörer',
		about: m.sveing_desc,
		logo: '/exhibitors/sveing.png',
		slug: 'sveriges-ingenjorer'
	},
	{
		name: 'Unionen',
		about: () => '',
		logo: '/exhibitors/unionen.png',
		slug: 'unionen'
	}
];
