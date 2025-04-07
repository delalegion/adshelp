<script lang="ts">
    import { categoryMenuActive, entriesData } from '$lib/stores/blogStore.js';
    import type { PageData } from './$types';
    let { data }: { data: PageData } = $props();

    // Components
    import ArticleSection from '$lib/components/blog/ArticleSection.svelte';
    import { onMount } from 'svelte';
    
    onMount(() => {
        let entriesDataObject = Object.keys($entriesData);
        
        entriesDataObject.forEach(function (element, i) {
            if (element === data.category) {
                categoryMenuActive.set(i+1);
            }
        });
    })
</script>

<ArticleSection type={data.category} data={data.posts.data} page={data.posts.meta.pagination.page} total={data.posts.meta.pagination.pageCount} array={Array(data.posts.meta.pagination.pageCount)} />