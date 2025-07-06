// src/routes/blog/[slug]/+page.server.js
import { error } from '@sveltejs/kit';
import { STRAPI_KEY, STRAPI_BASE } from "$env/static/private";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, fetch }) {
  const { slug } = params;
  
  try {
    // Fetch article data from external API
    const response = await fetch(STRAPI_BASE + `/api/articles?populate=*&filters[slug][$eq]=${params.slug}`);
    
    if (!response.ok) {
      throw error(response.status, 'Article not found');
    }
    
    const article = await response.json();
    
    // Transform/sanitize the content if needed
    const processedArticle = {
      id: article.data[0].id,
      title: article.data[0].title,
      content: article.data[0].artykul, // HTML content from API
      excerpt: article.excerpt || generateExcerpt(article.data[0].artykul),
      author: article.author,
      publishedAt: article.data[0].publishedAt,
      updatedAt: article.data[0].updatedAt,
      tags: article.tags || [],
      featuredImage: article.data[0].cover,
      slug: article.data[0].slug,
      metaDescription: article.metaDescription || generateMetaDescription(article.data[0].artykul),
      canonicalUrl: article.canonicalUrl,
      readTime: calculateReadTime(article.data[0].artykul)
    };
    
    return {
      article: processedArticle
    };
  } catch (err) {
    console.error('Error fetching article:', err);
    throw error(500, 'Failed to load article');
  }
}

// Helper function to generate excerpt from content
function generateExcerpt(content, maxLength = 160) {
  if (!content) return '';
  
  // Strip HTML tags and get plain text
  const plainText = content.replace(/<[^>]*>/g, '').trim();
  
  if (plainText.length <= maxLength) return plainText;
  
  // Find the last space before maxLength to avoid cutting words
  const lastSpace = plainText.lastIndexOf(' ', maxLength);
  return plainText.substring(0, lastSpace) + '...';
}

// Helper function to generate meta description
function generateMetaDescription(content, maxLength = 155) {
  if (!content) return '';
  
  const plainText = content.replace(/<[^>]*>/g, '').trim();
  
  if (plainText.length <= maxLength) return plainText;
  
  const lastSpace = plainText.lastIndexOf(' ', maxLength);
  return plainText.substring(0, lastSpace) + '...';
}

// Helper function to calculate read time
function calculateReadTime(content) {
  if (!content) return 0;
  
  const plainText = content.replace(/<[^>]*>/g, '');
  const words = plainText.split(/\s+/).length;
  const readTimeMinutes = Math.ceil(words / 200); // Average reading speed
  
  return readTimeMinutes;
}