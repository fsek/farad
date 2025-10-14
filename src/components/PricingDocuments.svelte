<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import { getLocale } from '$lib/paraglide/runtime';

	const docs = [
		{
			lang: 'sv',
			url: '/Prisinformation%20FARAD%202026.pdf',
			name: 'Prisinformation FARAD 2026'
		},
		{
			lang: 'en',
			url: '/Pricing%20FARAD%202026.pdf',
			name: 'Pricing FARAD 2026'
		}
	];

	// put the current locale first
	docs.sort((a, b) => (a.lang === getLocale() ? -1 : b.lang === getLocale() ? 1 : 0));
</script>

<section class="mx-auto my-16 max-w-6xl px-4">
	<p class="text-lg text-neutral-700 md:text-xl">{m.price_pdf_desc()}</p>
	<div class="mt-4 flex flex-wrap gap-4">
		{#each docs as doc (doc.url)}
			<a
				href={doc.url}
				class="flex w-64 flex-col gap-1 rounded-lg border border-neutral-200 bg-neutral-50 p-4 hover:bg-neutral-100"
				target="_blank"
				rel="noopener noreferrer"
			>
				{doc.name}
				<span class="text-sm text-neutral-500">PDF ({doc.lang.toLocaleUpperCase()})</span>
			</a>
		{/each}
	</div>
</section>
