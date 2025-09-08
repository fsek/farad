<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import { getLocale } from '$lib/paraglide/runtime';

	const docs = [
		{
			lang: 'sv',
			url: '/Prisinformation%20FARAD%202025.pdf',
			name: 'Prisinformation FARAD 2025'
		},
		{
			lang: 'en',
			url: '/Price%20information%20FARAD%202025.pdf',
			name: 'Price information FARAD 2025'
		}
	];

	// put the current locale first
	docs.sort((a, b) => (a.lang === getLocale() ? -1 : b.lang === getLocale() ? 1 : 0));
</script>

<section class="mx-auto my-16 max-w-6xl px-4">
	<p class="text-lg text-neutral-700 md:text-xl">{m.price_pdf_desc()}</p>
	<div class="mt-4 flex gap-4">
		{#each docs as doc (doc.url)}
			<a
				href={doc.url}
				class="flex flex-col gap-1 rounded-lg border border-neutral-200 bg-neutral-50 p-4 hover:bg-neutral-100"
				target="_blank"
				rel="noopener noreferrer"
			>
				{doc.name}
				<span class="text-sm text-neutral-500">PDF ({doc.lang.toLocaleUpperCase()})</span>
			</a>
		{/each}
	</div>
</section>
