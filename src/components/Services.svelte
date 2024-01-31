<script lang="ts">

</script>

<section id="service">
    <h1 class="title">SERVICES I OFFER</h1>
</section>

<style lang="scss">
    #service{
        width: 100%;
        height: fit-content;

        padding: 0 5%;

        display: flex;
        flex-direction: column;
        gap: 50px;

        justify-content: center;
        align-items: center;

        margin-block: 50px;

        .title{
            width: fit-content;
            height: fit-content;

            font-size: 2.5rem;
            font-weight: 700;
            color: var(--primary-orange);

            text-align: center;

            position: relative;

            &::after{
                content: "";
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
</style>