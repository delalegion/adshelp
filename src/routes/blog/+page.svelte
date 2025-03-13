<script lang="ts">
    import type { PageData } from './$types';

   let { data }: { data: PageData } = $props();
</script>

<h1>Blog page</h1>
<p>Lista artykułów:</p>
<ul>
    {#each data.posts?.data as post }
        <li><a href="/blog/{post.slug}">{post.title}</a></li>
    {/each}
</ul>