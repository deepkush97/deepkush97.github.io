<script lang="ts">
	import type { SvelteComponent } from 'svelte';

	export let itemTitle: string;
	export let iconComponent: typeof SvelteComponent;
</script>

<li class="relative group">
	<span class="group-hover:underline font-semibold cursor-default">{itemTitle}</span>
	<div
		class="w-20 h-20 hidden group-hover:flex items-center justify-center absolute p-2 top-0 bottom-0 right-0 bg-white dark:bg-dark-700 transition-all duration-200 z-20 border-2 border-gray-900 dark:border-light-100"
	>
		<svelte:component this={iconComponent} className="dark:text-aquamarine-500" />
	</div>
</li>
