<script lang="ts">
	export let description: string;
	export let title: string;
	export let siteTitle: string;
	export let siteUrl: string;
	export let image: string;
</script>

<svelte:head>
	<title>{`${title} | ${siteTitle}`}</title>
	<meta name="description" content={description} />
	<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:site_name" content={siteTitle} />
	<meta property="og:image" content={image} />
	<meta property="twitter:card" content="summary" />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={image} />
	<meta property="twitter:url" content={siteUrl} />
</svelte:head>
