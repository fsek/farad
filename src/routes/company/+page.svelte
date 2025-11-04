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

<section class="mx-auto my-16 max-w-6xl px-4">
	<p class="max-w-[45ch] text-xl leading-normal text-neutral-700 sm:text-2xl md:text-3xl">
		{m.welcome_to_farad()}
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
