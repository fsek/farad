<script>
	import Markdown from '@magidoc/plugin-svelte-marked';

	import { exhibitors } from '$lib/exhibitors';
</script>

{#each exhibitors as exhibitor (exhibitor.slug)}
	<section id={exhibitor.slug} class="mx-auto my-16 max-w-4xl px-4">
		<div class="flex flex-col items-center gap-x-12 gap-y-4 md:flex-row">
			<img
				src={exhibitor.logo}
				alt={exhibitor.name}
				class="max-h-24 w-32 flex-shrink-0 object-contain md:max-h-32 md:w-48 lg:w-64"
			/>
			<div>
				<p class="font-regular about max-w-[50ch] text-lg text-neutral-800">
					<Markdown source={exhibitor.about()} />
				</p>
			</div>
		</div>
	</section>
{/each}

<style>
	@reference "tailwindcss";

	.about :global(a) {
		@apply text-blue-500 underline;
	}
</style>
