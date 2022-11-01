<script lang="ts">
	export let designation = '';
	export let companyName = '';
	export let location = '';
	export let timePeriod = '';
	export let mentionablePoints: string[] = [];
</script>

<div
	class="flex items-center justify-between border-b-2 border-gray-900 dark:border-light-100 pb-2 mb-4"
>
	<div class="flex flex-col w-full justify-between md:flex-row">
		<div class="flex flex-col">
			<span class="font-semibold dark:text-aquamarine-500">{designation}</span><span class="text-sm"
				>{companyName}</span
			>
		</div>
		<div class="flex text-sm flex-col justify-center">
			<span>{location}</span><span>{timePeriod}</span>
		</div>
	</div>
</div>
<ul class="flex w-full flex-col list-inside list-disc">
	{#each mentionablePoints as point}
		<li class="mb-1">
			{point}
		</li>
	{/each}
</ul>
