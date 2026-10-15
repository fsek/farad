<script lang="ts">
	import { Marquee } from '@selemondev/svelte-marquee';

	import '@selemondev/svelte-marquee/dist/style.css';

	export let reverse: boolean = false;
	export let speed: number = 200;
	export let opacity: number = 1;
</script>

<Marquee
	fade
	class="text-[15vh] leading-[1.2] font-semibold text-forange uppercase opacity-70"
	{speed}
	{reverse}
>
	{#each { length: 3 } as _, i (i)}
		<div class="mx-[0.1em]"><slot /></div>
	{/each}
</Marquee>
