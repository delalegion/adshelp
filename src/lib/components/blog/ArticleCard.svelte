<script lang="ts">
    import { fly } from 'svelte/transition';
    import Audit from '../sections/blog-audit/Audit.svelte';
    import Avatar from '$lib/assets/webp/avatar-mini.webp';
    import { formatPublishedAt } from '$lib/utils/dates.js';

    let { data = {}  } = $props();
</script>

<div class="grid grid-cols-4 min-[540px]:grid-cols-12 gap-7 min-[540px]:gap-9" in:fly={{ y: 10, opacity: 0 }}>
    {#if data[0]}
    <!-- Article -->
    <a itemscope itemtype="https://schema.org/BlogPosting" href="/blog/{data[0].slug}" class="col-span-4 min-[540px]:col-span-6 min-[840px]:col-span-6 lg:col-span-5 col-start-1 min-[540px]:col-start-1 min-[850px]:col-start-1 lg:col-start-1 flex flex-col active:scale-[0.98] transition-all transition-300 hover:cursor-pointer">
        <div class="bg-primary-950 aspect-3/2 w-full rounded-2xl overflow-hidden" itemprop="image" itemscope itemtype="https://schema.org/ImageObject">
            {#if data[0].cover}
                <img src={data[0].cover.formats.medium.url} alt={data[0].cover.alternativeText} class="object-cover w-full h-full" loading="lazy" itemprop="url contentUrl" />
                <meta itemprop="width" content="512" />
                <meta itemprop="height" content="341" />
            {/if}
        </div>
        <div class="mt-4 flex flex-col">
            <div class="flex flex-row justify-between">
                <div class="flex gap-2 items-center">
                    <div class="w-2 h-2 rounded-full bg-primary-950"></div>
                    <p class="text-sm-bold font-display text-primary-950" itemprop="articleSection">{data[0].category.slug.toUpperCase()}</p>
                </div>
                <p class="text-stone-600 text-sm">
                    <time datetime={data[0].publishedAt} itemprop="datePublished">{formatPublishedAt(data[0].publishedAt)}</time>
                    <meta itemprop="dateModified" content={data[0].publishedAt} />
                </p>
            </div>
            <h5 class="text-xl-bold lg:text-2xl-bold text-primary-950 font-display mb-3 mt-5" itemprop="headline">{data[0].title}</h5>
            <p class="text-sm text-stone-600" itemprop="description">{data[0].description}</p>
            <div class="flex flex-row gap-3 items-center mt-5" itemprop="author publisher" itemscope itemtype="https://schema.org/Person">
                <img src={Avatar} alt="CEO of Adshelp" itemprop="image" />
                <p class="text-sm text-primary-950 font-display" itemprop="name">Marcin Lubera</p>
            </div>
        </div>
        <meta itemprop="mainEntityOfPage" content="https://adshelp.pl/blog/{data[0].slug}" />
    </a>
    {/if}

    {#if data[1]}
    <!-- Article -->
    <a itemscope itemtype="https://schema.org/BlogPosting" href="/blog/{data[1].slug}" class="col-span-4 min-[540px]:col-span-6 min-[850px]:col-span-5 lg:col-span-4 col-start-1 min-[540px]:col-start-7 min-[850px]:col-start-8 lg:col-start-8 flex flex-col min-[800px]:mt-36 active:scale-[0.98] transition-all transition-300 hover:cursor-pointer">
        <div class="bg-[#D9D9D9] aspect-3/2 w-full rounded-2xl overflow-hidden" itemprop="image" itemscope itemtype="https://schema.org/ImageObject">
            {#if data[1].cover}
                <img src={data[1].cover.formats.medium.url} alt={data[1].cover.alternativeText} class="object-cover w-full h-full" loading="lazy" itemprop="url contentUrl" />
                <meta itemprop="width" content="512" />
                <meta itemprop="height" content="341" />
            {/if}
        </div>
        <div class="mt-4 flex flex-col">
            <div class="flex flex-row justify-between">
                <div class="flex gap-2 items-center">
                    <div class="w-2 h-2 rounded-full bg-primary-950"></div>
                    <p class="text-sm-bold font-display text-primary-950" itemprop="articleSection">{data[1].category.slug.toUpperCase()}</p>
                </div>
                <p class="text-stone-600 text-sm">
                    <time datetime={data[1].publishedAt} itemprop="datePublished">{formatPublishedAt(data[1].publishedAt)}</time>
                    <meta itemprop="dateModified" content={data[1].publishedAt} />
                </p>
            </div>
            <h5 class="text-xl-bold lg:text-2xl-bold text-primary-950 font-display mb-3 mt-5" itemprop="headline">{data[1].title}</h5>
            <p class="text-sm text-stone-600" itemprop="description">{data[1].description}</p>
            <div class="flex flex-row gap-3 items-center mt-5" itemprop="author publisher" itemscope itemtype="https://schema.org/Person">
                <img src={Avatar} alt="CEO of Adshelp" itemprop="image" />
                <p class="text-sm text-primary-950 font-display" itemprop="name">Marcin Lubera</p>
            </div>
        </div>
        <meta itemprop="mainEntityOfPage" content="https://adshelp.pl/blog/{data[1].slug}" />
    </a>
    {/if}

    {#if data[2]}
    <!-- Article -->
    <a itemscope itemtype="https://schema.org/BlogPosting" href="/blog/{data[2].slug}" class="col-span-4 min-[540px]:col-span-6 min-[850px]:col-span-5 lg:col-span-4 col-start-1 min-[540px]:col-start-1 min-[850px]:col-start-2 lg:col-start-2 flex flex-col min-[540px]:mt-8 active:scale-[0.98] transition-all transition-300 hover:cursor-pointer">
        <div class="bg-[#D9D9D9] aspect-3/2 w-full rounded-2xl overflow-hidden" itemprop="image" itemscope itemtype="https://schema.org/ImageObject">
            {#if data[2].cover}
                <img src={data[2].cover.formats.medium.url} alt={data[2].cover.alternativeText} class="object-cover w-full h-full" loading="lazy" itemprop="url contentUrl" />
                <meta itemprop="width" content="512" />
                <meta itemprop="height" content="341" />
            {/if}
        </div>
        <div class="mt-4 flex flex-col">
            <div class="flex flex-row justify-between">
                <div class="flex gap-2 items-center">
                    <div class="w-2 h-2 rounded-full bg-primary-950"></div>
                    <p class="text-sm-bold font-display text-primary-950" itemprop="articleSection">{data[2].category.slug.toUpperCase()}</p>
                </div>
                <p class="text-stone-600 text-sm">
                    <time datetime={data[2].publishedAt} itemprop="datePublished">{formatPublishedAt(data[2].publishedAt)}</time>
                    <meta itemprop="dateModified" content={data[2].publishedAt} />
                </p>
            </div>
            <h5 class="text-xl-bold lg:text-2xl-bold text-primary-950 font-display mb-3 mt-5" itemprop="headline">{data[2].title}</h5>
            <p class="text-sm text-stone-600" itemprop="description">{data[2].description}</p>
            <div class="flex flex-row gap-3 items-center mt-5" itemprop="author publisher" itemscope itemtype="https://schema.org/Person">
                <img src={Avatar} alt="CEO of Adshelp" itemprop="image" />
                <p class="text-sm text-primary-950 font-display" itemprop="name">Marcin Lubera</p>
            </div>
        </div>
        <meta itemprop="mainEntityOfPage" content="https://adshelp.pl/blog/{data[2].slug}" />
    </a>
    {/if}

    {#if data[3]}
    <!-- Article -->
    <a itemscope itemtype="https://schema.org/BlogPosting" href="/blog/{data[3].slug}" class="col-span-4 min-[540px]:col-span-6 min-[850px]:col-span-5 lg:col-span-4 col-end-5 min-[540px]:col-end-13 min-[850px]:col-end-12 lg:col-end-13 flex flex-col min-[540px]:mt-8 min-[800px]:mt-32 active:scale-[0.98] transition-all transition-300 hover:cursor-pointer">
        <div class="bg-primary-950 aspect-3/2 w-full rounded-2xl overflow-hidden" itemprop="image" itemscope itemtype="https://schema.org/ImageObject">
            {#if data[3].cover}
                <img src={data[3].cover.formats.medium.url} alt={data[3].cover.alternativeText} class="object-cover w-full h-full" loading="lazy" itemprop="url contentUrl" />
                <meta itemprop="width" content="512" />
                <meta itemprop="height" content="341" />
            {/if}
        </div>
        <div class="mt-4 flex flex-col">
            <div class="flex flex-row justify-between">
                <div class="flex gap-2 items-center">
                    <div class="w-2 h-2 rounded-full bg-primary-950"></div>
                    <p class="text-sm-bold font-display text-primary-950" itemprop="articleSection">{data[3].category.slug.toUpperCase()}</p>
                </div>
                <p class="text-stone-600 text-sm">
                    <time datetime={data[3].publishedAt} itemprop="datePublished">{formatPublishedAt(data[3].publishedAt)}</time>
                    <meta itemprop="dateModified" content={data[3].publishedAt} />
                </p>
            </div>
            <h5 class="text-xl-bold lg:text-2xl-bold text-primary-950 font-display mb-3 mt-5" itemprop="headline">{data[3].title}</h5>
            <p class="text-sm text-stone-600" itemprop="description">{data[3].description}</p>
            <div class="flex flex-row gap-3 items-center mt-5" itemprop="author publisher" itemscope itemtype="https://schema.org/Person">
                <img src={Avatar} alt="CEO of Adshelp" itemprop="image" />
                <p class="text-sm text-primary-950 font-display" itemprop="name">Marcin Lubera</p>
            </div>
        </div>
        <meta itemprop="mainEntityOfPage" content="https://adshelp.pl/blog/{data[3].slug}" />
    </a>
    {/if}
</div>

<Audit action="/blog?/audit" />

<div class="grid grid-cols-4 min-[540px]:grid-cols-12 gap-7 min-[540px]:gap-9 {data[4] ? 'mt-12 min-[540px]:mt-16 md:mt-24' : ''}">
    {#if data[4]}
    <!-- Article -->
    <a itemscope itemtype="https://schema.org/BlogPosting" href="/blog/{data[4].slug}" class="col-span-4 min-[540px]:col-span-6 min-[850px]:col-span-5 lg:col-span-4 col-start-1 min-[540px]:col-start-1 min-[850px]:col-start-2 lg:col-start-2 flex flex-col active:scale-[0.98] transition-all transition-300 hover:cursor-pointer">
        <div class="bg-[#D9D9D9] aspect-3/2 w-full rounded-2xl overflow-hidden" itemprop="image" itemscope itemtype="https://schema.org/ImageObject">
            {#if data[4].cover}
                <img src={data[4].cover.formats.medium.url} alt={data[4].cover.alternativeText} class="object-cover w-full h-full" loading="lazy" itemprop="url contentUrl" />
                <meta itemprop="width" content="512" />
                <meta itemprop="height" content="341" />
            {/if}
        </div>
        <div class="mt-4 flex flex-col">
            <div class="flex flex-row justify-between">
                <div class="flex gap-2 items-center">
                    <div class="w-2 h-2 rounded-full bg-primary-950"></div>
                    <p class="text-sm-bold font-display text-primary-950" itemprop="articleSection">{data[4].category.slug.toUpperCase()}</p>
                </div>
                <p class="text-stone-600 text-sm">
                    <time datetime={data[4].publishedAt} itemprop="datePublished">{formatPublishedAt(data[4].publishedAt)}</time>
                    <meta itemprop="dateModified" content={data[4].publishedAt} />
                </p>
            </div>
            <h5 class="text-xl-bold lg:text-2xl-bold text-primary-950 font-display mb-3 mt-5" itemprop="headline">{data[4].title}</h5>
            <p class="text-sm text-stone-600" itemprop="description">{data[4].description}</p>
            <div class="flex flex-row gap-3 items-center mt-5" itemprop="author publisher" itemscope itemtype="https://schema.org/Person">
                <img src={Avatar} alt="CEO of Adshelp" itemprop="image" />
                <p class="text-sm text-primary-950 font-display" itemprop="name">Marcin Lubera</p>
            </div>
        </div>
        <meta itemprop="mainEntityOfPage" content="https://adshelp.pl/blog/{data[4].slug}" />
    </a>    
    {/if}

    {#if data[5]}
    <!-- Article -->
    <a itemscope itemtype="https://schema.org/BlogPosting" href="/blog/{data[5].slug}" class="col-span-4 min-[540px]:col-span-6 min-[850px]:col-span-5 lg:col-span-4 col-start-1 min-[540px]:col-start-7 min-[850px]:col-start-7 lg:col-start-7 flex flex-col min-[800px]:mt-32 active:scale-[0.98] transition-all transition-300 hover:cursor-pointer">
        <div class="bg-primary-950 aspect-3/2 w-full rounded-2xl overflow-hidden" itemprop="image" itemscope itemtype="https://schema.org/ImageObject">
            {#if data[5].cover}
                <img src={data[5].cover.formats.medium.url} alt={data[5].cover.alternativeText} class="object-cover w-full h-full" loading="lazy" itemprop="url contentUrl" />
                <meta itemprop="width" content="512" />
                <meta itemprop="height" content="341" />
            {/if}
        </div>
        <div class="mt-4 flex flex-col">
            <div class="flex flex-row justify-between">
                <div class="flex gap-2 items-center">
                    <div class="w-2 h-2 rounded-full bg-primary-950"></div>
                    <p class="text-sm-bold font-display text-primary-950" itemprop="articleSection">{data[5].category.slug.toUpperCase()}</p>
                </div>
                <p class="text-stone-600 text-sm">
                    <time datetime={data[5].publishedAt} itemprop="datePublished">{formatPublishedAt(data[5].publishedAt)}</time>
                    <meta itemprop="dateModified" content={data[5].publishedAt} />
                </p>
            </div>
            <h5 class="text-xl-bold lg:text-2xl-bold text-primary-950 font-display mb-3 mt-5" itemprop="headline">{data[5].title}</h5>
            <p class="text-sm text-stone-600" itemprop="description">{data[5].description}</p>
            <div class="flex flex-row gap-3 items-center mt-5" itemprop="author publisher" itemscope itemtype="https://schema.org/Person">
                <img src={Avatar} alt="CEO of Adshelp" itemprop="image" />
                <p class="text-sm text-primary-950 font-display" itemprop="name">Marcin Lubera</p>
            </div>
        </div>
        <meta itemprop="mainEntityOfPage" content="https://adshelp.pl/blog/{data[5].slug}" />
    </a>   
    {/if}

    {#if data[6]}
    <!-- Article -->
    <a itemscope itemtype="https://schema.org/BlogPosting" href="/blog/{data[6].slug}" class="col-span-4 min-[540px]:col-span-6 min-[850px]:col-span-5 lg:col-span-4 col-start-1 min-[540px]:col-start-1 min-[850px]:col-start-1 lg:col-start-1 flex flex-col min-[540px]:mt-8 min-[800px]:mt-12 active:scale-[0.98] transition-all transition-300 hover:cursor-pointer">
        <div class="bg-primary-950 aspect-3/2 w-full rounded-2xl overflow-hidden" itemprop="image" itemscope itemtype="https://schema.org/ImageObject">
            {#if data[6].cover}
                <img src={data[6].cover.formats.medium.url} alt={data[6].cover.alternativeText} class="object-cover w-full h-full" loading="lazy" itemprop="url contentUrl" />
                <meta itemprop="width" content="512" />
                <meta itemprop="height" content="341" />
            {/if}
        </div>
        <div class="mt-4 flex flex-col">
            <div class="flex flex-row justify-between">
                <div class="flex gap-2 items-center">
                    <div class="w-2 h-2 rounded-full bg-primary-950"></div>
                    <p class="text-sm-bold font-display text-primary-950" itemprop="articleSection">{data[6].category.slug.toUpperCase()}</p>
                </div>
                <p class="text-stone-600 text-sm">
                    <time datetime={data[6].publishedAt} itemprop="datePublished">{formatPublishedAt(data[6].publishedAt)}</time>
                    <meta itemprop="dateModified" content={data[6].publishedAt} />
                </p>
            </div>
            <h5 class="text-xl-bold lg:text-2xl-bold text-primary-950 font-display mb-3 mt-5" itemprop="headline">{data[6].title}</h5>
            <p class="text-sm text-stone-600" itemprop="description">{data[6].description}</p>
            <div class="flex flex-row gap-3 items-center mt-5" itemprop="author publisher" itemscope itemtype="https://schema.org/Person">
                <img src={Avatar} alt="CEO of Adshelp" itemprop="image" />
                <p class="text-sm text-primary-950 font-display" itemprop="name">Marcin Lubera</p>
            </div>
        </div>
        <meta itemprop="mainEntityOfPage" content="https://adshelp.pl/blog/{data[6].slug}" />
    </a>    
    {/if}
    
    {#if data[7]}
    <!-- Article -->
    <a itemscope itemtype="https://schema.org/BlogPosting" href="/blog/{data[7].slug}" class="col-span-4 min-[540px]:col-span-6 min-[850px]:col-span-5 lg:col-span-4 col-start-1 min-[540px]:col-start-7 min-[850px]:col-start-8 lg:col-start-8 flex flex-col min-[540px]:mt-8 min-[800px]:mt-32 active:scale-[0.98] transition-all transition-300 hover:cursor-pointer">
        <div class="bg-[#D9D9D9] aspect-3/2 w-full rounded-2xl overflow-hidden" itemprop="image" itemscope itemtype="https://schema.org/ImageObject">
            {#if data[7].cover}
                <img src={data[7].cover.formats.medium.url} alt={data[7].cover.alternativeText} class="object-cover w-full h-full" loading="lazy" itemprop="url contentUrl" />
                <meta itemprop="width" content="512" />
                <meta itemprop="height" content="341" />
            {/if}
        </div>
        <div class="mt-4 flex flex-col">
            <div class="flex flex-row justify-between">
                <div class="flex gap-2 items-center">
                    <div class="w-2 h-2 rounded-full bg-primary-950"></div>
                    <p class="text-sm-bold font-display text-primary-950" itemprop="articleSection">{data[7].category.slug.toUpperCase()}</p>
                </div>
                <p class="text-stone-600 text-sm">
                    <time datetime={data[7].publishedAt} itemprop="datePublished">{formatPublishedAt(data[7].publishedAt)}</time>
                    <meta itemprop="dateModified" content={data[7].publishedAt} />
                </p>
            </div>
            <h5 class="text-xl-bold lg:text-2xl-bold text-primary-950 font-display mb-3 mt-5" itemprop="headline">{data[7].title}</h5>
            <p class="text-sm text-stone-600" itemprop="description">{data[7].description}</p>
            <div class="flex flex-row gap-3 items-center mt-5" itemprop="author publisher" itemscope itemtype="https://schema.org/Person">
                <img src={Avatar} alt="CEO of Adshelp" itemprop="image" />
                <p class="text-sm text-primary-950 font-display" itemprop="name">Marcin Lubera</p>
            </div>
        </div>
        <meta itemprop="mainEntityOfPage" content="https://adshelp.pl/blog/{data[7].slug}" />
    </a> 
    {/if}    
</div>