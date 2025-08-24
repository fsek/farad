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

<section>
	<div class="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-8 px-4">
		{#each exhibitors as exhibitor (exhibitor.slug)}
			<a href={`/exhibitors#${exhibitor.slug}`}>
				<img
					src={exhibitor.logo}
					alt={exhibitor.name}
					class="max-h-24 w-24 object-contain md:w-40"
				/>
			</a>
		{/each}
	</div>
</section>
