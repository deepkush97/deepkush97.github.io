<script lang="ts">
	import { skills } from '../../../configs/data';
	import InfoSection from '../InfoSection.svelte';
	import SkillItem from '../SkillItem.svelte';
</script>

<InfoSection id="skills">
	<div class="flex h-full flex-col space-y-8 pt-4">
		{#each skills as skill}
			<SkillItem title={skill.title} items={skill.items} />
		{/each}
	</div>
</InfoSection>
