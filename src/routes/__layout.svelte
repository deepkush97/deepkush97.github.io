<script lang="ts">
	import Footer from '../lib/components/Footer.svelte';
	import Navbar from '../lib/components/Navbar.svelte';
	import { classes } from '../configs/classnames';

	import '../styles/tailwind-output.css';
</script>

<main
	class={`antialiased w-screen h-screen ${classes.background.base} ${classes.textBase} bg-no-repeat bg-full overflow-auto`}
>
	<Navbar />
	<div class="min-h-full w-full mx-auto px-6 sm:px-44">
		<slot />
	</div>
	<Footer />
</main>
