<script lang="ts">
	import { exhibitors } from '$lib/exhibitors';
	import { m } from '$lib/paraglide/messages';

	const sorted = exhibitors.sort((a, b) => (b.priority ? 1 : 0) - (a.priority ? 1 : 0));
</script>

<div class="overflow-hidden dark:bg-white dark:text-black">
	<section class="mx-auto my-16 max-w-6xl px-4">
		<!-- <h2 class="mb-16 text-3xl font-semibold md:text-5xl">{m.exhibitors()}</h2> -->

		<!-- <img src="/map.png" class="mb-16" alt={m.fair_map()} /> -->

		<div class="grid grid-cols-3 items-center justify-center gap-8 md:gap-16">
			{#each sorted as exhibitor (exhibitor.slug)}
				<img
					src={exhibitor.logo}
					alt={exhibitor.name}
					class="aspect-video object-contain transition group-hover:scale-110"
				/>
			{/each}
		</div>
	</section>
</div>
