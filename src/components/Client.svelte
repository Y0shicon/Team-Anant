<script>
	export let client;

	import image from "$assets/person.png"
</script>

<div class="clientWrapper">
	<img src={image} alt={client.name} />
	<article class="info">
		<p class="description">{client.description}</p>
		<p class="name">{client.name}</p>
	</article>

</div>

<style lang="scss">
	.clientWrapper {
		width: 100%;
		height: fit-content;

		display: flex;
		justify-content: space-evenly;
		align-items: center;

		flex-shrink: 0;
		gap: 2rem;
		padding: 2rem;

		img{
			width: max(25%, 200px);
			height: 30%;
			object-fit: contain;
			border-radius: 10px;
		}

		@media screen and (max-width: 768px){
			flex-direction: column;
			padding: 0;
		}
	}

	article{
		width: 100%;
		height: fit-content;

		display: flex;
		flex-direction: column;
		gap: 1rem;

		.description{
			font-size: 1.2rem;
			font-weight: 400;
			color: var(--primary-white);

			@media screen and (max-width: 768px){
				text-align: center;
			}
		}

		.name{
			font-size: 1.2rem;
			font-weight: 600;
			color: var(--primary-orange);

			width: 100%;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			gap: 1rem;

			&::before{
				content: "";
				width: clamp(100px, 40%, 300px);
				height: 2px;
				background-color: var(--primary-orange);
			}

			@media screen and (max-width: 768px){
				justify-content: center;
			}
		}

	}
</style>
