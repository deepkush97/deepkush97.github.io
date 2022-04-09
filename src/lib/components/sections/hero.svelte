<script lang="ts">
	import { classes } from '../../../configs/classnames';
	import { navigation } from '../../../configs/data';
	const contactSectionInfo = navigation['contact'];
</script>

<section id="home" class="min-h-80v pb-24 px-6 md:px-10">
	<p class={`${classes.textAccent} text-lg font-mono`}>
		{' '}
		Hi, my name is
	</p>
	<h1 class={`text-5xl md:text-7xl  font-extrabold ${classes.textWhite}`}>Deepanshu Kushwaha</h1>
	<h2 class={`text-3xl md:text-4xl font-bold mb-6`}>Listener. Learner. Do-er.</h2>
	<div class="w-full sm:w-2/3 mb-4">
		<p class={`text-lg font-medium`}>
			I'm a Software Engineer. <br />I have an experience in Node.js, React.js, .NET Core, ASP.NET
			Core and many more things.{' '}
		</p>
	</div>
	<a
		href={`/#${contactSectionInfo.id}`}
		class={`bg-transparent ${classes.background.hoverTransparentAccent} duration-200 ${classes.textAccent} inline-block font-normal font-mono my-4 py-4 px-6 border ${classes.border}`}
	>
		Contact me
	</a>
</section>
