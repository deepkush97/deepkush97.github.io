<script>
	import ActionItem from './ActionItem.svelte';
	import ContactIcon from './icons/ContactIcon.svelte';
	import GithubIcon from './icons/GithubIcon.svelte';
	import InstagramIcon from './icons/InstagramIcon.svelte';
	import LinkedInIcon from './icons/LinkedInIcon.svelte';
</script>

<footer class="w-full pb-2 px-2 ">
	<nav
		class="border-2 border-gray-900 dark:border-light-100 bg-white dark:bg-dark-700 w-full flex flex-col md:flex-row items-center justify-between"
	>
		<div class="flex">
			<ActionItem
				ele="a"
				external
				href="mailto:tempacc4897@gmail.com"
				className="border-x-2 md:border-x-0 md:border-r-2 border-b-2 md:border-b-0"
				title="To have a formal conversation or to share something with me."
			>
				<ContactIcon classes="h-6 w-6" />
			</ActionItem>
			<ActionItem
				className="border-r-2 border-b-2 md:border-b-0"
				ele="a"
				external
				href="https://github.com/deepkush97"
				title="To see my projects, my repositories and my personal work."
			>
				<GithubIcon classes="h-6 w-6" />
			</ActionItem>
			<ActionItem
				className="border-r-2 border-b-2 md:border-b-0"
				ele="a"
				external
				href="https://www.linkedin.com/in/leftisfame"
				title="To connect to me professionally and build network."
			>
				<LinkedInIcon classes="h-6 w-6" />
			</ActionItem>
			<ActionItem
				className="border-r-2 border-b-2 md:border-b-0"
				ele="a"
				external
				href="https://www.instagram.com/leftisfame"
				title="To get to know me personally. I am another person in real."
			>
				<InstagramIcon classes="h-6 w-6" />
			</ActionItem>
		</div>
		<div class="md:flex-1 p-2 flex justify-end">
			<p class="font-semibold text-xs text-center md:text-base ">
				Created with ❤️ by DeepKush. Built with <a
					href="https://kit.svelte.dev/"
					target="_blank"
					rel="noopener noreferrer"
					class="underline dark:text-aquamarine-500">SvelteKit</a
				>
				and Styled through
				<a
					href="https://tailwindcss.com/"
					target="_blank"
					rel="noopener noreferrer"
					class="underline dark:text-aquamarine-500">TailwindCSS</a
				>
			</p>
		</div>
	</nav>
</footer>
