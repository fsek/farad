<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';

	import { Marquee } from '@selemondev/svelte-marquee';
	import '@selemondev/svelte-marquee/dist/style.css';

	const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScKPThUxIdwZHb37hKNNjKCi7GaHWddnVqNnVfvXxLpV8up-g/viewform?usp=header';

	const roles = [
		{
			name: m.sittningsvard(),
			desc: m.sittningsvard_desc(),
			image: '/sittningsvard.jpg'
		},
		{
			name: m.foretagsvard(),
			desc: m.foretagsvard_desc(),
			image: '/foretagsvard.jpg'
		},
		{
			name: m.servicevard(),
			desc: m.servicevard_desc(),
			image: '/infodesk.jpg'
		}
	] as const;
</script>

<svelte:head>
	<title>{m.for_students()} | FARAD</title>
</svelte:head>

<img
	src="/mh.jpg"
	alt="FARAD-banderoll på Matematikhuset"
	class="h-72 w-full object-cover sm:h-128 dark:opacity-90"
/>

{#each roles as role, i (role.name)}
	<section
		class="mx-auto my-16 flex max-w-7xl gap-8 px-4 max-md:flex-col md:my-24 md:items-center lg:gap-16"
	>
		<div class="flex-1">
			<h2 class="mb-4 text-3xl font-semibold md:text-5xl">{role.name}</h2>
			<p class="max-w-[60ch] text-lg text-neutral-700 md:text-xl dark:text-neutral-300">
				{role.desc}
			</p>
			<a
				href={GOOGLE_FORM_URL}
				class="md:px-6 md:py-4 inline-block mt-8 rounded-lg bg-forange px-4 py-3 text-sm font-semibold text-white shadow md:text-lg dark:bg-white dark:font-medium dark:text-black"
				>{m.sok_vard()} ->
			</a>
		</div>
		<div class="md:basis-md lg:basis-xl">
			<img src={role.image} alt={role.name} class="w-full rounded-xl object-cover" />
		</div>
	</section>

	<Marquee
		fade
		class="text-[15vh] leading-[1.2] font-semibold uppercase"
		speed={200}
		reverse={i % 2}
	>
		{#each { length: 3 } as _}
			<div class="mx-[0.1em]">{m.sok_vard()}</div>
		{/each}
	</Marquee>
{/each}
