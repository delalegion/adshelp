<script lang="ts">
    import { goto } from '$app/navigation';
    import ArticleCard from '$lib/components/blog/ArticleCard.svelte';
    import NoArticles from '$lib/components/blog/NoArticles.svelte';
    import { setArticleData } from '$lib/stores/blogStore.js';
    import type { PageData } from './$types';
    import SvelteSeo from 'svelte-seo';
    
    let { data }: { data: PageData } = $props();
    let articles = data.articles.data;
    let error = data.error;
    
</script>

<ul class="space-y-4">
    {#each articles as article}
      <li class="border-b pb-2">
        <a href={`/test/${article.slug}`} class="text-xl text-blue-600 hover:underline">
          {article.title}
        </a>
        <p class="text-sm text-gray-500">{article.date}</p>
      </li>
    {/each}
</ul>