<script lang="ts">
	export let ele: 'button' | 'a' = 'button';
	export let href: string | undefined = undefined;
	export let title: string | undefined = undefined;
	export let external: boolean = false;
	export let onClick: (() => void) | undefined = undefined;
	export let className: string | undefined = undefined;
	const classes = `flex items-center justify-center gap-1 p-1 md:p-2 text-sm md:text-base border-gray-900 dark:border-light-100 bg-white dark:bg-dark-700 hover:bg-yellow-200 dark:hover:bg-dark-400 transition duration-200 dark:text-aquamarine-500 ${
		className ? className : ''
	}`;
</script>

{#if ele === 'a' || href !== undefined}
	{#if external}
		<a {href} {title} class={classes} target="_blank" rel="noopener noreferrer">
			<slot />
		</a>
	{:else}
		<a {href} {title} class={classes}>
			<slot />
		</a>
	{/if}
{:else if ele === 'button' || onClick !== undefined}
	<button class={classes} on:click={onClick} {title}>
		<slot />
	</button>
{/if}
