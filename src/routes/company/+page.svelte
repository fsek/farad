<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import AdditionalOffers from '../../components/AdditionalOffers.svelte';
	import Packages from '../../components/Packages.svelte';
	import PricingDocuments from '../../components/PricingDocuments.svelte';
</script>

<section class="mx-auto my-16 max-w-6xl px-4">
	<p class="max-w-[45ch] text-xl leading-normal text-neutral-700 sm:text-2xl md:text-3xl">
		{m.welcome_to_farad()}
	</p>
</section>

<Packages />

<AdditionalOffers />

<PricingDocuments />
