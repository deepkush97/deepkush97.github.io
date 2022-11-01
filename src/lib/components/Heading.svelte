<script lang="ts">
	type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	export let as: HeadingType = 'h3';
	export let id: string | undefined;
	let textClasses: { [key in HeadingType]: string } = {
		h1: 'text-2xl',
		h2: 'text-xl',
		h3: 'text-lg',
		h4: 'text-base',
		h5: 'text-sm',
		h6: 'text-xs'
	};
	let headingClass = `border-2 border-gray-900 dark:border-light-100 p-1 uppercase ${textClasses[as]} bg-white dark:bg-dark-700 select-none dark:text-light-100`;
</script>

{#if as === 'h1'}
	<h1 {id} class={headingClass}>
		<slot />
	</h1>
{:else if as === 'h2'}
	<h2 {id} class={headingClass}>
		<slot />
	</h2>
{:else if as === 'h3'}
	<h3 {id} class={headingClass}>
		<slot />
	</h3>
{:else if as === 'h4'}
	<h4 {id} class={headingClass}>
		<slot />
	</h4>
{:else if as === 'h5'}
	<h5 {id} class={headingClass}>
		<slot />
	</h5>
{:else}
	<h6 {id} class={headingClass}>
		<slot />
	</h6>
{/if}
