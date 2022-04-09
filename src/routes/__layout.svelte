<script lang="ts">
	import Footer from '../lib/components/Footer.svelte';
	import Navbar from '../lib/components/Navbar.svelte';
	import SEO from '../lib/components/SEO.svelte';
	import { classes } from '../configs/classnames';
	import { siteName, applicationDescription } from '../configs/data';

	import '../styles/tailwind-output.css';
</script>

<SEO
	title="DeepKush"
	siteTitle={siteName}
	description={applicationDescription}
	image="./logo.png"
	siteUrl="https://deepkush97.github.io/"
/>
<main
	class={`antialiased w-screen h-screen ${classes.background.base} ${classes.textBase} bg-no-repeat bg-full overflow-auto`}
>
	<Navbar />
	<div class="min-h-full w-full mx-auto px-6 sm:px-44">
		<slot />
	</div>
	<Footer />
</main>
