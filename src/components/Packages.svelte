<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import { formatPrice } from '$lib/price';

	const packs = [
		{
			badgeClass: 'border',
			name: m.base_package,
			price: 22_000,
			features: [
				m.n_sqm_booth_space({ n: 6 }),
				m.ads_in_the_guilds_medias(),
				m.n_farad_banquet_tickets({ n: 2 }),
				m.n_business_lounge_tickets({ n: 2 }),
				m.company_host_summary()
			]
		},
		{
			badgeClass: 'border bg-neutral-100',
			name: m.priority_package,
			price: 30_000,
			features: [
				m.n_sqm_booth_space({ n: 8 }),
				m.extended_ads_in_the_guilds_medias(),
				m.priority_placement_fair(),
				m.n_farad_banquet_tickets({ n: 4 }),
				m.n_business_lounge_tickets({ n: 4 }),
				m.company_host_summary()
			]
		},
		{
			badgeClass: 'bg-forange text-white shadow-lg',
			name: m.main_sponsor,
			price: m.contact_us(),
			summary: m.main_sponsor_summary()
		}
	] as const;
</script>

<section class="mx-auto my-16 flex max-w-6xl gap-8 px-4 max-md:flex-col">
	{#each packs as pack (pack.name())}
		<div class={'flex-1 rounded-xl border-neutral-200 p-4 text-lg ' + pack.badgeClass}>
			<div class="text-2xl font-semibold md:text-3xl">{pack.name()}</div>
			<div class="mt-2 mb-4 text-xl font-medium">
				{typeof pack.price === 'number' ? formatPrice(pack.price) : pack.price}
			</div>
			{#if 'features' in pack}
				<h3 class="font-medium">{m.whats_included()}</h3>
				<ul>
					{#each pack.features as feature (feature)}
						<li
							class="relative my-1 pl-6 before:absolute before:left-0 before:opacity-50 before:content-['✓']"
						>
							{feature}
						</li>
					{/each}
				</ul>
			{/if}
			{#if 'summary' in pack}
				<div class="mt-4">{pack.summary}</div>
			{/if}
		</div>
	{/each}
</section>

<style>
	@reference "tailwindcss";

	.pricing-table {
		@apply text-sm md:text-lg;
	}

	.pricing-table :global(tr) {
		@apply border-t border-neutral-200;
	}

	.pricing-table :global(td) {
		@apply p-4 text-center text-neutral-800;
	}

	.pricing-table :global(th) {
		@apply p-4 pl-0 text-left leading-tight font-semibold text-neutral-900;
	}
</style>
