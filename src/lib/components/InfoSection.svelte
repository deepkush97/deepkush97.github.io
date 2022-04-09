<script lang="ts">
	import { classes } from '../../configs/classnames';
	import { navigation } from '../../configs/data';
	export let id: keyof typeof navigation;
	const { number, text } = navigation[id];
</script>

<section id={String(id)} class="min-h-80v flex flex-col py-36 md:py-28 w-full">
	<h3 class={`text-2xl flex items-center space-x-1 ${classes.textWhite}`}>
		<span class={`${classes.textAccent} font-mono pl-10`}>
			{number}.
		</span>
		<span>{text}</span>
	</h3>
	<slot />
</section>
