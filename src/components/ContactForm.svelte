<script>
	import Input from './ContactForm/Input.svelte';

	import { m } from '$lib/paraglide/messages';
</script>

<section class="mx-auto my-16 max-w-6xl px-4 md:my-24">
	<form method="POST" action="/contact" class="grid grid-cols-2 gap-x-4 gap-y-6">
		<Input label={m.name()} name="name" type="text" />
		<Input label={m.company()} name="company" type="text" />
		<Input label={m.email()} name="email" type="email" />
		<Input label={m.phone()} name="phone" type="tel" />

		<label class="col-span-2 flex flex-col gap-2 font-medium">
			{m.message()}
			<textarea
				name="message"
				class="rounded-lg border border-neutral-300 p-4 text-lg font-normal dark:border-neutral-600"
				rows="8"
			></textarea>
		</label>

		<div class="col-span-2">
			<button
				class="rounded-lg bg-neutral-950 px-6 py-3 text-sm font-semibold text-white shadow md:text-lg dark:bg-white dark:font-medium dark:text-black"
			>
				{m.send()} ->
			</button>
		</div>
	</form>
</section>
