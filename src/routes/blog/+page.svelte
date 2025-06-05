<script lang="ts">
    import type { PageData } from './$types';
    let { data }: { data: PageData } = $props();
    import { setArticleData } from '$lib/stores/blogStore.js';
    import { onMount } from 'svelte';

    onMount(() => {
        setArticleData({
            articles: data.posts.data, category: 'all', meta: data.posts.meta
        })
    })
</script>