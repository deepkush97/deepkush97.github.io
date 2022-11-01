<script>
	import ExperienceIcon from '$lib/components/icons/ExperienceIcon.svelte';
	import ProjectIcon from '$lib/components/icons/ProjectIcon.svelte';
	import { useThemeToggle } from '$lib/hooks/useThemeToggle';
	import ActionItem from './ActionItem.svelte';
	import AboutIcon from './icons/AboutIcon.svelte';
	import MoonIcon from './icons/MoonIcon.svelte';
	import SkillsIcon from './icons/SkillsIcon.svelte';
	import SunIcon from './icons/SunIcon.svelte';
	const { handleSwitchDarkMode, theme } = useThemeToggle();
</script>

<header
	class="md:fixed top-0 w-full pt-2 px-2 z-10 bg-gray-200 dark:bg-dark-500 transition-all duration-150"
>
	<nav
		class="md:border-2 border-gray-900 dark:border-light-100 bg-gray-200 dark:bg-dark-500 md:bg-white md:dark:bg-dark-700 w-full transition-all duration-150 flex flex-col md:flex-row items-center justify-between"
	>
		<div
			class="flex w-full md:w-auto border-2 md:border-0 border-gray-900 dark:border-light-100 md:border-b-0 bg-white dark:bg-dark-700"
		>
			<a class="p-2 border-r-2 border-gray-900 dark:border-light-100" href="/">DK</a>
			<span class="flex-1 p-2">
				<h1 class="font-semibold"><a href="/"> DeepKush97 </a></h1>
			</span>
		</div>
		<div
			class="flex flex-wrap gap-1 mt-1 md:mt-0 md:gap-0 md:flex-nowrap flex-row justify-center md:justify-start"
		>
			<ActionItem ele="a" href="/#about" className="border-2 md:border-0 md:border-l-2">
				<AboutIcon classes="h-6 w-6" />
				<span class="uppercase">About</span>
			</ActionItem>
			<ActionItem ele="a" href="/#skills" className="border-2 md:border-0 md:border-l-2">
				<SkillsIcon classes="h-6 w-6" />
				<span class="uppercase">Skills</span>
			</ActionItem>
			<ActionItem ele="a" href="/#experiences" className="border-2 md:border-0 md:border-l-2">
				<ExperienceIcon classes="h-6 w-6" />
				<span class="uppercase">Experiences</span>
			</ActionItem>
			<ActionItem ele="a" href="/#projects" className="border-2 md:border-0 md:border-l-2">
				<ProjectIcon classes="h-6 w-6" />
				<span class="uppercase">Projects</span>
			</ActionItem>
			<ActionItem
				ele="button"
				onClick={handleSwitchDarkMode}
				className="border-2 md:border-0 md:border-l-2"
			>
				{#if $theme}
					<MoonIcon classes="h-6 w-6" />
				{:else}
					<SunIcon classes="h-6 w-6" />
				{/if}
			</ActionItem>
		</div>
	</nav>
</header>
