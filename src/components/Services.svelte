<script>
    // Adding carouse functionality to the left and right button
    import { onMount } from 'svelte';

    let index = 1;
    let translate = 0;

    onMount(() => {
        const leftBtn = document.querySelector('.leftBtn');
        const rightBtn = document.querySelector('.rightBtn');

        rightBtn.addEventListener('click', () => {
            if (index > 0) {
                index--;
                translate -= 36;
                document.querySelector('.translator').style.transform = `translateX(${translate}%)`;
            }
        });

        leftBtn.addEventListener('click', () => {
            if (index < 2) {
                index++;
                translate += 36;
                document.querySelector('.translator').style.transform = `translateX(${translate}%)`;
            }
        });
    });
</script>

<section id="serviceWrapper">
	<h1 class="title">SERVICES I OFFER</h1>
	<div class="container">
		<div class="translator">
			<div class="service">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="97"
					height="98"
					viewBox="0 0 97 98"
					fill="none"
				>
					<path
						d="M32.103 59.0768C24.5647 59.5616 17.7235 62.4326 13.8417 72.6614C13.4001 73.8282 12.3385 74.5366 11.1003 74.5366C9.01285 74.5366 2.55874 69.3376 0.719269 68.0825C0.721148 83.5554 7.84791 97.1551 24.7714 97.1551C39.0249 97.1551 48.8217 88.931 48.8217 74.5723C48.8217 73.9879 48.6995 73.4299 48.6394 72.8568L32.103 59.0768ZM86.7553 0.954102C83.9068 0.954102 81.2369 2.21486 79.2001 4.04493C40.793 38.3541 36.7965 39.1602 36.7965 49.2594C36.7965 51.8335 37.4072 54.2874 38.4368 56.5308L50.4281 66.523C51.7828 66.8612 53.1789 67.0923 54.635 67.0923C66.3051 67.0923 73.0692 58.5488 94.3104 18.9054C95.6971 16.2091 96.9222 13.2968 96.9222 10.2642C96.9222 4.8322 92.0369 0.954102 86.7553 0.954102Z"
						fill="#FFA588"
					/>
				</svg>
				<h2 class="serviceName">Graphic Designing</h2>
				<span class="serviceDesc"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
			</div>
			<div class="service">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="98"
					height="98"
					viewBox="0 0 98 98"
					fill="none"
				>
					<path
						d="M26.5656 41.7366L11.6342 18.7924C20.937 7.22255 34.8912 0.851323 49.158 0.792692C57.425 0.734061 65.8678 2.84478 73.5485 7.28118C82.0304 12.2062 88.4798 19.281 92.584 27.4111L52.4609 25.3004C41.106 24.6359 30.2984 31.0267 26.5656 41.7366ZM32.9954 49.2609C32.9954 58.2901 40.3047 65.5994 49.3339 65.5994C58.3631 65.5994 65.6724 58.2901 65.6724 49.2609C65.6724 40.2318 58.3631 32.9224 49.3339 32.9224C40.3047 32.9224 32.9954 40.2122 32.9954 49.2609ZM94.5384 31.828L67.2359 33.2351C74.6429 41.893 74.7602 54.3814 68.5258 63.9578L46.6173 97.651C55.7051 98.1396 65.0666 96.1462 73.5485 91.2212C94.5384 79.1041 103.04 53.6973 94.5384 31.828ZM26.9955 58.5637L8.7613 22.7011C3.77767 30.3231 0.865662 39.4696 0.865662 49.2609C0.865662 73.4951 18.6113 93.5664 41.8096 97.1233L54.2589 72.7329C43.0018 74.8436 32.1355 68.6678 26.9955 58.5637Z"
						fill="#FFA588"
					/>
				</svg>
				<h2 class="serviceName">Graphic Designing</h2>
				<span class="serviceDesc"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
			</div>
			<div class="service">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="88"
					height="88"
					viewBox="0 0 88 88"
					fill="none"
				>
					<path
						d="M43.8174 21.5842C31.4247 21.5842 21.4287 31.5801 21.4287 43.9728C21.4287 56.3655 31.4247 66.3615 43.8174 66.3615C56.2101 66.3615 66.206 56.3655 66.206 43.9728C66.206 31.5801 56.2101 21.5842 43.8174 21.5842ZM43.8174 58.5284C35.8089 58.5284 29.2618 52.0008 29.2618 43.9728C29.2618 35.9449 35.7894 29.4173 43.8174 29.4173C51.8453 29.4173 58.3729 35.9449 58.3729 43.9728C58.3729 52.0008 51.8259 58.5284 43.8174 58.5284ZM72.3439 20.6683C72.3439 23.5717 70.0057 25.8904 67.1219 25.8904C64.2185 25.8904 61.8998 23.5522 61.8998 20.6683C61.8998 17.7845 64.238 15.4463 67.1219 15.4463C70.0057 15.4463 72.3439 17.7845 72.3439 20.6683ZM87.1723 25.9684C86.841 18.9731 85.2432 12.7768 80.1186 7.67162C75.0134 2.56646 68.8171 0.968665 61.8218 0.617929C54.6123 0.208737 33.003 0.208737 25.7934 0.617929C18.8177 0.94918 12.6213 2.54698 7.4967 7.65214C2.37205 12.7573 0.793739 18.9536 0.443003 25.9489C0.0338104 33.1585 0.0338104 54.7677 0.443003 61.9773C0.774253 68.9725 2.37205 75.1689 7.4967 80.274C12.6213 85.3792 18.7982 86.977 25.7934 87.3277C33.003 87.7369 54.6123 87.7369 61.8218 87.3277C68.8171 86.9965 75.0134 85.3987 80.1186 80.274C85.2237 75.1689 86.8215 68.9725 87.1723 61.9773C87.5815 54.7677 87.5815 33.1779 87.1723 25.9684ZM77.8583 69.713C76.3384 73.5321 73.3961 76.4744 69.5575 78.0137C63.8093 80.2935 50.1696 79.7674 43.8174 79.7674C37.4652 79.7674 23.8059 80.274 18.0772 78.0137C14.2581 76.4939 11.3158 73.5516 9.77648 69.713C7.4967 63.9648 8.0228 50.325 8.0228 43.9728C8.0228 37.6206 7.51618 23.9614 9.77648 18.2327C11.2963 14.4136 14.2386 11.4713 18.0772 9.93192C23.8254 7.65214 37.4652 8.17824 43.8174 8.17824C50.1696 8.17824 63.8288 7.67162 69.5575 9.93192C73.3766 11.4518 76.3189 14.3941 77.8583 18.2327C80.1381 23.9809 79.612 37.6206 79.612 43.9728C79.612 50.325 80.1381 63.9843 77.8583 69.713Z"
						fill="#FFA588"
					/>
				</svg>
				<h2 class="serviceName">Graphic Designing</h2>
				<span class="serviceDesc"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
			</div>
		</div>
	</div>

		<div class="navigation">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="61"
				height="36"
				viewBox="0 0 61 36"
				fill="none"
                class="leftBtn"
			>
				<path
					d="M18.7964 24.3994H59.3282C60.2178 24.3994 60.9391 23.5382 60.9391 22.4761V13.5006C60.9391 12.4385 60.2178 11.5773 59.3282 11.5773H18.7964V4.1952C18.7964 0.768184 15.3262 -0.948047 13.2966 1.47516L1.74421 15.2683C0.486 16.7706 0.486 19.2061 1.74421 20.7082L13.2966 34.5014C15.3261 36.9246 18.7964 35.2084 18.7964 31.7814V24.3994Z"
					fill="white"
					fill-opacity="0.7"
				/>
			</svg>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="61"
				height="37"
				viewBox="0 0 61 37"
				fill="none"
                class="rightBtn"
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
	#serviceWrapper {
		width: 100%;
		height: fit-content;

		padding: 0 5%;

		display: flex;
		flex-direction: column;
		gap: 60px;

		justify-content: center;
		align-items: center;

		margin-block: 50px;

		.title {
			width: fit-content;
			height: fit-content;

			font-size: 2.5rem;
			font-weight: 700;
			color: var(--primary-orange);

			text-align: center;

			position: relative;

			&::after {
				content: '';
				width: 50%;
				height: 5px;

				background-color: var(--primary-orange);

				position: absolute;
				bottom: -10px;
				left: 50%;
				transform: translateX(-50%);

				border-radius: 2px;
			}
		}
	}

	.container {
		width: 100%;
		height: fit-content;

		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;

		.translator {
			width: fit-content;
			height: fit-content;

			display: flex;
			flex-direction: row;
			gap: 50px;

			justify-content: center;
			align-items: center;

            transition: all 0.5s ease-in-out;

            @media screen and (max-width: 1200px) and (min-width: 1000px) {
                gap: 30px;
            }
		}
	}

	.service {
		height: 300px;
		aspect-ratio: 1/1;

		display: flex;
		flex-direction: column;
		gap: 30px;

		padding: 1.5rem;

		justify-content: center;
		align-items: center;

		border: 2px solid var(--primary-orange);
        border-radius: 10px;

		svg {
			width: 80px;
			height: 80px;
		}
		h2 {
			font-size: 1.2rem;
			font-weight: 600;
			color: var(--primary-orange);
			text-align: center;
		}
		span {
			font-size: 1rem;
			font-weight: 400;
			color: var(--primary-white);

			text-align: center;
		}

		&:nth-child(2) {
			height: 350px;

			@media screen and (max-width: 1200px) {
				height: 300px;
			}
		}

        @media screen and (max-width : 1200px) and (min-width :1000px) {
            height: 250px;
        }
	}

	.navigation {
		width: 100%;
		height: fit-content;

		display: flex;
		flex-direction: row;

		align-items: center;
		justify-content: space-between;

		padding: 0 5%;

        display: none;

        @media screen and (max-width: 1000px) {
            display: flex;
        }
	}
</style>
