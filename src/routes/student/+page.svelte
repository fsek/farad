<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';

	import '@selemondev/svelte-marquee/dist/style.css';
	import StudentSessionAd from '../../components/student/StudentSessionAd.svelte';
	// import HostAd from '../../components/student/HostAd.svelte';
</script>

<svelte:head>
	<title>{m.for_students()} | FARAD</title>
</svelte:head>

<img
	src="/mh.jpg"
	alt="FARAD-banderoll på Matematikhuset"
	class="mb-16 h-72 w-full object-cover sm:h-128 dark:opacity-90"
/>

<StudentSessionAd />

<!-- <HostAd /> -->
