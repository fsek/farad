<script lang="ts">
	import '../app.css';
	// import favicon from '$lib/assets/favicon.svg';
	import Navbar from '../components/Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<!-- <link rel="icon" href={favicon} /> -->

	<link rel="preconnect" href="https://rsms.me/" />
	<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
</svelte:head>

<Navbar />

{@render children?.()}

<footer class="bg-neutral-100">
	<div class="mx-auto max-w-6xl px-4 py-8">
		<p class="text-md text-center font-medium">
			<a href="mailto:farad@fsektionen.se" class="hover:underline">farad@fsektionen.se</a>
		</p>
	</div>
</footer>
