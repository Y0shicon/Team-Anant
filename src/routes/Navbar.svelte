<script>
	import logo from '$assets/logo.png';
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
	</div>
</nav>

<style lang="scss">
	.navbar {
		display: flex;
		color: #fff;
		padding: 1rem;

		padding-inline: 5%;

		width: 100%;
		height: 120px;

		position: absolute;
		top: 0;

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
			}
		}
	}
</style>
