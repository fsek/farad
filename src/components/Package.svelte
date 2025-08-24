<script lang="ts">
	import { m } from '$lib/paraglide/messages';

	let { boothSpace }: { boothSpace: number } = $props();
</script>

{m.booth_space({ area: boothSpace })}
