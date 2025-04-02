<script lang="ts">
    // Scroll
    import { smoothScroll } from '$lib/scroll.js';

    // Article data
    import { articles } from '$lib/articles.js';
    import { categories } from '$lib/categories.js';
    
    // Slider
    import { register } from 'swiper/element/bundle';
    register();

    import type { PageData } from './$types';
    let { data }: { data: PageData } = $props();

    // Components
    import Button from '$lib/components/Button.svelte';
    import Audit from '$lib/components/sections/blog-audit/Audit.svelte';

    // Images
    import phones from '$lib/assets/phones-blog.png?enhanced';
    import avatar from '$lib/assets/avatar-mini.png';
    import { fade, fly } from 'svelte/transition';
    import { onMount } from 'svelte';

    let sortActive = $state(false);
    let categoryMenuActive = $state(0);
    let loading = $state(false);
    
    // Categories
    const entries = Object.entries(categories);
    // Data
    let activeData = $state(articles);

    const changeCategory = (category, id) => {
        loading = true;
        setTimeout(() => {
            loading = false;

            if (category === 'all') {
            activeData = articles;
            } else {
                activeData = Object.values(articles).filter(article => 
                    article.category.slug === category
                );
            }
        }, 1000);

        categoryMenuActive = id;
    }

    onMount(() => {
        // Get the input element
        const inputField = document.getElementById('blog_search')!;

        // Variable to hold the timer
        let typingTimer;
        // Define the time delay (in milliseconds)
        const doneTypingInterval = 1000; // 1 second

        // Add event listener for when user starts typing
        inputField.addEventListener('input', function() {
            // User is typing
            console.log('User is typing...');
            
            // Clear the timeout if it's been set already
            clearTimeout(typingTimer);
            
            // Set new timeout
            typingTimer = setTimeout(doneTyping, doneTypingInterval);
        });
        // Function to run when user has stopped typing
        function doneTyping() {

            console.log('Input value:', inputField.value);
        }

        document.addEventListener("click", function(e) {
            sortActive = false;
        })

    })
</script>

<style>
    .swiper, .swiper-horizontal {
        overflow: visible;
    }
</style>


<header id="header" class="bg-primary-950 bg-[url('/src/lib/assets/bg-blog.png')] relative">
    <div class="bg-primary-dark sticky top-0 py-5 overflow-visible">
        <swiper-container
            slides-per-view={"auto"}
            space-between={20}
            centered-slides={false}
            free-mode={true}
        >
            {#each entries as [key, value], i}
                <swiper-slide tabindex="0" onclick={() => {changeCategory(value[1], i+1); location.href="#blog-config"}} onkeydown={() => {changeCategory(value[1], i+1); location.href="#blog-config"}} role="button" class="{i === 0 ? 'ml-6' : ''} {i === 16 ? 'mr-6' : ''} {categoryMenuActive === i+1 ? 'border-2 border-primary-500' : ''} border-2 inline-flex h-full max-w-fit flex-row gap-3 rounded-full bg-primary-950 text-sm-bold text-primary-300 px-4 py-2 items-center hover:bg-primary-950/70 active:scale-98 transition-all transition-300 hover:cursor-pointer">
                    {#if categoryMenuActive === i+1}
                        <div class="h-[38px] flex items-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 8L9.375 17L5 12.9091" stroke="#F36020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    {:else}
                        <img src={value[0]} alt="{value[1]} icon" />
                    {/if}
                    {value[1]}
                </swiper-slide>
            {/each}
        </swiper-container>
    </div>
    <div class="flex justify-center">
        <div class="container px-6 pt-24">
            <div class="grid grid-cols-4">
                <div class="col-span-3">
                    <div class="flex flex-col gap-8">
                        <h1 class="text-8xl-bold font-display text-primary-500 ">
                            ODKRYJ ŚWIAT
                            MARKETINGU!
                        </h1>  
                        <div class="flex">
                            <enhanced:img src={phones} alt="Phones with adshelp page screen" class="ml-12" />
                        </div>
                    </div>      
                </div>
                <div class="cols-span-1">
                    <div class="flex h-full items-end pb-32">
                        <div class="flex flex-col gap-4">
                            <p class="text-base text-primary-50">Nowoczesny blog dostarczający wiedzy o strategiach, trendach i psychologii w marketingu, która pomoże rozwinąć Twój biznes.</p>
                            <div><Button label="Przejrzyj artykuły" theme="orange" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>

<section id="blog-config" class="py-6 flex justify-center bg-white">
    <div class="max-w-7xl w-full">
        <div class="flex justify-between">

            <div class="relative h-[49px] flex flex-1">
                <span class="absolute inset-y-0 left-3 flex items-center text-gray-400">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#737373" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M21.0004 21L16.6504 16.65" stroke="#737373" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>                    
                </span>
                <input
                id="blog_search"
                class="rounded-lg transition-shadow lg:w-full lg:max-w-[500px] flex bg-zinc-100 focus:ring-foreground focus:shadow-2xl focus:ring-offset-background focus:outline-hidden items-center max-h-[49px] h-full pr-2 pl-12 py-4 focus:ring-2 focus:ring-offset-2 md:text-base placeholder:text-neutral-600 placeholder:text-sm text-neutral-900 text-sm"
                placeholder="Wyszukaj artykułu..."
                name="blog_search"
                autocomplete="off" />
            </div>

            <div class="flex flex-1 flex-row items-center justify-end">
                <p class="text-lg-bold font-display text-primary-950 mr-6">Sortuj według</p>
                <div>
                    <div class="relative">
                        <div onclick={(e) => { sortActive = !sortActive; e.stopPropagation(); }} onkeydown={(e) => { sortActive = !sortActive; e.stopPropagation();}} role="button" tabindex="0" class="hover:cursor-pointer inline-flex py-3 px-4 text-sm-bold font-display text-primary-950 shadow-md rounded-full gap-2 border-2 transition-all transition-300">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8945 3H3.89453V12H10.8945V3Z" stroke="#410F09" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M21.8945 3H14.8945V8H21.8945V3Z" stroke="#410F09" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M21.8945 12H14.8945V21H21.8945V12Z" stroke="#410F09" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.8945 16H3.89453V21H10.8945V16Z" stroke="#410F09" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>                
                            {#if categoryMenuActive === 0}
                                Wszystkie artykuły
                            {/if}
                            {#each entries as [key, value], i}
                                {#if categoryMenuActive === i+1}
                                    {value[1]}
                                {/if}
                            {/each}
                        </div>
                        {#if sortActive}
                            <div class="absolute top-14 right-0 flex flex-col p-2 rounded-md bg-white shadow-md w-[300px]" transition:fly={{ y: 10, opacity: 0, duration: 300 }}>
                                <div onkeydown={() => changeCategory('all', 0)} onclick={() => changeCategory('all', 0)} role="button" tabindex="0" class="flex flex-row gap-2 w-full py-3 px-4 hover:bg-primary-50 rounded-sm hover:cursor-pointer">
                                    {#if categoryMenuActive === 0}
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 8L9.375 17L5 12.9091" stroke="#F36020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>   
                                    {/if}
                                    <p class="text-sm-bold">Wszystkie artykuły</p>
                                </div>
                                {#each entries as [key, value], i}
                                    <div onkeydown={() => changeCategory(value[1], i+1)} onclick={() => changeCategory(value[1], i+1)} role="button" tabindex="0" class="flex flex-row gap-2 w-full py-3 px-4 hover:bg-primary-50 rounded-sm hover:cursor-pointer">
                                        {#if categoryMenuActive === i+1}
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

<section id="articles" class="py-18 flex justify-center bg-white">
    <div class="max-w-7xl w-full">
        {#if loading}
            <div class="flex w-full justify-center items-center">
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
        {:else}
        <div class="grid grid-cols-12 gap-9" transition:fly={{ y: 10, opacity: 0 }}>
            {#if activeData[0]}
            <!-- Article -->
            <div class="col-span-5 flex flex-col">
                <div class="bg-primary-950 aspect-3/2 w-full rounded-2xl"></div>
                <div class="mt-4 flex flex-col">
                    <div class="flex flex-row justify-between">
                        <div class="flex gap-2 items-center">
                            <div class="w-2 h-2 rounded-full bg-primary-950"></div>
                            <p class="text-sm-bold font-display text-primary-950">{activeData[0].category.slug.toUpperCase()}</p>
                        </div>
                        <p class="text-stone-600 text-sm">2 minuty czytania</p>
                    </div>
                    <h5 class="text-2xl-bold text-primary-950 font-display mb-3 mt-5">{activeData[0].title}</h5>
                    <p class="text-sm text-stone-600">{activeData[0].description}</p>
                    <div class="flex flex-row gap-3 items-center mt-5">
                        <img src={avatar} alt="Picture of CEO Adshelp" />
                        <p class="text-sm text-primary-950 font-display">Marcin Lubera</p>
                    </div>
                </div>
            </div>
            {/if}

            {#if activeData[1]}
            <!-- Article -->
            <div class="col-span-4 col-start-8 flex flex-col mt-36">
                <div class="bg-[#D9D9D9] aspect-3/2 w-full rounded-2xl"></div>
                <div class="mt-4 flex flex-col">
                    <div class="flex flex-row justify-between">
                        <div class="flex gap-2 items-center">
                            <div class="w-2 h-2 rounded-full bg-primary-950"></div>
                            <p class="text-sm-bold font-display text-primary-950">{activeData[1].category.slug.toUpperCase()}</p>
                        </div>
                        <p class="text-stone-600 text-sm">5 minut czytania</p>
                    </div>
                    <h5 class="text-2xl-bold text-primary-950 font-display mb-3 mt-5">{activeData[1].title}</h5>
                    <p class="text-sm text-stone-600">{activeData[1].description}</p>
                    <div class="flex flex-row gap-3 items-center mt-5">
                        <img src={avatar} alt="Picture of CEO Adshelp" />
                        <p class="text-sm text-primary-950 font-display">Marcin Lubera</p>
                    </div>
                </div>
            </div>
            {/if}

            {#if activeData[2]}
            <!-- Article -->
            <div class="col-span-4 col-start-2 flex flex-col mt-8">
                <div class="bg-[#D9D9D9] aspect-3/2 w-full rounded-2xl"></div>
                <div class="mt-4 flex flex-col">
                    <div class="flex flex-row justify-between">
                        <div class="flex gap-2 items-center">
                            <div class="w-2 h-2 rounded-full bg-primary-950"></div>
                            <p class="text-sm-bold font-display text-primary-950">{activeData[2].category.slug.toUpperCase()}</p>
                        </div>
                        <p class="text-stone-600 text-sm">5 minut czytania</p>
                    </div>
                    <h5 class="text-2xl-bold text-primary-950 font-display mb-3 mt-5">{activeData[2].title}</h5>
                    <p class="text-sm text-stone-600">{activeData[2].description}</p>
                    <div class="flex flex-row gap-3 items-center mt-5">
                        <img src={avatar} alt="Picture of CEO Adshelp" />
                        <p class="text-sm text-primary-950 font-display">Marcin Lubera</p>
                    </div>
                </div>
            </div>
            {/if}

            {#if activeData[3]}
            <!-- Article -->
            <div class="col-span-4 col-end-13 flex flex-col mt-32">
                <div class="bg-primary-950 aspect-3/2 w-full rounded-2xl"></div>
                <div class="mt-4 flex flex-col">
                    <div class="flex flex-row justify-between">
                        <div class="flex gap-2 items-center">
                            <div class="w-2 h-2 rounded-full bg-primary-950"></div>
                            <p class="text-sm-bold font-display text-primary-950">{activeData[3].category.slug.toUpperCase()}</p>
                        </div>
                        <p class="text-stone-600 text-sm">2 minuty czytania</p>
                    </div>
                    <h5 class="text-2xl-bold text-primary-950 font-display mb-3 mt-5">{activeData[3].title}</h5>
                    <p class="text-sm text-stone-600">{activeData[3].description}</p>
                    <div class="flex flex-row gap-3 items-center mt-5">
                        <img src={avatar} alt="Picture of CEO Adshelp" />
                        <p class="text-sm text-primary-950 font-display">Marcin Lubera</p>
                    </div>
                </div>
            </div>
            {/if}
        </div>

        <Audit />

        <div class="grid grid-cols-12 gap-9">
            {#if activeData[4]}
            <!-- Article -->
            <div class="col-span-4 col-start-2 flex flex-col">
                <div class="bg-[#D9D9D9] aspect-3/2 w-full rounded-2xl"></div>
                <div class="mt-4 flex flex-col">
                    <div class="flex flex-row justify-between">
                        <div class="flex gap-2 items-center">
                            <div class="w-2 h-2 rounded-full bg-primary-950"></div>
                            <p class="text-sm-bold font-display text-primary-950">{activeData[4].category.slug.toUpperCase()}</p>
                        </div>
                        <p class="text-stone-600 text-sm">2 minuty czytania</p>
                    </div>
                    <h5 class="text-2xl-bold text-primary-950 font-display mb-3 mt-5">{activeData[4].title}</h5>
                    <p class="text-sm text-stone-600">{activeData[4].description}</p>
                    <div class="flex flex-row gap-3 items-center mt-5">
                        <img src={avatar} alt="Picture of CEO Adshelp" />
                        <p class="text-sm text-primary-950 font-display">Marcin Lubera</p>
                    </div>
                </div>
            </div>    
            {/if}

            {#if activeData[5]}
            <!-- Article -->
            <div class="col-span-4 col-start-7 flex flex-col mt-32">
                <div class="bg-primary-950 aspect-3/2 w-full rounded-2xl"></div>
                <div class="mt-4 flex flex-col">
                    <div class="flex flex-row justify-between">
                        <div class="flex gap-2 items-center">
                            <div class="w-2 h-2 rounded-full bg-primary-950"></div>
                            <p class="text-sm-bold font-display text-primary-950">{activeData[5].category.slug.toUpperCase()}</p>
                        </div>
                        <p class="text-stone-600 text-sm">2 minuty czytania</p>
                    </div>
                    <h5 class="text-2xl-bold text-primary-950 font-display mb-3 mt-5">{activeData[5].title}</h5>
                    <p class="text-sm text-stone-600">{activeData[5].description}</p>
                    <div class="flex flex-row gap-3 items-center mt-5">
                        <img src={avatar} alt="Picture of CEO Adshelp" />
                        <p class="text-sm text-primary-950 font-display">Marcin Lubera</p>
                    </div>
                </div>
            </div>   
            {/if}

            {#if activeData[6]}
            <!-- Article -->
            <div class="col-span-4 col-start-1 flex flex-col mt-12">
                <div class="bg-primary-950 aspect-3/2 w-full rounded-2xl"></div>
                <div class="mt-4 flex flex-col">
                    <div class="flex flex-row justify-between">
                        <div class="flex gap-2 items-center">
                            <div class="w-2 h-2 rounded-full bg-primary-950"></div>
                            <p class="text-sm-bold font-display text-primary-950">{activeData[6].category.slug.toUpperCase()}</p>
                        </div>
                        <p class="text-stone-600 text-sm">2 minuty czytania</p>
                    </div>
                    <h5 class="text-2xl-bold text-primary-950 font-display mb-3 mt-5">{activeData[6].title}</h5>
                    <p class="text-sm text-stone-600">{activeData[6].description}</p>
                    <div class="flex flex-row gap-3 items-center mt-5">
                        <img src={avatar} alt="Picture of CEO Adshelp" />
                        <p class="text-sm text-primary-950 font-display">Marcin Lubera</p>
                    </div>
                </div>
            </div>    
            {/if}
            
            {#if activeData[7]}
            <!-- Article -->
            <div class="col-span-4 col-start-8 flex flex-col mt-32">
                <div class="bg-[#D9D9D9] aspect-3/2 w-full rounded-2xl"></div>
                <div class="mt-4 flex flex-col">
                    <div class="flex flex-row justify-between">
                        <div class="flex gap-2 items-center">
                            <div class="w-2 h-2 rounded-full bg-primary-950"></div>
                            <p class="text-sm-bold font-display text-primary-950">{activeData[7].category.slug.toUpperCase()}</p>
                        </div>
                        <p class="text-stone-600 text-sm">2 minuty czytania</p>
                    </div>
                    <h5 class="text-2xl-bold text-primary-950 font-display mb-3 mt-5">{activeData[7].title}</h5>
                    <p class="text-sm text-stone-600">{activeData[7].description}</p>
                    <div class="flex flex-row gap-3 items-center mt-5">
                        <img src={avatar} alt="Picture of CEO Adshelp" />
                        <p class="text-sm text-primary-950 font-display">Marcin Lubera</p>
                    </div>
                </div>
            </div> 
            {/if}    
        </div>
        
        <!-- Pagination -->
        <div class="my-32 flex justify-center">
            <div class="flex flex-row gap-2">
                <div class="w-[52px] h-[52px] rounded-full flex justify-center items-center text-lg-bold font-display bg-primary-50 hover:bg-primary-100 transition-all transition-300 active:scale-96 hover:cursor-pointer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 12L5 12" stroke="#410F09" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 19L5 12L12 5" stroke="#410F09" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>                                              
                </div>
                <div class="w-[52px] h-[52px] rounded-full flex justify-center items-center text-lg-bold font-display bg-primary-50 hover:bg-primary-100 transition-all transition-300 active:scale-96 hover:cursor-pointer">
                    1
                </div>
                <div class="w-[52px] h-[52px] rounded-full flex justify-center items-center text-lg-bold font-display text-primary-50 bg-primary-950 hover:bg-primary-900 transition-all transition-300 active:scale-96 hover:cursor-pointer">
                    2
                </div>
                <div class="w-[52px] h-[52px] rounded-full flex justify-center items-center text-lg-bold font-display bg-primary-50 hover:bg-primary-100 transition-all transition-300 active:scale-96 hover:cursor-pointer">
                    3
                </div>
                <div class="w-[52px] h-[52px] rounded-full flex justify-center items-center text-lg-bold font-display bg-primary-50 hover:bg-primary-100 transition-all transition-300 active:scale-96 hover:cursor-pointer">
                    4
                </div>
                <div class="w-[52px] h-[52px] rounded-full flex justify-center items-center text-lg-bold font-display bg-primary-50 hover:bg-primary-100 transition-all transition-300 active:scale-96 hover:cursor-pointer">
                    5
                </div>
                <div class="w-[52px] h-[52px] rounded-full flex justify-center items-center text-lg-bold font-display bg-primary-50 hover:bg-primary-100 transition-all transition-300 active:scale-96 hover:cursor-pointer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19" stroke="#410F09" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 5L19 12L12 19" stroke="#410F09" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>                        
                </div>
                
            </div>
        </div>
        {/if}
    </div>
</section>

<div class="flex h-[2000px] bg-white"></div>
<!-- <ul>
    {#each data.posts?.data as post }
        <li><a href="/blog/{post.slug}">{post.title}</a></li>
    {/each}
</ul> -->