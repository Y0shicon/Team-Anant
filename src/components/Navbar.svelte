<script>
	import logo from '$assets/logo.png';
	import { onMount } from 'svelte';

	onMount(() => {
		const hamBut = document.querySelector('.hamBut');
		const hamLines = document.querySelectorAll('.hamLine');
		const hamMenu = document.querySelector('.hamMenu');

		// Toggle ham menu on click of links
		document.querySelectorAll('.hamMenu a').forEach((link) => {
			link.addEventListener('click', () => {
				hamBut.click();
			});
		});

		const toggleHam = () => {
			hamLines.forEach((line) => {
				line.classList.toggle('active');
			});
			hamMenu.classList.toggle('active');
		};

		document.addEventListener('scroll', () => {
			if (window.scrollY > 20) {
				document.querySelector('.navbar').classList.add('scrollActive');
				document.querySelector('.navbar').style.opacity = 1;
				// } else if (window.scrollY >= window.innerHeight) {
				// 	document.querySelector('.navbar').style.opacity = 0;
			} else {
				document.querySelector('.navbar').style.opacity = 1;
				document.querySelector('.navbar').classList.remove('scrollActive');
			}
		});

		hamBut.addEventListener('click', toggleHam);

		return () => {
			hamBut.removeEventListener('click', toggleHam);
		};
	});
</script>

<nav class="navbar">
	<button
		class="logo"
		on:click={() => {
			if (window.location.pathname === '/') {
				window.scrollTo(0, 0);
			} else {
				window.location.href = '/';
			}
		}}
		on:keydown={(event) => {
			if (window.location.pathname === '/') {
				window.scrollTo(0, 0);
			} else {
				window.location.href = '/';
			}
		}}
	>
		<img src={logo} alt="Logo" />
	</button>
	<div class="links">
		<a href="/">Home</a>
		<a href="/about">About</a>
		<a href="/services">Services</a>
		<a href="/contact">Contact</a>
		<button class="hamBut">
			<div class="hamLine"></div>
			<div class="hamLine"></div>
			<div class="hamLine"></div>
		</button>
	</div>
	<div class="hamMenu">
		<a href="/">Home</a>
		<a href="/about">About</a>
		<a href="/services">Services</a>
		<a href="/contact">Contact</a>
	</div>
</nav>

<style lang="scss">
	.navbar {
		z-index: 10;

		display: flex;
		color: #fff;
		padding: 5px 5%;

		width: 100%;
		height: 120px;

		position: fixed;
		top: 0;

		transition: all 0.3s ease-in-out;

		display: flex;
		align-items: center;

		&:global(.scrollActive) {
			background-color: var(--secondary-orange);
			height: 90px;
		}

		.logo {
			margin-right: auto;
			aspect-ratio: 1/1;
			height: 100%;

			display: flex;
			align-items: center;
			justify-content: center;

			img {
				height: 90%;
				aspect-ratio: 1/1;
				object-fit: contain;

				transition: transform 0.3s ease-in-out;
			}

			&:hover,
			&:focus,
			&:active,
			&:focus-within {
				cursor: pointer;

				img {
					transform: scale(1.2);
				}
			}
		}

		.links {
			margin-left: auto;

			display: flex;
			gap: 5rem;
			align-items: center;

			a {
				position: relative;

				&::after {
					content: '';
					width: 0;
					height: 2px;
					background-color: #fff;
					position: absolute;
					bottom: -5px;
					left: 0;
					transition: width 0.3s ease-in-out;
				}

				&:hover::after,
				&:focus::after,
				&:active::after,
				&:focus-within::after {
					width: 100%;
				}
			}
		}
	}

	.hamBut {
		display: none;
		flex-direction: column;
		gap: 5px;

		.hamLine {
			width: 30px;
			height: 3px;
			background-color: #fff;

			transform-origin: 0% 50%;
			transition: all 0.3s ease-in-out;

			&:nth-child(1):global(.active) {
				transform: translateY(-3px) rotate(45deg);
			}
			&:nth-child(3):global(.active) {
				transform: translateY(3px) rotate(-45deg);
			}
		}

		.hamLine:nth-child(2) {
			width: 20px;
			&:global(.active) {
				width: 0;
			}
		}

		@media screen and (max-width: 768px) {
			display: flex;
		}
	}

	.hamMenu {
		position: fixed;
		top: 0;
		right: 0;
		width: 100vw;
		height: 100vh;

		z-index: -1;
		opacity: 0.94;

		background-color: var(--secondary-black);

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2rem;

		transform: translateX(100%);
		transition: transform 0.3s ease-in-out;

		a {
			font-size: 2rem;
			color: var(-primary-white);
		}
		&:global(.active) {
			transform: translateX(0);
		}
	}

	@media screen and (max-width: 768px) {
		.links a {
			display: none !important;
		}
	}
</style>
