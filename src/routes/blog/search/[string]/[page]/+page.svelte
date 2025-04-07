<script lang="ts">
    import type { PageData } from './$types';
    let { data }: { data: PageData } = $props();

    // Components
    import ArticleSection from '$lib/components/blog/ArticleSection.svelte';
</script>

<ArticleSection data={data.posts.data} type="search" string={data.string} page={data.posts.meta.pagination.page} total={data.posts.meta.pagination.pageCount} array={Array(data.posts.meta.pagination.pageCount)} />
