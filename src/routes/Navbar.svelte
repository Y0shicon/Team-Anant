<script>
	import logo from '$assets/logo.png';
	import { onMount } from 'svelte';

	onMount(() => {
		const hamBut = document.querySelector('.hamBut');
		const hamLines = document.querySelectorAll('.hamLine');
		const hamMenu = document.querySelector('.hamMenu');

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
	<div class="logo">
		<img src={logo} alt="Logo" />
	</div>
	<div class="links">
		<a href="/">Home</a>
		<a href="/">About</a>
		<a href="/">Services</a>
		<a href="/">Contact</a>
		<button class="hamBut">
			<div class="hamLine"></div>
			<div class="hamLine"></div>
			<div class="hamLine"></div>
		</button>
	</div>
	<div class="hamMenu">
		<a href="/">Home</a>
		<a href="/">About</a>
		<a href="/">Services</a>
		<a href="/">Contact</a>
	</div>
</nav>

<style lang="scss">
	.navbar {
		display: flex;
		color: #fff;
		padding: 5px 5%;

		width: 100%;
		height: 120px;

		position: fixed;
		top: 0;

		transition: all 0.3s ease-in-out;

		&:global(.scrollActive) {
			background-color: var(--secondary-orange);
			height: 90px;
		}

		.logo {
			margin-right: auto;

			img {
				height: 100%;
				aspect-ratio: 1/1;
				object-fit: contain;

				transition: transform 0.3s ease-in-out;
			}

			&:hover {
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

				&:hover::after {
					width: 100%;
				}
				@media screen and (max-width: 768px) {
					display: none;
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
		width: 60vw;
		height: 100vh;

		z-index: -1;

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

	@media screen and (max-width: 1400px) {
	}
</style>
