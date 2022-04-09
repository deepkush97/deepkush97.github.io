<script lang="ts">
	import { classes } from '../../../configs/classnames';
	import { about } from '../../../configs/data';
	import InfoSection from '../InfoSection.svelte';
</script>

<InfoSection id="about">
	<div class="flex h-full md:flex-row flex-col-reverse pt-4">
		<div class="w-full md:w-2/3 py-4 px-6 md:px-10">{about}</div>
		<div class="w-full md:w-1/3  flex items-center justify-center">
			<div
				class={`border-2 ${classes.borderDark} w-64 h-64 flex justify-center items-center relative bg-cover transform transition shadow-m hover:shadow-b duration-300 `}
				style="background-image: url('./me.jpg')"
			/>
		</div>
	</div>
</InfoSection>
