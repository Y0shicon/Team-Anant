<script context="module">
	export function load({ error }) {
		return {
			props: {
				status: error.status,
				message: error.message
			}
		};
	}
</script>

<script>
	export let status;
	export let message;
	let count = 5;

	import { onMount } from 'svelte';

	console.log(status, message);

	onMount(() => {
		setTimeout(() => {
			window.location.href = '/';
		}, 5000);

		const interval = setInterval(() => {
			count--;
		}, 1000);

		return () => clearInterval(interval);
	})
</script>

<div class="container">
	<h1>ERROR 404</h1>
	<p>Page not found</p>
	<p>Redirecting in {count} seconds...</p>
</div>


<style lang="scss">
	.container {
		width: 100%;
		height: 100vh;

		display: flex;
		flex-direction: column;
		gap: 20px;

		justify-content: center;
		align-items: center;

		text-align: center;

		transition: all 0.5s ease-in-out;

		h1{
			font-size: 5rem;
			color: var(--primary-orange);
		}

		p {
			font-size: 1.5rem;
			color: white;
		}

		@media screen and (max-width: 1000px) {
			h1 {
				font-size: 3rem;
			}

			p {
				font-size: 1rem;
			}
		}
	}
</style>
