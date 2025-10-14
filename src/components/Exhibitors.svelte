<script lang="ts">
	import { exhibitors } from '$lib/exhibitors';
	import { m } from '$lib/paraglide/messages';
</script>

<!--
<section>
  <div class="grid grid-cols-4 justify-items-center">
    {#each exhibitors as exhibitor}
      <img src={exhibitor.logo} alt={exhibitor.name} />
      <div class="col-span-3">
        <p>{exhibitor.about()}</p>
      </div>
    {/each}
  </div>
</section> -->

<section class="mx-auto my-16 max-w-6xl px-4">
	<h2 class="mb-16 text-3xl font-semibold md:text-5xl">{m.previous_exhibitors()}</h2>

	<div class="logo-grid items-center justify-center gap-8 md:gap-16">
		{#each exhibitors as exhibitor (exhibitor.slug)}
			<!-- <a
				href={`/exhibitors#${exhibitor.slug}`}
				class="group flex aspect-video items-center justify-center"
			>
				<img
					src={exhibitor.logo}
					alt={exhibitor.name}
					class="max-h-24 object-contain grayscale transition group-hover:scale-110 group-hover:grayscale-0"
				/>
			</a> -->
			<div class="flex aspect-video items-center justify-center">
				<img src={exhibitor.logo} alt={exhibitor.name} class="max-h-24 object-contain" />
			</div>
		{/each}
	</div>
</section>

<style>
	.logo-grid {
		--size: 5rem;

		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(var(--size), 1fr));

		@media (min-width: 768px) {
			--size: 7rem;
		}
	}
</style>
