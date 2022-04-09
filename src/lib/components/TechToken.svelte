<script lang="ts">
	import { classes } from '../../configs/classnames';
	export let title: string;
	export let iconComponent;
	const IconComponent = iconComponent;
</script>

<div
	class={`flex flex-col items-center ${classes.background.dark} p-4 rounded shadow-lg ${classes.hoverShadowAccent} duration-200 cursor-default gap-4`}
>
	<IconComponent class={`h-16 w-16 ${classes.textAccent}`} />
	<p class={`${classes.textBase} text-center`}>{title}</p>
</div>
