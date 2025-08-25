<script lang="ts">
	import { exhibitors } from '$lib/exhibitors';
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

<section class="logo-grid mx-auto my-16 max-w-6xl items-center justify-center gap-8 px-4 md:gap-16">
	{#each exhibitors as exhibitor (exhibitor.slug)}
		<a
			href={`/exhibitors#${exhibitor.slug}`}
			class="group flex aspect-square items-center justify-center"
		>
			<img
				src={exhibitor.logo}
				alt={exhibitor.name}
				class="max-h-24 object-contain grayscale group-hover:grayscale-0"
			/>
		</a>
	{/each}
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
