<script>
    import { goto } from '$app/navigation';
    import { categoryMenuActive, sortActive, entriesData, loading } from '$lib/stores/blogStore.js';
    import { changeCategory } from '$lib/utils/Blog.js';
    import { onMount } from 'svelte';
    import { get } from 'svelte/store';
    import { fly } from 'svelte/transition';

    // Categories
    const entries = Object.entries(get(entriesData));

    onMount(() => {
        // Get the input element
        const inputField = document.getElementById('blog_search');

        let typingTimer;
        const doneTypingInterval = 1000;

        inputField.addEventListener('input', function() {
            typingTimer = setTimeout(doneTyping, doneTypingInterval);
        });

        async function doneTyping() {
            categoryMenuActive.set(0);
            
            let inputFieldValue = inputField.value;
            if (inputFieldValue.length === 0) {
                goto('/blog', { noScroll: true });
                loading.set(true);
            } else {
                goto('/blog/search/'+inputField.value, { noScroll: true });
                loading.set(true);
            }
        }

        document.addEventListener("click", function(e) {
            sortActive.set(false);
        })

    })
</script>

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
                <p class="text-lg-bold font-display text-primary-950 mr-6">Sortuj według</p>
                <div>
                    <div class="relative">
                        <div onclick={(e) => { sortActive.set(!$sortActive); e.stopPropagation(); }} onkeydown={(e) => { sortActive.set(!$sortActive); e.stopPropagation();}} role="button" tabindex="0" class="hover:cursor-pointer inline-flex py-3 px-4 text-sm-bold font-display text-primary-950 shadow-md rounded-full gap-2 border-2 transition-all transition-300">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8945 3H3.89453V12H10.8945V3Z" stroke="#410F09" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M21.8945 3H14.8945V8H21.8945V3Z" stroke="#410F09" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M21.8945 12H14.8945V21H21.8945V12Z" stroke="#410F09" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.8945 16H3.89453V21H10.8945V16Z" stroke="#410F09" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>                
                            {#if $categoryMenuActive === 0}
                                Wszystkie artykuły
                            {/if}
                            {#each entries as [key, value], i}
                                {#if $categoryMenuActive === i+1}
                                    {value[1]}
                                {/if}
                            {/each}
                        </div>
                        {#if $sortActive}
                            <div class="absolute top-14 right-0 flex flex-col p-2 rounded-md bg-white shadow-md w-[300px]" transition:fly={{ y: 10, opacity: 0, duration: 300 }}>
                                <div onkeydown={() => changeCategory('all', 0)} onclick={() => changeCategory('all', 0)} role="button" tabindex="0" class="flex flex-row gap-2 w-full py-3 px-4 hover:bg-primary-50 rounded-sm hover:cursor-pointer">
                                    {#if $categoryMenuActive === 0}
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 8L9.375 17L5 12.9091" stroke="#F36020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>   
                                    {/if}
                                    <p class="text-sm-bold">Wszystkie artykuły</p>
                                </div>
                                {#each entries as [key, value], i}
                                    <div onkeydown={() => changeCategory(value[1], i+1)} onclick={() => changeCategory(value[1], i+1)} role="button" tabindex="0" class="flex flex-row gap-2 w-full py-3 px-4 hover:bg-primary-50 rounded-sm hover:cursor-pointer">
                                        {#if $categoryMenuActive === i+1}
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