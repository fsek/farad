<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import { formatPrice } from '$lib/price';

	const packs = [
		{
			name: m.base_package,
			price: 22_000,
			badgeClass: 'border border-neutral-200'
		},
		{
			name: m.priority_package,
			price: 24_000,
			badgeClass: 'bg-neutral-200'
		},
		{
			name: m.main_sponsor,
			price: 42_000,
			badgeClass: 'bg-forange text-white'
		}
	] as const;
</script>

<section class="mx-auto my-16 max-w-6xl px-4">
	<table class="w-full table-auto">
		<thead>
			<tr>
				<th></th>
				{#each packs as pack (pack.name())}
					<th class="p-1 pb-4">
						<div
							class={'flex min-h-24 w-24 flex-col justify-end gap-1 rounded-lg p-2 text-left sm:min-h-32 sm:w-40 sm:p-4 lg:min-h-48 lg:w-72 ' +
								pack.badgeClass}
						>
							<span class="text-sm lg:text-lg">{pack.name()}</span>
							<span class="text-md sm:text-2xl lg:text-4xl">{formatPrice(pack.price)}</span>
						</div>
					</th>
				{/each}
			</tr>
		</thead>
		<tbody class="pricing-table">
			<tr>
				<th>{m.booth_space()}</th>
				<td>6&nbsp;m<sup>2</sup></td>
				<td>6&nbsp;m<sup>2</sup></td>
				<td>9&nbsp;m<sup>2</sup></td>
			</tr>
			<tr>
				<th>{m.ads_in_the_guilds_medias()}</th>
				<td>{m.yes()}</td>
				<td>{m.extended()}</td>
				<td>{m.significantly_extended()}</td>
			</tr>
			<tr>
				<th>{m.farad_banquet_tickets()}</th>
				<td>2</td>
				<td>2</td>
				<td>4</td>
			</tr>
			<tr>
				<th
					>{m.business_lounge_tickets()}
					<p class="mt-1 text-xs font-normal text-neutral-700 md:mt-2 md:text-sm">
						{m.breakfast_lunch_and_coffee()}
					</p>
				</th>
				<td>2</td>
				<td>6</td>
				<td>6</td>
			</tr>
			<tr>
				<th>{m.priority_placement_fair()}</th>
				<td>-</td>
				<td>{m.yes()}</td>
				<td>{m.yes()}</td>
			</tr>
			<tr>
				<th>{m.lunch_lecture()}</th>
				<td>-</td>
				<td>-</td>
				<td>{m.yes()}</td>
			</tr>
		</tbody>
	</table>
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
		@apply p-4 pl-0 text-left font-semibold text-neutral-900;
	}
</style>
