<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import { formatPrice } from '$lib/price';

	const additional = [
		{
			title: m.extended_fair_space(),
			price: formatPrice(5_000),
			description: m.n_sqm_additional_booth_space({ n: 9 })
		},
		{
			title: m.lunch_lecture(),
			price: `${formatPrice(13_000)} + ${formatPrice(85)}/${m.student()}`,
			description: m.lunch_lecture_desc()
		},
		{
			title: m.contact_meeting(),
			price: `${formatPrice(5_000)} ${m.for_n_students({ n: 5 })} + ${formatPrice(1_000)}/${m.additional_student()}`,
			description: m.contact_meeting_desc()
		}
	] as const;
</script>

<section class="mx-auto mt-16 mb-8 max-w-6xl px-4 md:my-32">
	<h2 class="text-3xl font-semibold max-md:mb-8 md:text-5xl">{m.additional_offers()}</h2>
	{#each additional as item (item.title)}
		<div class="items-center gap-8 md:my-8 md:flex">
			<div
				class="flex shrink-0 basis-sm flex-col justify-end rounded-xl font-semibold md:min-h-64 md:gap-4 md:bg-neutral-950 md:p-8 md:text-white lg:basis-lg"
			>
				<div class="text-xl md:text-3xl lg:text-4xl">{item.title}</div>
				<div class="text-sm max-md:text-neutral-700 md:text-xl lg:text-2xl">{item.price}</div>
			</div>
			<div class="mt-4 text-lg text-neutral-700 md:text-xl">
				{item.description}
			</div>
			<hr class="my-8 h-px border-0 bg-neutral-200 md:hidden" />
		</div>
	{/each}
</section>
