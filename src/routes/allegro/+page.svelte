<script>
    import SvelteSeo from 'svelte-seo';

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
    <meta property="og:url" content="https://adshelp.pl/">
    <meta property="url" content="https://adshelp.pl/">
    <meta name="author" content="Adshelp.pl">
    <meta name="language" content="Polish">
    <meta name="dcterms.description" lang="pl" content="Eksperci od Allegro Ads i reklam online. Zwiększ sprzedaż swojej firmy dzięki skutecznym kampaniom reklamowym. Sprawdzone strategie wzrostu sprzedaży. Darmowy miesiąc współpracy.">
    <meta name="dcterms.subject" lang="pl" content="Allegro Ads; google ads; pomoc allegro, kampanie ads allegro, sprzedaż Allegro, reklamy online; kampanie reklamowe; wzrost sprzedaży; marketing e-commerce; agencja reklamowa; optymalizacja kampanii; PPC; digital marketing">
    <meta name="application-name" content="Adshelp - Agencja Allegro Ads">
    <link rel="index" title="Strona główna" href="https://adshelp.pl">

    <script src="./js/lazysizes.min.js" defer async=""></script>
    <script src="./js/ls.unveilhooks.min.js" defer async=""></script>
    
</svelte:head>

<SvelteSeo
    noindex={true}
    nofollow={true}
  title="Zwiększ swoją sprzedaż dzięki Allegro Ads | Adshelp.pl"
  description="Profesjonalne zarządzanie reklamami Allegro Ads i Google Ads. Dowiedz się jak optymalizować Allegro Ads, aby zwiększyć sprzedaż i widoczność. Bezpłatny pierwszy miesiąc!"
  canonical="https://adshelp.pl/"
  keywords="allegro ads, allegro ads partner, google ads pomoc, help google ads, allegro ads jak ustawić, ads allegro, kampanie ads allegro, reklamy allegro, kampanie allegro, wzrost sprzedaży, agencja reklamowa, allegro advertising, ppc allegro, optymalizacja allegro, marketing allegro, zwiększenie sprzedaży"
  openGraph={{
    title: "Optymalizacja Kampanii Allegro Ads - Zwiększ Sprzedaż Firmy | AdsHelp.pl",
    description:
      "Profesjonalne zarządzanie reklamami Allegro Ads. Bezpłatny pierwszy miesiąc współpracy!",
    image: "https://www.adshelp.pl/og-image.jpg",
    url: "https://adshelp.pl/",
    type: "website",
    images: [
      {
        url: "https://www.adshelp.pl/_app/immutable/assets/header-animation-poster.n-3Nb43m.avif",
        width: 397,
        height: 218,
        alt: "Heading image",
      },
    ],
    videos: [
        {
          url: 'https://www.adshelp.pl/_app/immutable/assets/header-animation.Bp_YXNtx.webm',
          width: 920,
          height: 690,
          secureUrl: 'https://www.adshelp.pl/_app/immutable/assets/header-animation.Bp_YXNtx.webm',
          type: 'video/webm'
        }
    ],
    site_name: "AdsHelp",
  }}
  twitter={{
    card: "summary_large_image",
    site: "@adshelp_pl",
    title: "Zwiększ sprzedaż na Allegro! Skuteczne reklamy na Allegro | Adshelp",
    description:
      "Profesjonalne zarządzanie reklamami Allegro Ads i Google Ads. Dowiedz się jak optymalizować Allegro Ads, aby zwiększyć sprzedaż i widoczność. Bezpłatny pierwszy miesiąc!",
    image: "https://www.adshelp.pl/og-image.jpg",
  }}
/>

<main id="main" class="hfeed" property="mainEntityOfPage" tabindex="-1">

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

</main>

<!-- Footer section -->
<Footer />
