<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import './styles.css';
</script>

<Navbar />
<main class="md:mt-13 p-2 space-y-2">
	<slot />
</main>
<Footer />
