<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import { setLocale, locales, getLocale } from '$lib/paraglide/runtime';
</script>

<div
	class="relative z-10 flex h-16 items-center justify-between border-b border-neutral-200 bg-white px-4"
>
	<nav>
		<a href="/">logo</a>
		<a href="/exhibitors">{m.exhibitors()}</a>
	</nav>

	<div class="flex items-center gap-2">
		{#each locales as locale (locale)}
			{#if locale === getLocale()}
				<strong>{locale}</strong>
			{:else}
				<button class="cursor-pointer" onclick={() => setLocale(locale)}>{locale}</button>
			{/if}
		{/each}
	</div>
</div>
