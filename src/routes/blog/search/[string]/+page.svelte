<script lang="ts">
    import { goto } from '$app/navigation';
    import ArticleCard from '$lib/components/blog/ArticleCard.svelte';
    import NoArticles from '$lib/components/blog/NoArticles.svelte';
    import type { PageData } from './$types';
    import { page as parametrs } from '$app/state';
    import SvelteSeo from 'svelte-seo';

    let { data }: { data: PageData } = $props();
    let articles = $state(data.articles.data);
    let error = $state(data.error);

    // Pagination
    let total = data.articles.meta.pagination.pageCount;
    let page = $state(data.articles.meta.pagination.page);
    let array = $state(Array(data.articles.meta.pagination.pageCount));
    let paginationUrl = $state(`/blog/search/${parametrs.params.string}/`);

    $effect(() => {
        articles = data.articles.data;
        error = data.error;
        page = data.articles.meta.pagination.page;
    })
</script>

<svelte:head>
    <meta property="og:url" content="https://adshelp.pl/blog/search/{parametrs.params.string}">
    <meta property="url" content="https://adshelp.pl/blog/search/{parametrs.params.string}">
    <meta name="author" content="Adshelp.pl">
    <meta name="language" content="Polish">
    <meta name="dcterms.description" lang="pl" content="Kompleksowe źródło wiedzy o strategiach marketingowych Allegro Ads, optymalizacji kampanii i sukcesie w reklamie online na największej polskiej platformie e-commerce.">
    <meta name="dcterms.subject" lang="pl" content="Blog o Allegro Ads; Blog Allegro; Blog Allegro Ads; Blog Marketingowy; marketingowy blog; Marketing Allegro Ads; google ads; pomoc allegro, kampanie ads allegro, sprzedaż Allegro, reklamy online; kampanie reklamowe; wzrost sprzedaży; marketing e-commerce; agencja reklamowa; optymalizacja kampanii; PPC; digital marketing">
    <meta name="application-name" content="Adshelp - Agencja Allegro Ads">
    <link rel="index" title="Strona główna" href="https://adshelp.pl">

    <script type="application/ld+json">
      {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "additionalType": "https://schema.org/ProfessionalService",
          "termsOfService": "https://www.adshelp.pl/polityka-prywatnosci",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://adshelp.pl/",
              "name": "Adshelp.pl",
              "url": "https://adshelp.pl",
              "logo": {
                "@type": "ImageObject",
                "url": "https://adshelp.pl/logo.png"
              },
              "vatID": "PL7952519865",
              "email": "kontakt@adshelp.pl",
              "description": "Eksperci od Allegro Ads i reklam online. Zwiększ sprzedaż swojej firmy dzięki skutecznym kampaniom reklamowym | Adshelp.pl",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+48-729-924-002",
                "contactType": "customer service",
                "availableLanguage": ["Polish"]
              },
              "sameAs": [
                "https://www.facebook.com/adshelp.pl",
                "https://www.instagram.com/adshelp.pl",
                "https://x.com/adshelp_pl"
              ],
              "foundingDate": "2024",
              "numberOfEmployees": "1-10",
              "areaServed": {
                "@type": "Country",
                "name": "Poland"
              }
            },
            {
              "@type": "Blog",
              "@id": "https://adshelp.pl/blog/",
              "url": "https://adshelp.pl/blog/",
              "name": "Adshelp.pl Marketing Blog",
              "description": "Blog o Allegro Ads - Strategie Marketingowe i Trendy Reklamowe | Adshelp.pl",
              "publisher": {
                "@id": "https://adshelp.pl/#about"
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://adshelp.pl/blog"
              }
            }
        ]
      }
      </script>

</svelte:head>

<SvelteSeo
  title="Jak Zdominować Sprzedaż Online z Allegro Ads – Skuteczne Strategie"
  description="Artykuły o Allegro Ads - sprawdzone strategie marketingowe, trendy reklamowe i wskazówki optymalizacji. Dowiedz się, jak zwiększyć sprzedaż dzięki skutecznym kampaniom reklamowym."
  canonical="https://adshelp.pl/blog/search/{parametrs.params.string}"
  keywords="allegro ads blog, allegro ads, blog marketingowy, blog allegro ads, allegro ads partner, google ads pomoc, help google ads, marketing Allegro, reklama online, marketing e-commerce, allegro ads jak ustawić, ads allegro, kampanie ads allegro, reklamy allegro, kampanie allegro, wzrost sprzedaży, agencja reklamowa, allegro advertising, ppc allegro, optymalizacja allegro, marketing allegro, zwiększenie sprzedaży"
  openGraph={{
    title: "Blog o Allegro Ads - Strategie Marketingowe i Trendy Reklamowe | Adshelp.pl",
    description:
      "Artykuły o Allegro Ads - sprawdzone strategie marketingowe, trendy reklamowe i wskazówki optymalizacji. Dowiedz się, jak zwiększyć sprzedaż dzięki skutecznym kampaniom reklamowym.",
    image: "https://www.adshelp.pl/og-image.jpg",
    url: "https://adshelp.pl/blog/search/"+parametrs.params.string,
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
    title: "Blog o Allegro Ads - Strategie Marketingowe i Trendy Reklamowe | Adshelp.pl",
    description:
      "Artykuły o Allegro Ads - sprawdzone strategie marketingowe, trendy reklamowe i wskazówki optymalizacji. Dowiedz się, jak zwiększyć sprzedaż dzięki skutecznym kampaniom reklamowym.",
    image: "https://www.adshelp.pl/og-image.jpg",
  }}
/>

<section id="articles" class="py-6 min-[540px]:py-12 md:py-18 px-4 md:px-8 flex justify-center bg-white min-h-screen">
  <div class="max-w-7xl w-full">
      
      {#if error}
          <p>Error loading articles: {error}</p>
      {:else if articles.length === 0}
          <NoArticles />
      {:else}
          <ArticleCard data={articles} />   
      {/if}

      {#if total > 1}
          <div class="mt-16 md:mt-32 md:mb-12 flex justify-center" itemscope itemtype="https://schema.org/ItemList">
            <meta itemprop="name" content="Blog Pagination" />
            <meta itemprop="numberOfItems" content="{total}" />
            <meta itemprop="itemListOrder" content="Ascending" />

              <div class="flex flex-row gap-2">
                  {#if page !== 1}
                      <div onclick={() => goto(`${paginationUrl}${page-1}`, { noScroll: true })} onkeydown={() => goto(`${paginationUrl}${page-1}`, { noScroll: true })} role="button" tabindex="0" class="w-[52px] h-[52px] rounded-full flex justify-center items-center text-lg-bold font-display bg-primary-50 hover:bg-primary-100 transition-all transition-300 active:scale-96 hover:cursor-pointer">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M19 12L5 12" stroke="#410F09" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M12 19L5 12L12 5" stroke="#410F09" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>                                              
                      </div>
                  {/if}
                  {#each array as _, i}
                    <div 
                      onclick={() => goto(`${paginationUrl}${i + 1}`, { noScroll: true })} 
                      onkeydown={() => goto(`${paginationUrl}${i + 1}`, { noScroll: true })} 
                      role="button" tabindex="0" 
                      aria-label="Go to page {i + 1}"
                      class="{page === i+1 ? 'bg-primary-950 text-primary-100 hover:bg-primary-900' : 'bg-primary-50 text-primary-950 hover:bg-primary-100'} w-[52px] h-[52px] rounded-full flex justify-center items-center text-lg-bold font-display  transition-all transition-300 active:scale-96 hover:cursor-pointer"
                      itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                      <meta itemprop="position" content="{i + 1}" />
                      <meta itemprop="url" content="{paginationUrl}{i + 1}" />
                      {i + 1}
                    </div>
                  {/each}
                  {#if total > page}
                      <div onclick={() => goto(`${paginationUrl}${page+1}`, { noScroll: true })} onkeydown={() => goto(`${paginationUrl}${page+1}`, { noScroll: true })} role="button" tabindex="0" class="w-[52px] h-[52px] rounded-full flex justify-center items-center text-lg-bold font-display bg-primary-50 hover:bg-primary-100 transition-all transition-300 active:scale-96 hover:cursor-pointer">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5 12H19" stroke="#410F09" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M12 5L19 12L12 19" stroke="#410F09" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>                        
                      </div>
                  {/if}
              </div>
          </div>
      {/if}

  </div>
</section>