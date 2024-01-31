<script>
	import Client from '$components/Client.svelte';
	import { data } from './clients.js';

	let index = 0;

	// Controls for the carousel
	const handleLeftBtn = () => {
		const clientList = document.querySelector('.clientList');
		if (index > 0) {
			index--;
			clientList.style.transform = `translateX(calc(-${index * 100}% - ${index * 60}px))`;
		}
	};

	const handleRightBtn = () => {
		const clientList = document.querySelector('.clientList');
		if (index < data.length - 1) {
			index++;
			clientList.style.transform = `translateX(calc(-${index * 100}% - ${index * 60}px))`;
		}
	};
</script>

<section id="clients">
	<h1 class="title">MY CLIENTS</h1>
	<div class="clientContainer">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="61"
			height="36"
			viewBox="0 0 61 36"
			fill="none"
			class="leftBtn"
			on:click={handleLeftBtn}
			on:keydown={handleLeftBtn}
			role="button"
			tabindex="0"
		>
			<path
				d="M18.7964 24.3994H59.3282C60.2178 24.3994 60.9391 23.5382 60.9391 22.4761V13.5006C60.9391 12.4385 60.2178 11.5773 59.3282 11.5773H18.7964V4.1952C18.7964 0.768184 15.3262 -0.948047 13.2966 1.47516L1.74421 15.2683C0.486 16.7706 0.486 19.2061 1.74421 20.7082L13.2966 34.5014C15.3261 36.9246 18.7964 35.2084 18.7964 31.7814V24.3994Z"
				fill="white"
				fill-opacity="0.7"
			/>
		</svg>
		<div class="clientsWrapper">
			<div class="clientList">
				{#each data as client (client.id)}
					<Client {client} />
				{/each}
			</div>
		</div>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="61"
			height="37"
			viewBox="0 0 61 37"
			fill="none"
			class="rightBtn"
			on:click={handleRightBtn}
			role="button"
			tabindex="0"
			on:keydown={handleRightBtn}
		>
			<path
				d="M42.9602 12.2242L2.42835 12.2242C1.53876 12.2242 0.817503 13.0853 0.817503 14.1475L0.817504 23.1229C0.817504 24.185 1.53876 25.0462 2.42836 25.0462L42.9602 25.0462L42.9602 32.4283C42.9602 35.8554 46.4304 37.5716 48.46 35.1484L60.0124 21.3552C61.2706 19.8529 61.2706 17.4174 60.0124 15.9153L48.46 2.12214C46.4305 -0.301066 42.9602 1.41516 42.9602 4.84218L42.9602 12.2242Z"
				fill="white"
				fill-opacity="0.7"
			/>
		</svg>
	</div>
</section>

<style lang="scss">
	#clients {
		width: 100%;
		height: fit-content;

		display: flex;
		flex-direction: column;
		gap: 60px;

		justify-content: center;
		align-items: center;

		padding: 0 5%;
	}

	.clientContainer {
		width: 100%;
		height: fit-content;

		display: flex;
		justify-content: center;
		align-items: center;

		gap: 60px;

        svg {
            cursor: pointer;

            &:hover , &:focus, &:active, &:focus-visible {
                outline: none;
                path{
                    fill-opacity: 1;
                }
            }
        }

        @media screen and (max-width: 768px){
            gap: 30px;
		}
	}

	.clientsWrapper {
		width: 70%;
		height: fit-content;

		display: flex;
		justify-content: center;
		align-items: center;

		overflow: hidden;

        @media screen and (max-width: 768px){
            width: 100%;
		}
	}

	.clientList {
		width: 100%;
		height: fit-content;

		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;

		gap: 60px;

		transition: transform 0.5s ease-in-out;
	}
</style>
