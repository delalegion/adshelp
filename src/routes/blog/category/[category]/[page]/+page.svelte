<script lang="ts">
    import { categoryMenuActive, entriesData } from '$lib/stores/blogStore.js';
    import type { PageData } from './$types';
    let { data }: { data: PageData } = $props();

    // Components
    import ArticleSection from '$lib/components/blog/ArticleSection.svelte';
    import { onMount } from 'svelte';
    import { page } from '$app/state';
    
    onMount(() => {
        let entriesDataObject = Object.keys($entriesData);
        
        entriesDataObject.forEach(function (element, i) {
            if (element === data.category) {
                categoryMenuActive.set(i+1);
            }
        });
    })
</script>

<svelte:head>

    <meta property="url" content="https://adshelp.pl/">
    <meta name="description" content="Blog o marketingu Adshelp.pl">
    <meta name="dcterms.description" lang="pl" content="Dowiedz się jak skutecznie rozwinąc biznes na Allegro dzięki naszemu blogu">
    <meta name="keywords" content="Blog o reklamach Blog o wiedzy na temat marketignu Blog o marketingu Wiedza o marketingu Blog o psychologii w marketingu Blog o strategiach Blog o trendach w marketignu Reklamy na allegro Skuteczne reklamy na Allegro Skuteczne kampanie Allegro Skuteczne reklamy Allegro Ads dla Twojego e-commerce Reklamy e-commerce dla Twojego konta firmowego na Allegro">
    <meta name="dcterms.subject" lang="pl" content="Blog o reklamach; Blog o wiedzy na temat marketignu; Blog o marketingu; Wiedza o marketingu; Blog o psychologii w marketingu; Blog o strategiach; Blog o trendach w marketignu; Reklamy na Allegro Ads; Skuteczne reklamy na Allegro Ads; Skuteczne kampanie reklamowe Allegro Ads; Adshelp skuteczna firma pomagająca rozwinąć biznes na Allegro; Jak rozwinąc biznes na Allegro Ads; Reklamy e-commerce dla twojego binzesu na Allegro; Nadzorowoanie reklam Allegro Ads przez profesjonalną firmę; Profesjonalna firma zajmująca się reklamami Allegro Ads">
    <meta name="application-name" content="Blog o kampaniach, reklamach, trendach w marketignu Allegro Ads Adshelp">
    <meta name="msapplication-tooltip" content="Adshelp - Blog o skutecznych kampaniach Allegro Ads">
    <meta name="msapplication-starturl" content="http://adshelp.pl">
    <meta name="msapplication-window" content="width=1024;height=768">
    <meta property="og:site_name" content="Adshelp.pl - Skuteczny blog o kampaniach Allegro ads dla Twojego e-commerce">
    <meta property="og:url" content="https://adshelp.pl/{page.url.pathname}">
    <meta property="og:title" content="Blog o Allegro Ads | Adshelp.pl - Pomagamy rozwinąć Twój biznes na Allegro">
    <meta property="og:image" content="https://adshelp.pl/og-image.png">

    <link rel="index" title="Strona główna" href="https://adshelp.pl">
    <link rel="canonical" href="https://adshelp.pl/">
    <link rel="icon" href="https://adshelp.pl/favicon.png" type="image/png">
    <link rel="apple-touch-icon" href="https://example.net/images/apple-touch-icon.png">

    <title>Nowoczesny blog dostarczający wiedzy o marketingu, która pomoże rozwinąć Twój biznes.</title>

</svelte:head>

<ArticleSection type={data.category} data={data.posts.data} page={data.posts.meta.pagination.page} total={data.posts.meta.pagination.pageCount} array={Array(data.posts.meta.pagination.pageCount)} />