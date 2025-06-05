<script lang="ts">
    import Calendar from "phosphor-svelte/lib/Calendar";
    import Grid from "phosphor-svelte/lib/DiamondsFour";
    import Arrow from "phosphor-svelte/lib/ArrowLeft";
    import Link from "phosphor-svelte/lib/Link";
    import Share from "phosphor-svelte/lib/ShareNetwork";
    import Facebook from "phosphor-svelte/lib/FacebookLogo";
    import Linkedin from "phosphor-svelte/lib/LinkedinLogo";
    import Email from "phosphor-svelte/lib/Envelope";
    import Check from "phosphor-svelte/lib/Check";
    import Avatar from '$lib/assets/avatar-mini.png';

    import type { PageData } from './$types';
    import { entriesData } from '$lib/stores/blogStore.js';
    import { get } from "svelte/store";
    import Audit from "$lib/components/sections/blog-audit/Audit.svelte";
    import Footer from "$lib/components/sections/footer/Footer.svelte";
    import { onMount } from "svelte";
    import { page } from "$app/state";
    import { formatPublishedAt } from "$lib/utils/dates.js";

    // Categories
    const entries = Object.entries(get(entriesData));

    // Copy
    let copy = $state(false);

    let { data }: { data: PageData } = $props();

    let dataQuery = data.post;
    let dataArticlesQuery = data.posts;
    let currentUrl = $state('');
    let pageTitle = $state('');

    onMount(() => {
        // Get the current URL when component mounts (client-side only)
        currentUrl = window.location.href;
        pageTitle = document.title;
    });

    const shareToFacebook = () => {
        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
        window.open(url, '_blank', 'width=600,height=400');
    }
    const shareToLinkedin = () => {
        const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
        window.open(url, '_blank', 'width=600,height=400');
    }
    const shareByEmail = () => {
        const subject = encodeURIComponent(pageTitle);
        const body = encodeURIComponent(`Sprawdź ten ciekawy artykuł: ${currentUrl}`);
        window.location.href = `mailto:?subject=${subject}&body=${body}`;
    }
</script>

{#await data.post}
<article id="article" class="flex flex-col justify-center items-center bg-white pb-24">
    <div class="w-full bg-primary-950 justify-center flex pt-8 md:pt-12 h-screen">
        <svg width="40" height="40" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" fill="none" stroke="#F36020" stroke-width="5" stroke-dasharray="80 30" stroke-linecap="round">
            <animateTransform 
                attributeName="transform" 
                attributeType="XML" 
                type="rotate"
                from="0 25 25"
                to="360 25 25" 
                dur="1s" 
                repeatCount="indefinite" />
            </circle>
        </svg>
    </div>
</article>
{:then loadedData} 
<article id="article" class="flex flex-col justify-center items-center bg-white pb-24">
    <div class="w-full bg-primary-950 justify-center flex pt-8 md:pt-12">
        <div class="max-w-7xl mx-6">
            <div class="flex flex-col gap-6 md:gap-8 lg:gap-12">
                <div class="flex flex-col flex-1 justify-center text-center">
                    <div>
                        <a href="/blog" class="py-2 gap-2 text-sm-bold text-primary-100 inline-flex items-center mb-6 active:scale-[0.98] transition-all transition-300"><Arrow weight="regular" size="24" /> Wszystkie artykuły</a>
                    </div>
                    <h1 class="text-4xl-bold md:text-5xl-bold xl:text-6xl-bold font-display text-primary-100">{loadedData[0].title}</h1>
                    <div class="flex flex-wrap gap-4 mt-8 justify-center">
                        <div class="py-2 px-4 bg-primary-200 text-primary-950 text-base-bold font-display rounded-full inline-flex gap-2 items-center">
                            <Calendar weight="regular" size="24" />
                            <time datetime={loadedData[0].publishedAt}>{formatPublishedAt(loadedData[0].publishedAt)}</time>
                        </div>
                        <div class="py-2 px-4 bg-primary-200 text-primary-950 text-base-bold font-display rounded-full inline-flex gap-2 items-center">
                            <Grid weight="regular" size="24" />
                            {loadedData[0].category.name}
                        </div>
                        <div class="pl-2 pt-2 pb-2 pr-4 bg-primary-200 text-primary-950 text-base-bold font-display rounded-full inline-flex gap-2 items-center">
                            <img src={Avatar} alt="CEO of Adshelp" class="h-[30px]" />
                            Marcin Lubera
                        </div>
                    </div>
                </div>
                <div class="flex flex-1 justify-center">
                    <div class="bg-primary-950 aspect-3/2 w-full rounded-2xl overflow-hidden max-w-[800px] -mb-24">
                        {#if loadedData[0].cover}
                            <img src={loadedData[0].cover.url} alt={loadedData[0].cover.alternativeText} class="object-cover w-full h-full" />
                        {/if}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="max-w-5xl mt-20 lg:mt-16 w-full px-6">
        <div class="article relative">
            <div class="absolute -left-36 h-full max-lg:hidden">
                <div class="flex flex-col p-2 shadow-2xl rounded-full gap-2 bg-white sticky top-4">
                    <div class="relative group">
                        <div class="absolute -left-28 top-1 rounded-xl px-3 py-2 text-sm-bold text-primary-950 bg-white shadow-sm opacity-0 group-hover:opacity-100 transition-all transition-300 pointer-events-none">Skopiuj link</div>
                        <div onclick={() => { navigator.clipboard.writeText(window.location.href); copy = true; }} onkeydown={() => {navigator.clipboard.writeText(window.location.href); copy = true }} role="button" tabindex="0" class="flex justify-center items-center w-[50px] h-[50px] bg-primary-50 rounded-full hover:cursor-pointer active:scale-[0.95] hover:bg-primary-100 transition-all">
                            {#if !copy}<Link weight="regular" size="24" />{:else}
                            <Check weight="regular" size="24" color="#F36020" />{/if}
                        </div>
                    </div>
                    <div class="relative group">
                        <div class="absolute -left-28 top-1 rounded-xl px-3 py-2 text-sm-bold text-primary-950 bg-white shadow-sm opacity-0 group-hover:opacity-100 transition-all transition-300 pointer-events-none">Udostępnij</div>
                        <a href="#share-socials" id="to-share" class="flex justify-center items-center w-[50px] h-[50px] bg-primary-50 rounded-full hover:cursor-pointer active:scale-[0.95] hover:bg-primary-100 transition-all"><Share weight="regular" size="24" /></a>
                    </div>
                </div>
            </div>
            {@html loadedData[0].artykul}
        </div>
        <div class="flex flex-row gap-4 pt-4 md:pt-8" id="share-socials">
            <div class="relative group">
                <div class="absolute -bottom-12 left-0 rounded-xl px-3 py-2 text-sm-bold text-primary-950 bg-white shadow-sm opacity-0 group-hover:opacity-100 transition-all transition-300 pointer-events-none whitespace-nowrap">Udostępnij na Facebook</div>
                <div onclick={() => shareToFacebook()} onkeydown={() => shareToFacebook()} role="button" tabindex="0" class="flex justify-center items-center w-[54px] h-[54px] bg-primary-50 rounded-full hover:bg-primary-100 active:scale-[0.97] transition-all hover:cursor-pointer">
                    <Facebook weight="regular" size="28" />
                </div>
            </div>
            <div class="relative group">
                <div class="absolute -bottom-12 left-0  rounded-xl px-3 py-2 text-sm-bold text-primary-950 bg-white shadow-sm opacity-0 group-hover:opacity-100 transition-all transition-300 pointer-events-none whitespace-nowrap">Udostępnij na Linkedin</div>
                <div onclick={() => shareToLinkedin()} onkeydown={() => shareToLinkedin()} role="button" tabindex="0" class="flex justify-center items-center w-[54px] h-[54px] bg-primary-50 rounded-full hover:bg-primary-100 active:scale-[0.97] transition-all hover:cursor-pointer">
                    <Linkedin weight="regular" size="28" />
                </div>
            </div>
            <div class="relative group">
                <div class="absolute -bottom-12 left-0  rounded-xl px-3 py-2 text-sm-bold text-primary-950 bg-white shadow-sm opacity-0 group-hover:opacity-100 transition-all transition-300 pointer-events-none whitespace-nowrap">Udostępnij przez email</div>
                <div onclick={() => shareByEmail()} onkeydown={() => shareByEmail()} role="button" tabindex="0" class="flex justify-center items-center w-[54px] h-[54px] bg-primary-50 rounded-full group-hover:bg-primary-100 active:scale-[0.97] transition-all hover:cursor-pointer">
                    <Email weight="regular" size="28" />
                </div>
            </div>
        </div>
    </div>
</article>
{:catch error}
    <p>Error loading data: {error.message}</p>
{/await}

<div class="flex justify-center bg-white">
    <div class="max-w-7xl mx-6 w-full pb-16 md:pb-24 lg:pb-32">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each dataArticlesQuery.data as article}
                <a href="/blog/{article.slug}" rel="external" class="col-span-1 flex flex-col active:scale-[0.98] transition-all transition-300 hover:cursor-pointer">
                    <div class="bg-primary-950 aspect-3/2 w-full rounded-2xl overflow-hidden">
                        {#if article.cover}
                            <img src={article.cover.formats.medium.url} alt={article.cover.alternativeText} class="object-cover w-full h-full" />
                        {/if}
                    </div>
                    <div class="mt-4 flex flex-col">
                        <div class="flex flex-row justify-between">
                            <div class="flex gap-2 items-center">
                                <div class="w-2 h-2 rounded-full bg-primary-950"></div>
                                <p class="text-sm-bold font-display text-primary-950">{article.category.slug.toUpperCase()}</p>
                            </div>
                            <p class="text-stone-600 text-sm"><time datetime={article.publishedAt}>{formatPublishedAt(article.publishedAt)}</time></p>
                        </div>
                        <h5 class="text-xl-bold lg:text-2xl-bold text-primary-950 font-display mb-3 mt-5">{article.title}</h5>
                        <p class="text-sm text-stone-600">{article.description}</p>
                        <div class="flex flex-row gap-3 items-center mt-5">
                            <img src={Avatar} alt="CEO of Adshelp" />
                            <p class="text-sm text-primary-950 font-display">Marcin Lubera</p>
                        </div>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</div>

<div class="flex justify-center bg-white">
    <div class="max-w-5xl mx-6 w-full pb-8 md:pb-12 lg:pb-16">
        <div class="flex flex-col">
            <h2 class="text-2xl-bold md:text-3xl-bold font-display text-primary-950 text-center">Kategorie wpisów</h2>

            <div class="flex flex-row flex-wrap justify-center gap-3 mt-8 md:mt-11 lg:mt-14">
                {#each entries as [key, value], i}
                <a href="/blog/category/{value[2]}#articles" tabindex="0" role="button" class="inline-flex h-full max-w-fit flex-row gap-3 rounded-full bg-primary-50 text-sm-bold text-primary-950 px-3 sm:px-4 py-1 sm:py-2 items-center hover:bg-primary-100 active:scale-98 transition-all transition-300 hover:cursor-pointer">
                    <div class="flex h-[30px] sm:h-[38px] justify-center items-center">
                        <img src={value[3]} alt="{value[1]} icon" class="h-full" />
                    </div>
                    {value[1]}
                </a>
                {/each}
            </div>

        </div>
    </div>
</div>

<div class="flex justify-center bg-white" id="contact">
    <div class="max-w-7xl w-full pb-8 md:pb-12 lg:pb-16 mx-6">
        <Audit action="/blog?/auditOnBlog" />
    </div>
</div>

<Footer />