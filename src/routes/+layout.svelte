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

<div class="flex min-h-screen flex-col">
	<div class="flex-grow">
		<Navbar />

		{@render children?.()}
	</div>

	<footer class="bg-neutral-100">
		<div class="mx-auto max-w-6xl px-4 py-8">
			<p class="text-md text-center font-medium">
				<a href="mailto:farad@fsektionen.se" class="hover:underline">farad@fsektionen.se</a>
			</p>

			<img src="/fsek.svg" alt="F-sektionen" class="mx-auto mt-4 h-8 object-contain sm:h-10" />
		</div>
	</footer>
</div>
