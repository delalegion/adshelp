<script lang="ts">
    import type { PageData } from './$types.js';
    let { data }: { data: PageData } = $props();
    import { setArticleData } from '$lib/stores/blogStore.js';
    import { onMount } from 'svelte';

    $effect(() => {
        setArticleData({
            articles: data.posts.data, category: 'all', meta: data.posts.meta
        })
    })
</script>