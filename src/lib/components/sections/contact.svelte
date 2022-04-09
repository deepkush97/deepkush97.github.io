<script lang="ts">
	import { socials } from '../../../configs/data';
	import InfoSection from '../InfoSection.svelte';
	import SocialMediaCard from '../SocialMediaCard.svelte';
</script>

<InfoSection id="contact">
	<div class="flex h-full flex-row flex-wrap md:flex-nowrap space-y-4 md:space-y-0 mt-8">
		{#each socials as social}
			<SocialMediaCard
				description={social.description}
				url={social.url}
				icon={social.icon}
				linkText={social.linkText}
			/>
		{/each}
	</div>
</InfoSection>
