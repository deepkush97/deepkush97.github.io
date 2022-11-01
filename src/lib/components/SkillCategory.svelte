<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import SkillItem from './SkillItem.svelte';

	export let skillTitle: string;
	export let items: { title: string; iconComponent: typeof SvelteComponent }[];
</script>

<div>
	<h4 class="font-bold text-lg mb-4 font-mono">{skillTitle}</h4>
	<ul class="grid grid-cols-2 list-disc list-inside text-sm md:text-base">
		{#each items as { title: itemTitle, iconComponent }}
			<SkillItem {iconComponent} {itemTitle} />
		{/each}
	</ul>
</div>
