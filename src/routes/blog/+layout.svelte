<script lang="ts">
    import { entriesData, activeData, isLoading } from '$lib/stores/blogStore.js';
    import { get } from 'svelte/store';
    import type { LayoutProps } from './$types';
    import { navigating } from '$app/state';

    // Categories
    const entries = Object.entries(get(entriesData));

    // Images
    import phones from '$lib/assets/phones-blog.png?enhanced';
    
    // Components
    import Button from '$lib/components/Button.svelte';
    import ArticleCard from '$lib/components/blog/ArticleCard.svelte';
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    import { goto } from '$app/navigation';
    import Loader from '$lib/components/blog/Loader.svelte';
    import NoArticles from '$lib/components/blog/NoArticles.svelte';
    import Pricing from '$lib/components/sections/pricing/pricing.svelte';
    import Contact from '$lib/components/sections/contact/Contact.svelte';
    import Footer from '$lib/components/sections/footer/Footer.svelte';
    
    let sortActive = $state(false);
	let { children, form }: LayoutProps = $props();

    // Pagination
    let total = $state(0);
    let page = $state(1);
    let array = $state(Array());
    let paginationUrl = $state(`/blog/`);

    onMount(() => {
        document.addEventListener("click", function(e) {
            sortActive = false;
        })
        document.getElementById('blog_search').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                goto('/blog/search/'+document.getElementById('blog_search').value+"#articles")
            }
        });
    })

    $effect(() => {
        total = $activeData.meta.pagination.pageCount;
        page = $activeData.meta.pagination.page;
        array = Array($activeData.meta.pagination.pageCount);
        
        if (navigating) {
            if ($activeData.category === "all") {
                paginationUrl = `/blog/page/`;
            } else {
                paginationUrl = `/blog/category/${$activeData.category}/`;
            }
        }
        console.log("zmiana")
    })
    
</script>

<svelte:head>

    <meta property="url" content="https://adshelp.pl/">
    <meta name="description" content="Nowoczesny blog dostarczający wiedzy o strategiach, trendach i psychologii w marketingu, która pomoże rozwinąć Twój biznes.">
    <meta name="dcterms.description" lang="pl" content="Skuteczny blog dla Twojej firmy na Allegro">
    <meta name="keywords" content="Reklamy na allegro Skuteczne reklamy na Allegro Skuteczne kampanie Allegro Skuteczne reklamy Allegro Ads dla Twojego e-commerce Reklamy e-commerce dla Twojego konta firmowego na Allegro">
    <meta name="dcterms.subject" lang="pl" content="Blog o marketingu; Blog; Blog o allegro; Blog o Google; Adshelp i Google; Blog o biznesie; Reklamy na Allegro Ads; Skuteczne reklamy na Allegro Ads; Skuteczne kampanie reklamowe Allegro Ads; Adshelp skuteczna firma pomagająca rozwinąć biznes na Allegro; Jak rozwinąc biznes na Allegro Ads; Reklamy e-commerce dla twojego binzesu na Allegro; Nadzorowoanie reklam Allegro Ads przez profesjonalną firmę; Profesjonalna firma zajmująca się reklamami Allegro Ads">
    <meta name="application-name" content="Nowoczesny blog o stretegiach, trendach i marketingu Allegro">
    <meta name="msapplication-tooltip" content="Adshelp - Nowoczesny blog o marketingu">
    <meta name="msapplication-starturl" content="http://adshelp.pl">
    <meta name="msapplication-window" content="width=1024;height=768">
    <meta property="og:site_name" content="ODKRYJ ŚWIAT MARKETINGU! - Nowoczesny blog o strategiach, trendach i marketingu">
    <meta property="og:url" content="https://adshelp.pl">
    <meta property="og:title" content="Blog Adshelp.pl - ODKRYJ ŚWIAT MARKETINGU!">
    <meta property="og:image" content="https://adshelp.pl/og-image.jpg">
    <meta property=”og:locale” content=”pl_PL” />
    <meta property="og:description" content="Skuteczne kampanie Allegro ads dla Twojego e-commerce" />
    <meta property=”og:type” content=”website” />

    <link rel="index" title="Strona główna" href="https://adshelp.pl">
    <link rel="canonical" href="https://adshelp.pl/">
    <link rel="icon" href="https://adshelp.pl/favicon.png" type="image/png">
    <link rel="apple-touch-icon" href="https://example.net/images/apple-touch-icon.png">

    <title>Blog Adshelp.pl - ODKRYJ ŚWIAT MARKETINGU!</title>

</svelte:head>

<header id="header" class="bg-primary-950 bg-[url('/src/lib/assets/bg-blog.png')] bg-no-repeat bg-center relative">
    <div class="flex justify-center">
        <div class="container px-6 pt-6 xs:pt-8 sm:pt-12">
            <div class="grid grid-cols-4">
                <div class="col-span-4">
                    <div class="flex flex-col gap-4 md:gap-8 text-center justify-center">
                        <h1 class="text-4xl-bold min-[375px]:text-5xl-bold text-center sm:text-6xl-bold md:text-7xl-bold lg:text-8xl-bold font-display text-primary-500">
                            ODKRYJ ŚWIAT<br />
                            MARKETINGU!
                        </h1>  
                        <div class="overflow-x-auto scrollbar-hide md:overflow-x-visible">
                            <div class="flex md:flex-wrap w-fit md:w-full gap-1 md:gap-2 justify-center">
                                {#each entries as [key, value], i}
                                    <div tabindex="0" onkeydown={() => goto('/blog/category/'+value[2]+'#articles')} onclick={() => goto('/blog/category/'+value[2]+'#articles')} role="button" class="{i === 0 ? 'ml-6' : ''} {i === 16 ? 'mr-6' : ''} {$activeData.category === value[2] ? 'border-primary-500' : 'border-primary-950'} border-2 inline-flex h-full max-w-fit flex-row gap-3 rounded-full bg-primary-dark text-sm-bold text-primary-300 px-3 sm:px-4 py-1 sm:py-2 items-center active:scale-98 transition-all transition-300 hover:cursor-pointer whitespace-nowrap">
                                        <div class="flex w-[24px] sm:w-[38px] h-[24px] sm:h-[38px] justify-center items-center">
                                            {#if $activeData.category === value[2]}
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19 8L9.375 17L5 12.9091" stroke="#F36020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                            {:else}
                                                <img src={value[0]} alt="{value[1]} icon" class="h-full" />
                                            {/if}
                                        </div>
                                        {value[1]}
                                    </div>
                                {/each}
                            </div>
                        </div>
                    </div>      
                </div>
                <div class="col-span-4 md:col-span-3 mt-6">
                    <div class="md:hidden">
                        <div class="flex flex-col gap-4">
                            <p class="text-base text-primary-50">Nowoczesny blog dostarczający wiedzy o strategiach, trendach i psychologii w marketingu, która pomoże rozwinąć Twój biznes.</p>
                            <div><Button label="Przejrzyj artykuły" theme="orange" /></div>
                        </div>
                    </div>
                    <div class="flex">
                        <enhanced:img src={phones} alt="Phones with adshelp page screen" class="max-sm:mt-6 lg:ml-12" />
                    </div>
                </div>
                <div class="cols-span-1 max-md:hidden">
                    <div class="flex h-full items-end pb-32">
                        <div class="flex flex-col gap-6">
                            <p class="text-base text-primary-50">Nowoczesny blog dostarczający wiedzy o strategiach, trendach i psychologii w marketingu, która pomoże rozwinąć Twój biznes.</p>
                            <div><Button label="Przejrzyj artykuły" theme="orange" href="#articles" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>


<section id="blog-config" class="py-6 px-4 md:px-8 flex justify-center bg-white">
    <div class="max-w-7xl w-full">
        <div class="flex flex-col md:flex-row justify-between">

            <div class="flex flex-1 relative h-[49px]">
                <span class="absolute inset-y-0 left-3 flex items-center text-gray-400">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#737373" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M21.0004 21L16.6504 16.65" stroke="#737373" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>                    
                </span>
                <input
                id="blog_search"
                class="rounded-lg transition-shadow w-full md:w-[90%] lg:w-full lg:max-w-[500px] flex bg-zinc-100 focus:ring-foreground focus:shadow-2xl focus:ring-offset-background focus:outline-hidden items-center max-h-[49px] h-full pr-2 pl-12 py-4 focus:ring-2 focus:ring-offset-2 md:text-base placeholder:text-neutral-600 placeholder:text-sm text-neutral-900 text-sm"
                placeholder="Wyszukaj artykułu..."
                name="blog_search"
                autocomplete="off" />
            </div>

            <div class="flex flex-1 flex-row items-center justify-end max-md:mt-6">
                <p class="text-lg-bold font-display text-primary-950 mr-6">Kategoria</p>
                <div>
                    <div class="relative">
                        <div onclick={(e) => { sortActive = !sortActive; e.stopPropagation(); }} onkeydown={(e) => { sortActive = !sortActive; e.stopPropagation();}} role="button" tabindex="0" class="hover:cursor-pointer inline-flex py-3 px-4 text-sm-bold font-display text-primary-950 shadow-md rounded-full gap-2 border-2 transition-all transition-300">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8945 3H3.89453V12H10.8945V3Z" stroke="#410F09" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M21.8945 3H14.8945V8H21.8945V3Z" stroke="#410F09" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M21.8945 12H14.8945V21H21.8945V12Z" stroke="#410F09" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.8945 16H3.89453V21H10.8945V16Z" stroke="#410F09" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>            
                            {#if $activeData.category === 'all'}
                                Wszystkie artykuły
                            {/if}
                            {#each entries as [key, value], i}
                                {#if $activeData.category === value[2]}
                                    {value[1]}
                                {/if}
                            {/each}
                        </div>
                        {#if sortActive}
                            <div class="absolute top-14 right-0 flex flex-col p-2 rounded-md bg-white shadow-md w-[300px]" transition:fly={{ y: 10, opacity: 0, duration: 300 }}>
                                <div onkeydown={() => goto('/blog', { noScroll: true })} onclick={() => goto('/blog', { noScroll: true })} role="button" tabindex="0" class="flex flex-row gap-2 w-full py-3 px-4 hover:bg-primary-50 rounded-sm hover:cursor-pointer">
                                    {#if $activeData.category === 'all'}
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 8L9.375 17L5 12.9091" stroke="#F36020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>   
                                    {/if}
                                    <p class="text-sm-bold">Wszystkie artykuły</p>
                                </div>

                                {#each entries as [key, value], i}
                                    <div onkeydown={() => goto('/blog/category/'+value[2], { noScroll: true })} onclick={() => goto('/blog/category/'+value[2], { noScroll: true })} role="button" tabindex="0" class="flex flex-row gap-2 w-full py-3 px-4 hover:bg-primary-50 rounded-sm hover:cursor-pointer">

                                        {#if $activeData.category === value[2]}
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19 8L9.375 17L5 12.9091" stroke="#F36020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>   
                                        {/if}

                                        <p class="text-sm-bold">{value[1]}</p>

                                    </div>
                                {/each}
                            </div>
                        {/if}
                    </div>
                </div>
            </div>

        </div>

    </div>
</section>

<section id="articles" class="py-6 min-[540px]:py-12 md:py-18 px-4 md:px-8 flex justify-center bg-white min-h-screen">
    <div class="max-w-7xl w-full">
        {#if $isLoading}
            <Loader />
        {:else}
            {#if $activeData.articles.length > 0}
                <ArticleCard data={$activeData.articles} />            
            {:else}
                <NoArticles />
            {/if}
        {/if}

        {#if total > 1}
            <div class="mt-16 md:mt-32 md:mb-12 flex justify-center">
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
                        <div onclick={() => goto(`${paginationUrl}${i+1}`, { noScroll: true })} onkeydown={() => goto(`${paginationUrl}${i+1}`, { noScroll: true })} role="button" tabindex="0" class="{page === i+1 ? 'bg-primary-950 text-primary-100 hover:bg-primary-900' : 'bg-primary-50 text-primary-950 hover:bg-primary-100'} w-[52px] h-[52px] rounded-full flex justify-center items-center text-lg-bold font-display  transition-all transition-300 active:scale-96 hover:cursor-pointer">
                            {i+1}
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

{@render children()}

<!-- Line -->
<div class=" w-full overflow-hidden pb-6 md:pb-8 lg:pb-12 xl:pb-18 bg-white">
    <svg width="1920" height="53" viewBox="0 0 1920 53" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 52L1920 0.5" stroke="#E7E7E7"/>
    </svg>
</div>

<Pricing />

<!-- Contact section -->
<Contact {form} actionContact="/blog?/contact" action="/blog?/auditOnContact" />

<Footer />
