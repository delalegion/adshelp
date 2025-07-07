import type { PageServerLoad, EntryGenerator } from './$types.js';
import { STRAPI_KEY, STRAPI_BASE } from "$env/static/private";

/**
 * Extracts H2 elements and creates table of contents
 * @param {string} htmlContent - The HTML content as a string
 * @returns {Array} - Array of table of contents objects
 */
function extractTableOfContents(htmlContent) {
  const h2Regex = /<h2[^>]*>(.*?)<\/h2>/gi;
  const tableOfContents = [];
  let match;
  let index = 1;
  
  while ((match = h2Regex.exec(htmlContent)) !== null) {
    // Remove HTML tags from the content to get clean text
    const cleanText = match[1].replace(/<[^>]*>/g, '').trim();
    
    tableOfContents.push({
      id: `h2-${index}`,
      text: cleanText,
      level: 2
    });
    
    index++;
  }
  
  return tableOfContents;
}

/**
 * Adds incremental IDs to all H2 elements in HTML
 * @param {string} htmlContent - The HTML content as a string
 * @returns {string} - HTML with IDs added to H2 elements
 */
function addIdsToH2Elements(htmlContent) {
  let index = 1;
  
  return htmlContent.replace(/<h2([^>]*)>/gi, (match, attributes) => {
    // Check if ID already exists
    if (attributes.includes('id=')) {
      return match; // Don't modify if ID already exists
    }
    
    const id = `h2-${index}`;
    index++;
    
    // Add ID to the H2 element
    if (attributes.trim()) {
      return `<h2${attributes} id="${id}">`;
    } else {
      return `<h2 id="${id}">`;
    }
  });
}

export const load = (async ({ params }) => {
  try {
    let response = await fetch(STRAPI_BASE + `/api/articles?populate=*&filters[slug][$eq]=${params.slug}`, {
        headers: {
            'Authorization': STRAPI_KEY
        }
    });
    let lastPostsAwait = await fetch(STRAPI_BASE + '/api/articles?fields[0]=description&fields[1]=slug&fields[2]=title&fields[3]=publishedAt&populate[category][fields]&populate[cover][fields]&pagination[page]=1&pagination[pageSize]=3');

    if (!response.ok && !lastPostsAwait.ok) {
      throw new Error('Failed to fetch articles');
    }

    const article = await response.json();
    const posts = await lastPostsAwait.json();

  // Process article content if it exists
  if (article.data && article.data.length > 0) {
    const articleData = article.data[0];
    
    // Assuming your article content is in articleData.content or articleData.body
    // Adjust the field name based on your Strapi content structure
    const contentField = articleData.artykul || '';
    
    if (contentField) {
      // Extract table of contents
      const tableOfContents = extractTableOfContents(contentField);
      
      // Add IDs to H2 elements
      const processedContent = addIdsToH2Elements(contentField);
      
      // Add the processed data to the article
      articleData.processedContent = processedContent;
      articleData.tableOfContents = tableOfContents;
    }
    
    // Update the article data with processed content
    article.data[0] = articleData;
  }

    return { article, posts, prerendered: true };
  } catch (error) {
    console.error('Error loading articles:', error);
    return {
      article: [],
      posts: [],
      error: error.message
    };
  }
}) satisfies PageServerLoad;

export const entries = (async () => {
  try {
    // Pobierz wszystkie artykuły żeby uzyskać ich slug-i
    const response = await fetch(STRAPI_BASE + '/api/articles?fields[0]=slug', {
      headers: {
        'Authorization': STRAPI_KEY
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch articles for prerendering');
    }

    const data = await response.json();
    
    // Zwróć tablicę obiektów z parametrami dla każdej strony
    return data.data.map((article: any) => ({
      slug: article.slug
    }));
  } catch (error) {
    console.error('Error fetching entries for prerendering:', error);
    return [];
  }
}) satisfies EntryGenerator;

export const prerender = true;