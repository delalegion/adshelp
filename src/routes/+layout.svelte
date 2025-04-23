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


{#key key}
    <div in:fly={{ y: -50, opacity: 0 }}>
        <!-- Navbar section -->
        <Navbar />

        {@render children()}
    </div>
{/key}
