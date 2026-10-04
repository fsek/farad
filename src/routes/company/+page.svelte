<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import AdditionalOffers from '../../components/AdditionalOffers.svelte';
	import ContactForm from '../../components/ContactForm.svelte';
	import Packages from '../../components/Packages.svelte';
	import PricingDocuments from '../../components/PricingDocuments.svelte';
</script>

<svelte:head>
	<title>{m.for_companies()} | FARAD</title>
</svelte:head>

<img
	src="/mh.jpg"
	alt="FARAD-banderoll på Matematikhuset"
	class="mb-16 h-72 w-full object-cover sm:h-128 dark:opacity-90"
/>
<section class="mx-auto mt-16 mb-9 max-w-6xl px-4">
	<!--<h1 class="mb-3 font-semibold sm:text-4xl md:text-5xl">{m.meet_future_engineers()}</h1>-->
	<p
		class="mb-6 max-w-[45ch] text-xl leading-normal text-neutral-700 sm:text-2xl md:text-3xl dark:text-white"
	>
		{m.welcome_to_farad()}
	</p>
	<p
		class="sm:text-1xl max-w-[50ch] leading-normal font-normal text-neutral-600 md:text-2xl dark:text-white"
	>
		{m.welcome_to_farad_desc()}
	</p>
</section>

<Packages />

<AdditionalOffers />

<section class="mx-auto my-16 max-w-6xl px-4 md:my-24">
	<p class="max-w-[25ch] text-3xl font-semibold md:text-5xl">
		{m.would_you_like_to_participate()}
		<a href="mailto:farad@fsektionen.se" class="underline">farad@fsektionen.se</a>!
	</p>
</section>

<ContactForm />

<PricingDocuments />
