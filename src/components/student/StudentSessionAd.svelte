<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import SpamMarquee from '../SpamMarquee.svelte';
	import Ericsson from './Ericsson.svelte';
	import Triathlon from './Triathlon.svelte';

	const GOOGLE_FORM_URL =
		'https://docs.google.com/forms/d/e/1FAIpQLSetpi3TAo7X8XrugEp2q77-qN-JHkvqVVJDp3ygH4oZlBHqXQ/viewform';
</script>

<section class="mx-auto my-16 max-w-6xl space-y-12 px-4">
	<p
		class="max-w-[45ch] text-xl leading-normal text-neutral-700 sm:text-2xl md:text-3xl dark:text-white"
	>
		{m.student_session_desc_for_students()}
	</p>

	<div class="flex flex-wrap items-center gap-12">
		<Triathlon className="h-8" />
		<Ericsson className="h-10" />
		<div
			class="aspect-1463/728 h-20 bg-current"
			style="mask-image: url('/exhibitors/acconeer.png');
         mask-repeat: no-repeat; mask-size: contain; mask-position: center;"
		></div>
	</div>

	<a
		href={GOOGLE_FORM_URL}
		class="inline-block rounded-lg bg-forange px-4 py-3 text-sm font-semibold text-white shadow md:px-6 md:py-4 md:text-lg dark:bg-white dark:font-medium dark:text-black"
		>{m.sok_kontaktsamtal()} -></a
	>
</section>

<SpamMarquee>{m.sok_kontaktsamtal()}</SpamMarquee>
