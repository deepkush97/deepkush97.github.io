<script lang="ts">
	import { classes } from '../../configs/classnames';
	export let companyName: string;
	export let location: string;
	export let designation: string;
	export let timePeriod: string;
	export let mentionablePoints: string[];
</script>

<div class={`flex items-center justify-between border-b-2 ${classes.border} pb-2 mb-4`}>
	<div class="flex flex-col w-full justify-between md:flex-row">
		<div class={`flex flex-col text-base ${classes.textWhite}`}>
			<span class={classes.textAccent}>{designation}</span>
			<span class="text-sm">{companyName}</span>
		</div>
		<div class={`flex text-sm flex-col justify-center`}>
			<span>{location}</span>
			<span>{timePeriod}</span>
		</div>
	</div>
</div>
<ul class="flex w-full flex-col">
	{#each mentionablePoints as point}
		<li class="mb-1">
			<span class={classes.textAccent}>-</span>
			{point}
		</li>
	{/each}
</ul>
