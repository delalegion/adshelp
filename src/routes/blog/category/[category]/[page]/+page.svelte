<script lang="ts">
    import type { PageData } from './$types';
    let { data }: { data: PageData } = $props();
    import { setArticleData } from '$lib/stores/blogStore.js';
    import { page } from '$app/state';

    $effect(() => {
        setArticleData({
            articles: data.posts.data, category: page.params.category, meta: data.posts.meta
        })
    })
</script>