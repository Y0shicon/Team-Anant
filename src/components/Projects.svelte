<script>
	import { projects } from '$utils/projects';
	import Project from './Project.svelte';

	let tab = 'graphic';
	let data = [];
	$: {
		data = projects.filter((project) => {
			if (project.type === tab) {
				return project.data;
			}
		});
		data = data[0].data;
	}

	const changeTab = (e) => {
		tab = e.target.dataset.tab;
		document.querySelectorAll('.tab').forEach((tab) => {
			tab.classList.remove('active');
		});
		e.target.parentElement.classList.add('active');
		e.target.classList.add('active');
	};
</script>

<section id="projectWrapper">
	<h1 class="title">MY PROJECTS</h1>
	<div class="projectContainer">
		<div class="tabList">
			<button data-tab="graphic" on:click={changeTab} class="tab active"
				><span data-tab="graphic">Graphic Designer</span></button
			>
			<button data-tab="ui/ux" on:click={changeTab} class="tab"
				><span data-tab="ui/ux">UI - UX</span></button
			>
			<button data-tab="socialMedia" on:click={changeTab} class="tab"
				><span data-tab="socialMedia">Social Media</span></button
			>
		</div>
		<div class="mobileSelect">
			<select name="tab" id="tab" bind:value={tab}>
				<option value="graphic">Graphic Designer</option>
				<option value="ui/ux">UI - UX</option>
				<option value="socialMedia">Social Media</option>
			</select>
		</div>
		<div class="projectList">
			{#each data as project (project.id)}
				<Project {project} />
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	#projectWrapper {
		width: 100%;
		height: fit-content;

		padding: 0 5%;

		display: flex;
		flex-direction: column;
		gap: 60px;

		justify-content: center;
		align-items: center;

		margin-block: 150px;

		.projectContainer {
			width: 100%;
			height: fit-content;

			display: flex;
			flex-direction: column;
			gap: 40px;

			justify-content: center;
			align-items: center;

			.tabList {
				width: 100%;
				height: fit-content;

				display: flex;
				flex-direction: row;

				justify-content: space-evenly;
				align-items: center;

				.tab {
					width: 250px;
					height: 40px;

					padding: 0 20px;

					display: grid;
					place-items: center;

					span {
						font-size: 1.5rem;
						font-weight: 400;

						color: var(--primary-white);

						position: relative;

						&::after {
							content: '';
							width: 0;
							height: 2px;

							background-color: var(--primary-white);

							position: absolute;
							bottom: -5px;
							left: 0;

							transition: all 0.3s ease-in-out;
						}
					}
					&:hover {
						cursor: pointer;
					}
					&:hover span::after {
						width: 100%;
					}

					&.active {
						span::after {
							width: 100%;
							background-color: var(--primary-orange);
						}
					}
				}

				@media screen and (max-width: 768px) {
					display: none;
				}
			}
		}
	}

	.projectList {
		width: 90%;
		height: fit-content;

		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 50px;

		justify-content: center;
		align-items: center;
	}

	.mobileSelect {
		display: none;

		@media screen and (max-width: 768px) {
			display: block;
			width: 100%;
			height: fit-content;

			select {
				width: 100%;
				height: 40px;

				padding: 0 20px;

				display: grid;
				place-items: center;

				font-size: 1rem;
				font-weight: 400;

				color: var(--primary-white);

				background-color: var(--primary-black);
				border: 2px solid var(--primary-white);
				border-radius: 10px;
			}
		}
	}
</style>
