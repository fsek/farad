<script lang="ts">
	import { page } from '$app/state';
	import { setLocale, locales, getLocale } from '$lib/paraglide/runtime';
	import { routes } from '$lib/routes';
</script>

<div class="relative z-10 flex h-16 items-center justify-between px-4">
	<nav>
		<ul class="flex items-center gap-8">
			<li>
				<a href="/"><img src="/farad.svg" alt="FARAD" class="h-8 object-contain sm:h-10" /></a>
			</li>
			{#each routes as { href, name } (href)}
				<li>
					<a
						class={'hover:text-neutral-700 dark:hover:text-neutral-300 ' +
							(page.url.pathname === href ? 'underline' : '')}
						{href}>{name()}</a
					>
				</li>
			{/each}
		</ul>
	</nav>

	<div class="flex items-center gap-2 text-sm sm:gap-3">
		{#each locales as locale (locale)}
			<span class="text-neutral-400 first-of-type:hidden">/</span>
			{#if locale === getLocale()}
				<span class="uppercase underline">{locale}</span>
			{:else}
				<button class="cursor-pointer uppercase" onclick={() => setLocale(locale)}>{locale}</button>
			{/if}
		{/each}
	</div>
</div>
