<script lang="ts">
	import { classes } from '../../configs/classnames';
	export let url: string;
	export let iconClass: string;
	export let description: string;
	export let linkText: string;
</script>

<div
	class={`p-4 mx-8 md:mx-3 w-full md:w-1/4 flex space-y-4 flex-col justify-between text-center rounded shadow-2xl ${classes.background.dark} duration-200 ${classes.hoverShadowAccent}`}
>
	<h4 class={`text-xl ${classes.textWhite}`}>
		<i class={`${iconClass} fa-2x`} />
	</h4>
	<p>{description}</p>
	<div class="flex items-center justify-center">
		<a
			target="_blank"
			href={url}
			rel="noreferrer"
			class={`${classes.textAccent} ${classes.underline}`}
		>
			{linkText}
		</a>
	</div>
</div>
