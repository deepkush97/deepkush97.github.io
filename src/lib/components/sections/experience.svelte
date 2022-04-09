<script lang="ts">
	import { experiences } from '../../../configs/data';
	import { classes } from '../../../configs/classnames';
	import InfoSection from '../InfoSection.svelte';
	import TabButton from '../TabButton.svelte';
	import TabContent from '../TabContent.svelte';

	let openTab = 0;
	let selected = experiences[openTab];

	function updateTabValue(index) {
		openTab = index;
		selected = experiences[openTab];
	}
</script>

<InfoSection id="experience">
	<div class="flex h-full flex-col md:flex-row mt-8 px-6 md:px-32 pt-8">
		<div class="flex flex-row md:flex-col justify-start md:h-96 overflow-auto">
			{#each experiences as experience, index}
				<TabButton
					isActive={openTab === index}
					onClick={() => updateTabValue(index)}
					title={experience.timePeriod}
				/>
			{/each}
		</div>
		<div class="w-full">
			<div
				class={`relative flex flex-col min-w-0 break-words ${classes.background.transparentAccent} border ${classes.border} w-full mb-6 shadow-lg`}
			>
				<div class="px-4 py-5 flex-auto">
					<TabContent {...selected} />
				</div>
			</div>
		</div>
	</div>
</InfoSection>
