<script lang="ts">
	import { projects } from '../../../configs/data';
	import InfoSection from '../InfoSection.svelte';
	import ProjectCard from '../ProjectCard.svelte';
</script>

<InfoSection id="projects">
	<div class="flex h-full flex-row mt-4">
		<div class="flex flex-wrap justify-center">
			{#each projects as project, index}
				<ProjectCard
					description={project.description}
					title={project.title}
					techStack={project.techStack}
					url={project.url}
					repoLink={project.repoLink}
				/>
			{/each}
		</div>
	</div>
</InfoSection>
