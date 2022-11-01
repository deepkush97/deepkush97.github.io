<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	let phrases = ['Listener.', 'Learner.', 'Do-er.'];
	let wordToBeDisplayed = '';
	let timer: any;

	let i = 0,
		j = 0,
		peeked = false;

	const update = () => {
		if (peeked) {
			wordToBeDisplayed = wordToBeDisplayed.slice(0, j);
		} else {
			wordToBeDisplayed += phrases[i][j];
		}
		if (j === phrases[i].length - 1) {
			peeked = true;
		} else if (peeked === true && j === 0) {
			i = (i + 1) % phrases.length;
			peeked = false;
			j = -1;
		}
		if (peeked) {
			j--;
		} else {
			j++;
		}
	};

	onMount(() => {
		timer = setInterval(() => {
			update();
		}, 200);
	});
	onDestroy(() => {
		clearInterval(timer);
	});
</script>

<p class="text-6xl font-semibold">&nbsp;{wordToBeDisplayed}</p>
