<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import ContactForm from '../../components/ContactForm.svelte';
	import type { PageProps } from './$types';

	let { form }: PageProps = $props();
</script>

{#if form?.success}
	<section class="mx-auto my-16 max-w-6xl px-4 md:my-24">
		<p class="max-w-[25ch] text-3xl font-semibold md:text-5xl">{m.contact_form_submitted()}</p>
	</section>
{:else}
	<ContactForm />
{/if}
