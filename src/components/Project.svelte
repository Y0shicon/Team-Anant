<script>
	export let project;

    // import portfolio from '/projects/portfolio.png';
    // import restaurant from '/projects/restaurant.png';
    // import social from '/projects/social-media.png';
</script>

<div class="project" style="background-image: url({project.image});"></div>

<style lang="scss">
	.project {
		width: 300px;
		aspect-ratio: 1.27;

        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

		border-radius: 10px;

		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);

		transition: all 0.3s ease-in-out;

		&:hover {
			transform: scale(1.1);
		}
	}
</style>
