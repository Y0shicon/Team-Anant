<script>
	import '../global.scss';
	import Navbar from '$components/Navbar.svelte';
	import CustomCursor from '$components/CustomCursor.svelte';
</script>

<Navbar />
<slot />
<CustomCursor />

<svelte:head>
	<title>Team Anant PSD</title>
</svelte:head>

<style lang="scss">
</style>
