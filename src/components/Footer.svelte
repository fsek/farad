<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import { routes } from '$lib/routes';
	import Fsek from './Fsek.svelte';

	const groups = [
		{
			title: m.navigate(),
			links: [
				{
					name: m.home,
					href: '/'
				},
				...routes
			]
		},
		{
			title: m.follow_us(),
			links: [
				{ name: 'Instagram', href: 'https://instagram.com/fsek_farad' },
				{ name: 'LinkedIn', href: 'https://www.linkedin.com/groups/3694965/' }
			]
		},
		{
			title: m.contact_us(),
			links: [
				{
					name: 'farad@fsektionen.se',
					href: 'mailto:farad@fsektionen.se'
				}
			]
		}
	] as const;
</script>

<footer class="border-t border-neutral-200 bg-neutral-50">
	<div class="mx-auto flex max-w-6xl flex-wrap gap-8 px-4 py-16">
		{#each groups as group (group.title)}
			<div class="basis-40 md:basis-64">
				<h3 class="font-medium">{group.title}</h3>
				<ul>
					{#each group.links as { name, href } (href)}
						<li class="my-2">
							<a {href} class="text-neutral-700 hover:text-black hover:underline"
								>{typeof name === 'function' ? name() : name}</a
							>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
		<!--
		<p class="text-md text-center font-medium">
			<a href="mailto:farad@fsektionen.se" class="hover:underline">farad@fsektionen.se</a>
		</p> -->

		<a href="https://fsektionen.se" class="ml-auto flex flex-col gap-8">
			<Fsek className="h-32 text-forange" />
		</a>
	</div>
</footer>
