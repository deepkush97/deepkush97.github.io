<script lang="ts">
	import { classes } from '../../configs/classnames';
	export let title: string;
	export let isActive: boolean;
	export let onClick: () => void;
</script>

<button
	class={`${classes.background.hoverTransparentAccent} ${
		classes.textAccent
	}  text-sm font-mono py-2 px-2 md:px-4 border duration-200 ${classes.border} ${
		isActive ? ` ${classes.background.transparentAccent}` : ' bg-transparent '
	}`}
	on:click={onClick}
>
	{title}
</button>
