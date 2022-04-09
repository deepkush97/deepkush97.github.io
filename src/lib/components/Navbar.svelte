<script lang="ts">
	import { classes } from '../../configs/classnames';
	import { navigation, title } from '../../configs/data';
</script>

<nav
	class={`sticky top-0 w-full z-20 ${classes.background.base} backdrop-blur-lg bg-opacity-75 flex flex-wrap items-center justify-between pb-4 md:py-4  navbar-expand-lg`}
>
	<div class="container px-6 mx-auto flex flex-wrap items-center justify-between">
		<div class="w-full flex justify-center md:w-auto md:static md:block md:justify-start">
			<a
				href="/"
				class={`${classes.textBase} flex items-center justify-center text-sm font-bold leading-relaxed mr-4 py-2 whitespace-nowrap uppercase`}
			>
				<span class={`${classes.textAccent} text-base`}>DK </span>
				<span class={`${classes.textBase} ${classes.textHover} duration-200 ml-2`}>
					{title}
				</span>
			</a>
		</div>
		<div class="flex flex-wrap md:flex-nowrap justify-center md:justify-start">
			{#each Object.values(navigation) as { id, number, text }}
				<a
					href={`/#${id}`}
					class={`${classes.textBase} ${classes.textHover} text-sm leading-relaxed inline-block mr-4 pt-2 pb-1 whitespace-nowrap  ${classes.underline}`}
				>
					<span class={`${classes.textAccent} font-mono`}>{number}.</span>{' '}
					{text}
				</a>
			{/each}
		</div>
	</div>
</nav>
