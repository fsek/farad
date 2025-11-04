<script lang="ts">
	export let label: string;
	export let name: string;
	export let type: string = 'text';
</script>

<label class="flex flex-col gap-2 font-medium max-sm:col-span-2">
	{label}
	<input
		{name}
		{type}
		class="rounded-lg border-1 border-neutral-300 p-4 text-lg font-normal max-sm:col-span-2"
	/>
</label>
