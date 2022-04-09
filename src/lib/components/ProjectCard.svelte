<script lang="ts">
	import { classes } from '../../configs/classnames';

	export let url: string;
	export let repoLink: string;
	export let title: string;
	export let description: string;
	export let techStack: string[];
</script>

<div
	class={`rounded shadow-xl mx-6 my-3 p-4 w-full md:w-1/3 flex flex-col h-60 ${classes.background.dark} duration-200 ${classes.hoverShadowAccent}`}
>
	<div class="flex justify-between items-center mb-4">
		<div class="flex">
			<a
				href={repoLink}
				target="_blank"
				rel="noreferrer"
				class={`flex-1 text-lg ${classes.textWhite} ${classes.textHover} ${classes.underline}`}
			>
				{title}
			</a>
		</div>
		<div class="flex justify-start">
			{#if url}
				<a
					href={url}
					target="_blank"
					rel="noreferrer"
					title="Open live demo"
					class={`bg-transparent hover:bg-aquamarine-800 hover:bg-opacity-20 ${classes.textBase} ${classes.textHover} font-normal font-mono py-1 px-2 rounded`}
				>
					<i class="fas fa-external-link-square-alt" />
				</a>
			{/if}
		</div>
	</div>
	<p class="text-sm flex-1">{description}</p>

	<div class="flex flex-wrap text-xs gap-1">
		{#each techStack as stack, index}
			<span
				class={`bg-transparent ${classes.textAccent} inline-block font-mono  px-1 border ${classes.border}`}
				title={stack}
			>
				{stack}
			</span>
		{/each}
	</div>
</div>
