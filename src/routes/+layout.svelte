<script lang="ts">
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	// import favicon from '$lib/assets/favicon.svg';
	import Navbar from '../components/Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<!-- <link rel="icon" href={favicon} /> -->

	<link rel="preconnect" href="https://rsms.me/" />
	<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
</svelte:head>

<div class="flex min-h-screen flex-col">
	<div class="flex-grow">
		<Navbar />

		{@render children?.()}
	</div>

	<Footer />
</div>
