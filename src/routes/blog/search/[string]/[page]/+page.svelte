<script lang="ts">
    import { goto } from '$app/navigation';
    import ArticleCard from '$lib/components/blog/ArticleCard.svelte';
    import NoArticles from '$lib/components/blog/NoArticles.svelte';
    import type { PageData } from './$types';
    import { page as parametrs } from '$app/state';

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