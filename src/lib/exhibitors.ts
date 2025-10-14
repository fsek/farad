import { m } from './paraglide/messages';

export interface Exhibitor {
	name: string;
	about: () => string;
	logo: string;
	slug: string;
}

export const exhibitors: Exhibitor[] = [
	{
		name: 'Ericsson',
		about: m.ericsson_desc,
		logo: '/exhibitors/ericsson.png',
		slug: 'ericsson'
	},
	{
		name: 'Lightbringer',
		about: m.lightbringer_desc,
		logo: '/exhibitors/lightbringer.png',
		slug: 'lightbringer'
	},
	{
		name: 'If',
		about: m.if_desc,
		logo: '/exhibitors/if.png',
		slug: 'if'
	},
	{
		name: 'Axis',
		about: m.axis_desc,
		logo: '/exhibitors/axis.png',
		slug: 'axis'
	},
	{
		name: 'D-fine',
		about: m.dfine_desc,
		logo: '/exhibitors/dfine.png',
		slug: 'dfine'
	},
	{
		name: 'Sveriges Ingenjörer',
		about: m.sveing_desc,
		logo: '/exhibitors/sveing.png',
		slug: 'sveriges-ingenjorer'
	},
	{
		name: 'IAESTE',
		about: m.iaeste_desc,
		logo: '/exhibitors/iaeste.png',
		slug: 'iaeste'
	},
	{
		name: 'Algorithma',
		about: m.algorithma_desc,
		logo: '/exhibitors/algorithma.png',
		slug: 'algorithma'
	},
	{
		name: 'Nanolund',
		about: m.nanolund_desc,
		logo: '/exhibitors/nanolund.png',
		slug: 'nanolund'
	},
	{
		name: 'Lunds lasercentrum',
		about: m.llc_desc,
		logo: '/exhibitors/llc.png',
		slug: 'llc'
	},
	{
		name: 'SVL',
		about: m.svl_desc,
		logo: '/exhibitors/svl.png',
		slug: 'svl'
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
		name: 'Netcompany',
		about: m.netcompany_desc,
		logo: '/exhibitors/netcompany.png',
		slug: 'netcompany'
	},
	{
		name: 'LINC',
		about: m.linc_desc,
		logo: '/exhibitors/linc.png',
		slug: 'linc'
	}
];
