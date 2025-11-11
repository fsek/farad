<script>
	import { m } from '$lib/paraglide/messages';
	import { getLocale } from '$lib/paraglide/runtime';
	import Exhibitors from '../components/Exhibitors.svelte';
</script>

<svelte:head>
	<title>FARAD</title>
</svelte:head>

<!-- must be bg-white so that the text color can be inverted (since body is not bg-white) -->
<section class="relative mx-auto my-8 max-w-6xl px-4 md:my-24">
	<div class="absolute -top-4 right-8 z-0 w-24 rotate-6 md:w-48 lg:w-72 xl:-right-8">
		<svg
			viewBox="0 0 481 479"
			xmlns="http://www.w3.org/2000/svg"
			class="animate-spin"
			style="animation-duration: 30s"
		>
			<path
				d="M210.087 16.8245C224.811 -4.39314 256.189 -4.39314 270.913 16.8245V16.8245C281.545 32.145 301.913 37.1652 318.447 28.5406V28.5406C341.345 16.5961 369.129 31.1778 372.306 56.8079V56.8079C374.601 75.3145 390.303 89.2252 408.951 89.2722V89.2722C434.777 89.3373 452.601 115.16 443.504 139.331V139.331C436.935 156.784 444.374 176.399 460.864 185.106V185.106C483.702 197.166 487.484 228.315 468.196 245.489V245.489C454.269 257.89 451.74 278.715 462.295 294.089V294.089C476.912 315.38 465.786 344.719 440.726 350.962V350.962C422.631 355.471 410.714 372.735 412.915 391.253V391.253C415.964 416.899 392.477 437.706 367.386 431.588V431.588C349.268 427.171 330.694 436.92 324.037 454.339V454.339C314.818 478.464 284.353 485.973 264.978 468.896V468.896C250.989 456.565 230.011 456.565 216.022 468.896V468.896C196.647 485.973 166.182 478.464 156.963 454.339V454.339C150.306 436.92 131.732 427.171 113.614 431.588V431.588C88.5226 437.706 65.0365 416.899 68.0849 391.253V391.253C70.2861 372.735 58.3694 355.471 40.2743 350.962V350.962C15.2142 344.719 4.08765 315.38 18.7051 294.089V294.089C29.2598 278.715 26.7312 257.89 12.804 245.489V245.489C-6.48406 228.315 -2.70195 197.166 20.1358 185.106V185.106C36.6261 176.399 44.0649 156.784 37.4961 139.331V139.331C28.3988 115.16 46.2231 89.3373 72.0493 89.2722V89.2722C90.6975 89.2252 106.399 75.3145 108.694 56.8079V56.8079C111.871 31.1778 139.655 16.5961 162.553 28.5406V28.5406C179.087 37.1652 199.455 32.145 210.087 16.8245V16.8245Z"
				class="fill-forange"
			/>
		</svg>

		<div
			class="absolute top-1/2 left-1/2 flex -translate-1/2 flex-col items-center text-center leading-none font-semibold text-orange-900"
		>
			<span class="text-4xl md:text-7xl lg:text-9xl" style="font-feature-settings: 'cv04'"
				>29{#if getLocale() === 'en'}<sup
						class="-top-[1em] text-[50%] md:-top-[2.5em] md:text-[25%]">th</sup
					>{/if}</span
			>
			<span class="-mt-2 text-sm md:text-2xl lg:text-4xl">{m.january()}</span>
		</div>
	</div>

	<h1 class="relative mr-24 mb-6 text-6xl font-bold md:mr-48 md:text-8xl lg:mr-72 lg:text-9xl">
		<img src="/farad.svg" alt="FARAD" class="inline-block h-[1.13em] object-contain align-[-20%]" />
		2026
	</h1>

	<p class="relative max-w-[42ch] text-xl leading-normal sm:text-2xl md:text-3xl">
		{m.about_farad()}
	</p>

	<div class="mt-8 md:mt-12">
		<a
			href="/company"
			class="mt:px-6 mt:py-4 rounded-lg bg-neutral-950 px-4 py-3 text-sm font-semibold text-white shadow md:text-lg dark:bg-white dark:font-medium dark:text-black"
			>{m.for_companies()} ->
		</a>
	</div>
</section>

<img
	src="/environment.jpg"
	alt="FARAD-banderoll på Matematikhuset"
	class="h-72 w-full object-cover sm:h-128 dark:opacity-90"
/>

<Exhibitors />
