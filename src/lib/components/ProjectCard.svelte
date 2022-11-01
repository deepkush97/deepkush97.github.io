<script lang="ts">
	import ActionItem from './ActionItem.svelte';

	export let repoLink = '';
	export let title = '';
	export let description = '';
	export let url = '';
	export let techStack: string[] = [];
</script>

<div class="flex flex-col gap-4 justify-between pb-14 h-full">
	<div class="flex flex-col space-y-2 h-full ">
		<a
			class="font-semibold text-lg underline dark:text-aquamarine-500"
			href={repoLink}
			target="_blank"
			rel="noopener noreferrer"
		>
			{title}
		</a>
		<p class="flex-1">{description}</p>
		{#if url}
			<ActionItem className="border-2" ele="a" href={url} external>Live Link</ActionItem>
		{/if}
	</div>
	<ul class="flex w-full gap-2 flex-wrap">
		{#each techStack as point}
			<li
				class="border-2 border-gray-900 dark:border-light-100 px-2 text-sm bg-white dark:bg-dark-700 dark:text-aquamarine-500"
			>
				{point}
			</li>
		{/each}
	</ul>
</div>
