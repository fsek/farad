<script lang="ts">
	import { resolve } from '$app/paths';
	import { m } from '$lib/paraglide/messages';
	import { routes } from '$lib/routes';
	import Fsek from './Fsek.svelte';
	let isOpen = false;

	function toggleDropdown() {
		isOpen = !isOpen;
	}
	export let hrefs: { url: string; name: string }[];

	export let title: string;
</script>

<div class="relative inline-block text-left">
	<div>
		<button
			type="button"
			class="inline-flex h-10 w-full justify-center border-gray-300 px-4 py-2 hover:text-neutral-700 dark:hover:text-neutral-300"
			aria-expanded="true"
			aria-haspopup="true"
			on:click={toggleDropdown}
		>
			{title}
			<svg
				class="-mr-1 ml-2 h-5 w-5"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
	</div>

	{#if isOpen}
		<div
			class="ring-opacity-5 absolute right-0 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black focus:outline-none"
			role="menu"
			aria-orientation="vertical"
			aria-labelledby="options-menu"
		>
			<div class="py-1" role="none">
				{#each hrefs as { url, name } (url)}
					<a
						href={resolve(url)}
						class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
						role="menuitem"
					>
						{name}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</div>
