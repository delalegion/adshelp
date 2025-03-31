<script lang="ts">
    import Navbar from '$lib/components/sections/navbar/Navbar.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<!-- Navbar section -->
<Navbar />

{@render children()}
