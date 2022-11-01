<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	export let items: Record<string, any>[];
	export let component: typeof SvelteComponent;
	let selectedItemIndex = 0;

	let selectedItem = items[selectedItemIndex];
	const decrementItemIndex = () => updateItemIndex(-1);
	const incrementItemIndex = () => updateItemIndex(1);
	const updateItemIndex = (diff: number) => {
		selectedItemIndex = (selectedItemIndex + diff + items.length) % items.length;
		selectedItem = items[selectedItemIndex];
	};
</script>

<div
	class={`flex-1 md:border-2 border-gray-900 dark:border-light-100 h-full relative flex flex-col md:max-w-md px-3 py-2 bg-green-100 dark:bg-dark-700 transition-all duration-150`}
>
	<svelte:component this={component} {...selectedItem} />
	<button
		on:click={() => decrementItemIndex()}
		class="absolute left-0 bottom-0 px-8 py-1 border-t-2 border-r-2 text-2xl border-gray-900 dark:text-aquamarine-500 dark:border-light-100 bg-white dark:bg-dark-700 hover:bg-yellow-200 dark:hover:bg-dark-400"
		>{`<`}</button
	>
	<button
		on:click={() => incrementItemIndex()}
		class="absolute right-0 bottom-0 px-8 py-1 border-t-2 border-l-2 text-2xl border-gray-900 dark:text-aquamarine-500 dark:border-light-100 bg-white dark:bg-dark-700 hover:bg-yellow-200 dark:hover:bg-dark-400"
		>{`>`}</button
	>
</div>
