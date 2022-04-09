<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import HeroSection from '../lib/components/sections/hero.svelte';
	import AboutSection from '../lib/components/sections/about.svelte';
	import SkillsSection from '../lib/components/sections/skills.svelte';
	import ProjectSection from '../lib/components/sections/project.svelte';
	import ContactSection from '../lib/components/sections/contact.svelte';
	import ExperienceSection from '../lib/components/sections/experience.svelte';
</script>

<div class="pb-24">
	<HeroSection />
	<AboutSection />
	<SkillsSection />
	<ExperienceSection />
	<ProjectSection />
	<ContactSection />
</div>
