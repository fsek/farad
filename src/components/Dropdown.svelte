<script lang="ts">
	import { resolve } from '$app/paths';
	import { m } from '$lib/paraglide/messages';
	import { routes } from '$lib/routes';
	import { page } from '$app/state';
	import Fsek from './Fsek.svelte';
	let isOpen = false;
	let container: HTMLDivElement;

	function toggleDropdown() {
		isOpen = !isOpen;
	}
	function handleWindowClick(event: MouseEvent) {
		if (isOpen && !container.contains(event.target as Node)) isOpen = false;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') isOpen = false;
	}

	export let hrefs: { url: string; name: string }[];

	export let title: string;
</script>

<svelte:window on:click={handleWindowClick} on:keydown={handleKeydown} />

<div class="relative inline-block text-left" bind:this={container}>
	<div>
		<button
			type="button"
			class={'w-full justify-center border-gray-300 py-2 text-sm hover:text-neutral-700 sm:text-base dark:hover:text-neutral-300 ' +
				(page.url.pathname === '/student' || page.url.pathname === '/sokvard' ? 'underline' : '')}
			aria-expanded={isOpen}
			aria-haspopup="true"
			on:click={toggleDropdown}
		>
			{title}
		</button>
	</div>

	{#if isOpen}
		<div
			class="ring-opacity-5 absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-gray-500 focus:outline-none dark:bg-gray-900"
			role="menu"
			aria-orientation="vertical"
			aria-labelledby="options-menu"
		>
			<div class="py-1" role="none">
				{#each hrefs as { url, name } (url)}
					<a
						href={resolve(url)}
						class="block px-4 py-2 text-sm hover:text-neutral-700 dark:hover:text-neutral-300"
						role="menuitem"
						on:click={toggleDropdown}
					>
						{name}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</div>
