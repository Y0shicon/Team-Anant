<script>
	import { fade, slideIn, scale } from '$utils/useViewport.js';
	export let project;

	import portfolio from '$assets/projects/portfolio.png';
	import restaurant from '$assets/projects/restaurant.png';
	import social from '$assets/projects/social-media.png';

	if (project.image === 'portfolio.png') {
		project.image = portfolio;
	} else if (project.image === 'restaurant.png') {
		project.image = restaurant;
	} else if (project.image === 'social-media.png') {
		project.image = social;
	}

</script>

<div use:scale class="project" style="background-image: url({project.image});"></div>

<style lang="scss">
	.project {
		position: relative;

		width: 300px;
		aspect-ratio: 1.27;

		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;

		border-radius: 10px;

		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);

		transition: all 0.3s ease-in-out;

		&:hover, &:focus, &:active, &:focus-within{
			transform: scale(1.1);
			cursor: pointer;
			&::before {
				opacity: 1;
			}
			&::after {
				opacity: 1;
			}
		}

		&::before {
			content: '';
			width: 100%;
			height: 100%;

			background-color: rgba(0, 0, 0, 0.5);

			border-radius: 10px;

			position: absolute;
			top: 0;
			left: 0;

			opacity: 0;

			transition: all 0.3s ease-in-out;

			background-image: url('$assets/projects/search.png');
			background-size: 20%;
			background-position: 50% 40%;
			background-repeat: no-repeat;
		}

		&::after {
			content: 'Know More';

			display: flex;
			align-items: center;
			justify-content: center;

			color: white;

			position: absolute;
			top: 60%;
			left: 50%;
			transform: translate(-50%, 0);

			opacity: 0;

			transition: all 0.3s ease-in-out;
		}
	}
</style>
