<script lang="ts">
	import { classes } from '../../configs/classnames';
	import { githubLink, title } from '../../configs/data';
</script>

<footer class={`sticky ${classes.background.base} bottom-0 block py-2`}>
	<div class="container mx-auto">
		<div class="flex flex-wrap items-center md:justify-between justify-center">
			<div class="w-full md:w-4/12 px-4">
				<div class={`text-sm text- font-semibold py-1 text-center md:text-left`}>
					Created with ❤️ by {title}
				</div>
			</div>
			<div class="w-full md:w-8/12 px-4 mt-2 md:mt-0">
				<ul class="flex flex-wrap list-none md:justify-end justify-center">
					<li>
						<button
							on:click={() => window.open(githubLink, '_blank')}
							class={`${classes.textBase} ${classes.textHover} ${classes.underline} text-sm font-semibold block py-1 px-3`}
						>
							Github
						</button>
					</li>
				</ul>
			</div>
		</div>
	</div>
</footer>
