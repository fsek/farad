<script lang="ts">
	import { exhibitors } from '$lib/exhibitors';
	import { m } from '$lib/paraglide/messages';

	const sorted = exhibitors.sort((a, b) => (b.priority ? 1 : 0) - (a.priority ? 1 : 0));
</script>

<div class="overflow-hidden dark:bg-white dark:text-black">
	<section class="mx-auto my-16 max-w-6xl px-4">
		<h2 class="mb-16 text-3xl font-semibold md:text-5xl">{m.exhibitors()}</h2>

		<img src="/map.png" class="mb-16" alt={m.fair_map()} />

		<div class="grid grid-cols-4 items-center justify-center gap-8 sm:grid-cols-6 md:gap-16">
			{#each sorted as exhibitor (exhibitor.slug)}
				<a
					href={`/exhibitors#${exhibitor.slug}`}
					class={[
						'group flex aspect-video items-center justify-center',
						exhibitor.priority && 'col-span-2'
					]}
				>
					<img
						src={exhibitor.logo}
						alt={exhibitor.name}
						class="aspect-video object-contain transition group-hover:scale-110"
					/>
				</a>
			{/each}
		</div>
	</section>
</div>
