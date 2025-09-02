<script lang="ts">
	import { page } from '$app/state';
	import { exhibitors } from '$lib/exhibitors';
	import { m } from '$lib/paraglide/messages';
	import { setLocale, locales, getLocale } from '$lib/paraglide/runtime';

	const routes = [
		{
			href: '/exhibitors',
			name: m.exhibitors
		},
		{
			href: '/company',
			name: m.for_companies
		}
	] as const;
</script>

<div class="relative z-10 flex h-16 items-center justify-between px-4">
	<nav>
		<ul class="flex items-center gap-8">
			<li>
				<a href="/" class="text-xl font-bold text-forange">FARAD</a>
			</li>
			{#each routes as { href, name } (href)}
				<li>
					<a
						class={'hover:text-neutral-700 ' + (page.url.pathname === href ? 'underline' : '')}
						{href}>{name()}</a
					>
				</li>
			{/each}
		</ul>
	</nav>

	<div class="flex items-center gap-3">
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
