<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import Package from '../../components/Package.svelte';
</script>

<h1>{m.would_you_like_to_participate()}</h1>

<Package boothSpace={9} />
