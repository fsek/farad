<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';

	import '@selemondev/svelte-marquee/dist/style.css';
	import 'tailwindcss';
	import StudentSessionAd from '../../components/student/StudentSessionAd.svelte';
	import HostAd from '../../components/student/HostAd.svelte';
	import HostDescriptions from '../../components/student/HostDescriptions.svelte';
	import SpamMarquee from '../../components/SpamMarquee.svelte';
	let GOOGLE_FORM_URL = 'https://forms.gle/mkDcQuwdKSk7zjGd7';
</script>

<svelte:head>
	<title>{m.host_page_title()} | FARAD</title>
</svelte:head>

<div class="align-center m-5 flex justify-start max-md:flex-col md:justify-between lg:m-15 xl:m-25">
	<div class="content-center sm:mr-10 md:mr-5 md:w-1/2 xl:mr-25">
		<p class=" mb-2 text-2xl font-semibold lg:mb-6 lg:text-4xl xl:text-5xl">
			{m.host_sittning_title()}
		</p>
		<p class=" pb-10 align-middle leading-7 md:text-lg lg:text-2xl lg:leading-9 dark:text-white">
			{m.host_sittning()}
		</p>
	</div>
	<div class="md:w-1/2">
		<img
			src="/hosts/banquet.jpg"
			alt={m.alt_host_banquet()}
			class="zoom-200 rounded-2xl object-scale-down"
		/>
	</div>
</div>
<div
	class="align-center m-5 flex flex-row-reverse justify-start max-md:flex-col md:justify-between lg:m-15 xl:m-25"
>
	<div class="content-center sm:mr-10 md:ml-15 md:w-1/2 xl:ml-30">
		<p class=" mb-2 text-2xl font-semibold lg:mb-6 lg:text-4xl xl:text-5xl">
			{m.host_company_title()}
		</p>
		<p class=" pb-10 align-middle leading-7 md:text-lg lg:text-2xl lg:leading-9 dark:text-white">
			{m.host_company()}
		</p>
	</div>
	<div class="md:w-1/2">
		<img
			src="/hosts/company.jpg"
			alt={m.alt_host_company()}
			class="zoom-200 rounded-2xl object-scale-down"
		/>
	</div>
</div>
<div class="align-center m-5 flex justify-start max-md:flex-col md:justify-between lg:m-15 xl:m-25">
	<div class="content-center sm:mr-10 md:mr-5 md:w-1/2 xl:mr-25">
		<p class=" mb-2 text-2xl font-semibold lg:mb-6 lg:text-4xl xl:text-5xl">
			{m.host_service_title()}
		</p>
		<p class=" pb-10 align-middle leading-7 md:text-lg lg:text-2xl lg:leading-9 dark:text-white">
			{m.host_service()}
		</p>
	</div>
	<div class="md:w-1/2">
		<img
			src="/hosts/service.jpg"
			alt={m.alt_host_service()}
			class="zoom-200 rounded-2xl object-scale-down"
		/>
	</div>
</div>
<!-- <div class="m-25 flex flex-row justify-between">
	<div class="w-1/2">
		<img
			src="/hosts/company.jpg"
			alt={m.alt_host_company()}
			class="rounded-2xl object-scale-down"
		/>
	</div>
	<div class="ml-25 w-1/2 content-center">
		<p class=" mb-6 text-5xl font-semibold">
			{m.host_company_title()}
		</p>
		<p class="max-w-[45ch] pb-10 align-middle text-2xl leading-9 dark:text-white">
			{m.host_company()}
		</p>
	</div>
</div>
<div class="m-25 mb-10 flex flex-row justify-between">
	<div class="mr-25 w-1/2 content-center">
		<p class=" mb-6 text-5xl font-semibold">
			{m.host_service_title()}
		</p>
		<p class="max-w-[45ch] pb-10 align-middle text-2xl leading-9 dark:text-white">
			{m.host_service()}
		</p>
	</div>
	<div class="w-1/2">
		<img
			src="/hosts/service.jpg"
			alt={m.alt_host_service()}
			class="rounded-2xl object-scale-down"
		/>
	</div>
</div> -->

<a
	href={GOOGLE_FORM_URL}
	class="mb-10 ml-5 inline-block rounded-lg bg-forange px-4 py-3 text-sm font-semibold text-white shadow md:px-8 md:py-5 md:text-xl xl:ml-25 dark:bg-white dark:font-medium dark:text-black"
	>{m.sok_vard()} -></a
>

<SpamMarquee color="black">{m.sok_vard()}</SpamMarquee>
