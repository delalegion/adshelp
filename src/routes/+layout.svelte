<script lang="ts">
    import Navbar from '$lib/components/sections/navbar/Navbar.svelte';
    import CookieConsent from '$lib/components/Cookies.svelte';
    import { page } from '$app/state';

    import '../app.css';

	let { children } = $props();

    let key = $state('');
    
    $effect(() => {
        key = page.url.pathname;
    });
</script>

<!-- Navbar section -->
<Navbar />

<!-- Cookie consent popup -->
<CookieConsent 
  cookieName="adshelp-site-cookie-consent"
  position="bottom"
  backgroundColor="#ffffff"
  textColor="#410F09"
  buttonColor="#E44412"
  buttonTextColor="#ffffff"
  declineButtonColor="#410F09"
/>

{@render children()}
