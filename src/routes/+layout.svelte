<script lang="ts">
    import Navbar from '$lib/components/sections/navbar/Navbar.svelte';
    import { onMount } from 'svelte';
	import '../app.css';
    import { fade, fly } from 'svelte/transition';
    import { page } from '$app/state';
	let { children } = $props();

    let key = $state('');
    
    $effect(() => {
        key = page.url.pathname;
    });
</script>



        <!-- Navbar section -->
        <Navbar />

        {@render children()}
