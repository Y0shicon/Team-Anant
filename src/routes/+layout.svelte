<script>
    /** @type {import('./$types').LayoutData} */
    // export let data;

    import Navbar from './Navbar.svelte';
</script>

<Navbar/>
<slot/>

<style lang="scss">
    @import '../global.scss';
</style>

<svelte:head>
    <title>Team Anant PSD</title>
</svelte:head>