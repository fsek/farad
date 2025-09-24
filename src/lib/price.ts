import { getLocale } from './paraglide/runtime';

export function formatPrice(sek: number) {
	return sek.toLocaleString(getLocale()) + (getLocale() === 'sv' ? ' kr' : ' SEK');
}
