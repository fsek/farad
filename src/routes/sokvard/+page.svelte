<script lang="ts">
	import SpamMarquee from '../../components/SpamMarquee.svelte';
</script>

<!-- <div class="relative min-h-fit">
	<img src="/arbetslag.jpg" alt="FARAD team" class="inset-0 -z-10 h-full w-full object-cover" />
</div> -->
<section>
	<!-- <div mask-b-from-50% mask-b-to-80%  -->
	<div>
		<div
			class="pointer-events-none absolute -z-10 mask-t-from-80% mask-t-to-100% mask-b-from-40% mask-b-to-89%"
			aria-hidden="true"
		>
			<SpamMarquee speed={120}>SÖK VÄRD</SpamMarquee>
			<SpamMarquee speed={150} reverse={true}>SÖK VÄRD</SpamMarquee>
			<SpamMarquee speed={180}>SÖK VÄRD</SpamMarquee>
			<SpamMarquee speed={2100} reverse={true}>SÖK VÄRD</SpamMarquee>
			<SpamMarquee speed={180}>SÖK VÄRD</SpamMarquee>
			<SpamMarquee speed={2100} reverse={true}>SÖK VÄRD</SpamMarquee>
		</div>
		<div
			class="pointer-events-none absolute -z-10 h-full
              w-full mask-r-from-60% backdrop-blur-md"
		></div>
	</div>
	<div class="flex min-h-screen flex-col items-center justify-center gap-4">
		<h1 class="text-5xl font-semibold">Bli en del av F-sektionens arbetsmarknadsmässa</h1>
	</div>
	<!-- <div>
		<div
			class="back absolute top-2/5 left-1/2 flex -translate-x-1/2 -translate-y-2/3 transform flex-col"
		>
			<a
				href="http://localhost:5173/sokvard"
				class="md: md: m-3 rounded-lg bg-forange px-5 py-3 text-center text-2xl font-semibold text-white shadow md:px-10 md:py-6 md:text-4xl dark:bg-white dark:font-medium dark:text-black"
			>
				Sök värd
			</a>
			<a
				href="http://localhost:5173/sokvard"
				class="md: md: text-1xl m-3 rounded-lg bg-forange px-5 py-3 text-center font-semibold text-white shadow md:px-6 md:py-4 md:text-2xl dark:bg-white dark:font-medium dark:text-black"
			>
				Läs mer
			</a>
		</div>
	</div> -->
</section>
