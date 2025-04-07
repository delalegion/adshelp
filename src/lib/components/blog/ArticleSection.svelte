<script>
    import { loading } from '$lib/stores/blogStore.js';

    let { array, total, data, page, type = 'blog', string = '' } = $props();
    import ArticleCard from '$lib/components/blog/ArticleCard.svelte';
    import NoArticles from '$lib/components/blog/NoArticles.svelte';
    import Loader from '$lib/components/blog/Loader.svelte';
    import { page as pageState } from '$app/state';

    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';

    export const changePage = (pageNumber) => {
        loading.set(true);

        switch (type) {
            case "blog":
                goto('/blog/'+pageNumber, { noScroll: true });
                break;
            case "search":
                goto('/blog/search/'+string+'/'+pageNumber, { noScroll: true });
                break;
            default:
                goto('/blog/category/'+type+'/'+pageNumber, { noScroll: true });
                break;
        }
    }

    onMount(() => {
        $effect(() => {
            if (pageState.url.href) {
                setTimeout(() => {
                    loading.set(false);
                }, 1000)
            }
        })
    })

</script>

<section id="articles" class="py-6 min-[540px]:py-12 md:py-18 px-4 md:px-8 flex justify-center bg-white min-h-screen">
    <div class="max-w-7xl w-full">
        {#if $loading}
            <Loader />
        {:else}
        <div in:fly={{ y: 10, opacity: 0 }} out:fly={{ y: -5, opacity: 0 }}>

            {#if data.length > 0 || data[0]} 
            
                <ArticleCard data={data} />
                
                <!-- Pagination -->
                {#if total > 1}
                    <div class="mt-16 md:mt-32 md:mb-12 flex justify-center">
                        <div class="flex flex-row gap-2">
                            {#if page !== 1}
                                <div onclick={() => changePage(page - 1)} onkeydown={() => changePage(page - 1)} role="button" tabindex="0" class="w-[52px] h-[52px] rounded-full flex justify-center items-center text-lg-bold font-display bg-primary-50 hover:bg-primary-100 transition-all transition-300 active:scale-96 hover:cursor-pointer">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 12L5 12" stroke="#410F09" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12 19L5 12L12 5" stroke="#410F09" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>                                              
                                </div>
                            {/if}
                            {#each array as _, i}
                                <div onclick={() => changePage(i+1)} onkeydown={() => changePage(i+1)} role="button" tabindex="0" class="{page === i+1 ? 'bg-primary-950 text-primary-100 hover:bg-primary-900' : 'bg-primary-50 text-primary-950 hover:bg-primary-100'} w-[52px] h-[52px] rounded-full flex justify-center items-center text-lg-bold font-display  transition-all transition-300 active:scale-96 hover:cursor-pointer">
                                    {i+1}
                                </div>
                            {/each}
                            {#if total > page}
                                <div onclick={() => changePage(page + 1)} onkeydown={() => changePage(page + 1)} role="button" tabindex="0" class="w-[52px] h-[52px] rounded-full flex justify-center items-center text-lg-bold font-display bg-primary-50 hover:bg-primary-100 transition-all transition-300 active:scale-96 hover:cursor-pointer">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12H19" stroke="#410F09" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12 5L19 12L12 19" stroke="#410F09" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>                        
                                </div>
                            {/if}
                        </div>
                    </div>
                {/if}

            {:else}
                <NoArticles />
            {/if}
            </div>
        {/if}
    </div>
</section>