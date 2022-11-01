<script>
	import Emphasize from '$lib/components/Emphasize.svelte';
	import ReWriter from '$lib/components/ReWriter.svelte';
</script>

<div
	class="w-full border-2 bg-lime-100 dark:bg-dark-700 transition-all duration-150 border-gray-900 dark:border-light-100 h-120 flex flex-col md:flex-row gap-2 "
>
	<div class="flex items-center justify-center w-full md:w-1/3">
		<div class="md:px-16 py-8 md:py-0"><ReWriter /></div>
	</div>
	<div class="w-full h-full md:w-2/3 flex items-center justify-center">
		<div class="px-4">
			<p class="mb-1 pl-1">Hi, my name is</p>
			<p class="text-5xl font-bold mb-8 dark:text-aquamarine-500">Deepanshu Kushwaha</p>
			<p class="my-4 pr-8">
				I am a technology enthusiast, with curious, creative and observative mind and likes to play <span
					class="font-mono font-semibold">`tabla`</span
				> on keyboard by developing charming and interesting applications.
			</p>
			<small class="text-sm font-semibold font-mono italic dark:text-aquamarine-500"
				>I'm kinda <Emphasize>`geek`</Emphasize> but not a
				<Emphasize>`nerd`</Emphasize>.</small
			>
		</div>
	</div>
</div>
