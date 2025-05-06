<script>
    // Scroll
    import { smoothScroll } from '$lib/scroll.js';

    // Components
    import Header from '$lib/components/sections/header/Header.svelte';
    import Navbar from '$lib/components/sections/navbar/Navbar.svelte';
    import Facts from '$lib/components/sections/facts/Facts.svelte';
    import Services from '$lib/components/sections/services/Services.svelte';
    import About from '$lib/components/sections/about/About.svelte';
    import Steps from '$lib/components/sections/steps/Steps.svelte';
    import Consulting from '$lib/components/sections/consulting/Consulting.svelte';
    import Contact from '$lib/components/sections/contact/Contact.svelte';
    import Footer from '$lib/components/sections/footer/Footer.svelte';
    import Journey from '$lib/components/sections/journey/Journey.svelte';

    let { form } = $props();
 
</script>

<svelte:head>

    <meta property="url" content="https://adshelp.pl/allegro">
    <meta name="description" content="Skuteczne kampanie Allegro ads dla Twojego e-commerce">
    <meta name="dcterms.description" lang="pl" content="Skuteczne reklamy dla Twojej firmy na Allegro">
    <meta name="keywords" content="Reklamy na allegro Skuteczne reklamy na Allegro Skuteczne kampanie Allegro Skuteczne reklamy Allegro Ads dla Twojego e-commerce Reklamy e-commerce dla Twojego konta firmowego na Allegro">
    <meta name="dcterms.subject" lang="pl" content="Reklamy na Allegro Ads; Skuteczne reklamy na Allegro Ads; Skuteczne kampanie reklamowe Allegro Ads; Adshelp skuteczna firma pomagająca rozwinąć biznes na Allegro; Jak rozwinąc biznes na Allegro Ads; Reklamy e-commerce dla twojego binzesu na Allegro; Nadzorowoanie reklam Allegro Ads przez profesjonalną firmę; Profesjonalna firma zajmująca się reklamami Allegro Ads">
    <meta name="application-name" content="Kampanie Allegro Ads dla Twojego biznesu">
    <meta name="msapplication-tooltip" content="Adshelp - Skuteczne kampanie Allegro Ads">
    <meta name="msapplication-starturl" content="http://adshelp.pl/">
    <meta name="msapplication-window" content="width=1024;height=768">
    <meta property="og:site_name" content="Adshelp.pl - Skuteczne kampanie Allegro ads dla Twojego e-commerce">
    <meta property="og:url" content="https://adshelp.pl/allegro">
    <meta property="og:title" content="Adshelp.pl - Pomagamy rozwinąć Twój biznes na Allegro">
    <meta property="og:image" content="https://adshelp.pl/og-image.jpg">
    <meta property=”og:locale” content=”pl_PL” />
    <meta property="og:description" content="Skuteczne kampanie Allegro ads dla Twojego e-commerce" />

    <link rel="index" title="Strona główna" href="https://adshelp.pl">
    <link rel="canonical" href="https://adshelp.pl/">
    <link rel="icon" href="https://adshelp.pl/favicon.png" type="image/png">
    <link rel="apple-touch-icon" href="https://example.net/images/apple-touch-icon.png">

    <title>Skuteczne kampanie Allegro Ads | Adshelp.pl - Pomożemy rozwinąć biznes na Allegro</title>

</svelte:head>

<!-- Header section -->
<Header />

<!-- Facts section -->
<Facts />

<!-- Services section -->
<Services />

<!-- About section -->
<About />

<!-- Steps section -->
<Steps />

<!-- Consulting section -->
<Consulting />

<!-- Journey section -->
<Journey />

<!-- Contact section -->
<Contact {form} />

<!-- Footer section -->
<Footer />
