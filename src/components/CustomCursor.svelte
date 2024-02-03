<script>
	import { onMount } from 'svelte';

	onMount(() => {
		const cursor = document.querySelector('.cursor');
		const dot = document.querySelector('.dot');
		document.addEventListener('mousemove', (e) => {
			cursor.style.top = e.clientY + 'px';
			cursor.style.left = e.clientX + 'px';
		});

		// Add a delay to the dot
		document.addEventListener('mousemove', (e) => {
			setTimeout(() => {
				dot.style.top = e.clientY + 'px';
				dot.style.left = e.clientX + 'px';
			}, 140);
		});

		// Add hover class on hovering over buttons or svg or a tags
		const hoverables = document.querySelectorAll('button, svg, a');
		hoverables.forEach((hoverable) => {
			hoverable.addEventListener('mouseover', () => {
				cursor.classList.add('hover');
			});
			hoverable.addEventListener('mouseleave', () => {
				cursor.classList.remove('hover');
			});
		});
	});
</script>

<div class="cursor"></div>
<div class="dot"></div>

<style lang="scss">
	/* Add your styles here */
	.cursor {
		position: fixed;
		width: 40px;
		aspect-ratio: 1/1;
		border: 2px solid var(--primary-orange);
		border-radius: 50%;
		transform: translate(-50%, -50%);
		pointer-events: none;
		z-index: 999;
		mix-blend-mode: difference;
		transition: width 0.2s ease-in-out;

		&:global(.hover) {
			width: 70px;
		}

		@media screen and (max-width: 768px) {
			display: none;
		}
	}
	.dot {
		position: fixed;
		width: 10px;
		height: 10px;
		background-color: white;
		border-radius: 50%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		pointer-events: none;
		z-index: 999;

		@media screen and (max-width: 768px) {
			display: none;
		}
	}
</style>
