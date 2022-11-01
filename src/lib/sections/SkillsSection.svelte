<script>
	import Heading from '$lib/components/Heading.svelte';
	import SkillCategory from '$lib/components/SkillCategory.svelte';
	import { skills } from '../../data';
</script>

<Heading as="h2" id="skills">Skills</Heading>
<div
	class="w-full border-2 border-gray-900 dark:border-light-100 md:h-112 p-4 md:py-8 md:px-24 grid grid-cols-1 md:grid-cols-2 gap-4 bg-red-100 dark:bg-dark-700 transition-all duration-150"
>
	{#each skills as { items, title: skillTitle }}
		<SkillCategory {items} {skillTitle} />
	{/each}
</div>
