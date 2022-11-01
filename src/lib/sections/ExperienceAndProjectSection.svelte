<script lang="ts">
	import Carousel from '$lib/components/Carousel.svelte';
	import ExperienceCard from '$lib/components/ExperienceCard.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { experiences, projects } from '../../data';
</script>

<div class="flex flex-col md:flex-row w-full gap-2 h-full">
	<div class="flex flex-col space-y-2 flex-1 h-full">
		<Heading as="h2" id="experiences">Experiences</Heading>
		<div
			class="w-full border-2 border-gray-900 dark:border-light-100 h-102 md:p-12 flex items-center justify-center bg-white dark:bg-dark-700 transition-all duration-150"
		>
			<Carousel component={ExperienceCard} items={experiences} />
		</div>
	</div>

	<div class="flex flex-col space-y-2 flex-1 h-full">
		<Heading as="h2" id="projects">Projects</Heading>
		<div
			class="w-full border-2 border-gray-900 dark:border-light-100 h-102 md:p-12 flex items-center justify-center bg-white dark:bg-dark-700 transition-all duration-150"
		>
			<Carousel component={ProjectCard} items={projects} />
		</div>
	</div>
</div>
