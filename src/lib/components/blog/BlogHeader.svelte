<script>
    import { categoryMenuActive, entriesData } from '$lib/stores/blogStore.js';
    import { get } from 'svelte/store';
    import { changeCategory } from '$lib/utils/Blog.js';

    // Categories
    const entries = Object.entries(get(entriesData));

    // Images
    import phones from '$lib/assets/phones-blog.png?enhanced';

    // Components 
    import Button from '../Button.svelte';

    // Swiper
    import { register } from 'swiper/element/bundle';
    import { onMount } from 'svelte';
    register();

    onMount(() => {
        // swiper element
        const swiperEl = document.querySelector('swiper-container');

        // swiper parameters
        const swiperParams = {
            slidesPerView: "auto",
            spaceBetween: 10,
            breakpoints: {
                640: {
                    spaceBetween: 20
                },
            },
            freeMode: true,
            on: {
                init() {
                // ...
                },
            },
        };
        Object.assign(swiperEl, swiperParams);

        // and now initialize it
        swiperEl.initialize();
    })

</script>

<style>
    .swiper, .swiper-horizontal {
        overflow: visible;
    }
</style>

<header id="header" class="bg-primary-950 bg-[url('/src/lib/assets/bg-blog.png')] bg-center relative">
    <div class="bg-primary-dark sticky top-0 py-3 sm:py-5 overflow-visible">
        <swiper-container
            init="false"
        >
            {#each entries as [key, value], i}
                <swiper-slide tabindex="0" onclick={() => {changeCategory(value[1], i+1); location.href="#blog-config"}} onkeydown={() => {changeCategory(value[1], i+1); location.href="#blog-config"}} role="button" class="{i === 0 ? 'ml-6' : ''} {i === 16 ? 'mr-6' : ''} {$categoryMenuActive === i+1 ? 'border-2 border-primary-500' : ''} border-2 inline-flex h-full max-w-fit flex-row gap-3 rounded-full bg-primary-950 text-sm-bold text-primary-300 px-3 sm:px-4 py-1 sm:py-2 items-center hover:bg-primary-950/70 active:scale-98 transition-all transition-300 hover:cursor-pointer">
                    {#if $categoryMenuActive === i+1}
                        <div class="h-[30px] sm:h-[38px] flex items-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 8L9.375 17L5 12.9091" stroke="#F36020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    {:else}
                        <div class="flex h-[30px] sm:h-[38px] justify-center items-center">
                            <img src={value[0]} alt="{value[1]} icon" class="h-full" />
                        </div>
                    {/if}
                    {value[1]}
                </swiper-slide>
            {/each}
        </swiper-container>
    </div>
    <div class="flex justify-center">
        <div class="container px-6 pt-8 xs:pt-12 sm:pt-24">
            <div class="grid grid-cols-4">
                <div class="col-span-4 md:col-span-3">
                    <div class="flex flex-col gap-4 md:gap-8">
                        <h1 class="text-4xl-bold min-[375px]:text-5xl-bold sm:text-6xl-bold md:text-7xl-bold lg:text-8xl-bold font-display text-primary-500">
                            ODKRYJ ŚWIAT
                            MARKETINGU!
                        </h1>  
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