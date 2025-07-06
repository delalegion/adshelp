<script lang="ts">
    let { data }: { data: PageData } = $props();
    let article = data.article;
</script>

  
  <main class="max-w-4xl mx-auto px-4 py-8">
    <article>
      <!-- Article Header -->
      <header class="mb-8">
        <h1 class="text-4xl font-bold mb-4 text-gray-900">{article.title}</h1>
        
        <div class="flex items-center gap-4 text-gray-600 mb-6">
          <span>By {article.author}</span>
          <span>•</span>
          <time datetime={article.publishedAt}>
            {article.publishedAt}
          </time>
          <span>•</span>
          <span>{article.readTime} min read</span>
        </div>
        
        {#if article.tags.length > 0}
          <div class="flex flex-wrap gap-2 mb-6">
            {#each article.tags as tag}
              <span class="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                {tag}
              </span>
            {/each}
          </div>
        {/if}
        
        {#if article.featuredImage}
          <div class="mb-8">
            <img 
              src={article.featuredImage} 
              alt={article.title}
              class="w-full h-64 object-cover rounded-lg"
            />
          </div>
        {/if}
      </header>
      
      <!-- Article Content -->
      <div class="prose prose-lg max-w-none">
        <!-- 
          The @html directive renders the HTML content from the API
          This is crucial for SEO as search engines can crawl the actual HTML content
        -->
        {@html article.content}
      </div>
      
      <!-- Article Footer -->
      <footer class="mt-12 pt-8 border-t border-gray-200">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-gray-600">Published on {article.publishedAt}</p>
            {#if article.updatedAt && article.updatedAt !== article.publishedAt}
              <p class="text-sm text-gray-600">Updated on {article.publishedAt}</p>
            {/if}
          </div>
          
          <!-- Social sharing buttons could go here -->
        </div>
      </footer>
    </article>
  </main>
  