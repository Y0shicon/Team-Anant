<script>
    /** @type {import('./$types').LayoutData} */
    export let data;

    import Navbar from './Navbar.svelte';
</script>

<Navbar/>
<slot/>

<style lang="scss">
    @import 'src/global.scss';
</style>