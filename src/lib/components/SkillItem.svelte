<script lang="ts">
	import { classes } from '../../configs/classnames';
	import TechToken from './TechToken.svelte';
	export let title: string;
	export let items: { title: string; iconComponent: any }[];
</script>

<div class="px-6 md:px-10 space-y-4">
	<h4 class={`text-lg ${classes.textWhite}`}>{title}</h4>
	<div class="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 md:gap-x-12">
		{#each items as item}
			<TechToken {...item} />
		{/each}
	</div>
</div>
