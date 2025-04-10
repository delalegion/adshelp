<script lang="ts">
    import Navbar from '$lib/components/sections/navbar/Navbar.svelte';
    import { onMount } from 'svelte';
	import '../app.css';
    import { afterNavigate, beforeNavigate } from '$app/navigation';
	let { children } = $props();
</script>

<!-- Navbar section -->
<Navbar />

{@render children()}
