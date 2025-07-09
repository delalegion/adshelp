// src/routes/sitemap-blog.xml/+server.js
import { getPosts, getCategories } from '$lib/api.js';

export async function GET() {
  const baseUrl = 'https://www.adshelp.pl';
  
  try {
    // Get categories and posts from your data source
    const categories = await getCategories();
    const posts = await getPosts();
    
    // Generate category URLs
    const categoryUrls = categories.map(category => `
  <url>
    <loc>${baseUrl}/blog/category/${category.slug}</loc>
    <lastmod>${category.createdAt || new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`).join('');
    
    // Generate post URLs
    const postUrls = posts.map(post => `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${post.lastmod || post.createdAt || new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('');

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${categoryUrls}
  ${postUrls}
</urlset>`;

    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=300' // Shorter cache on error
      }
    });
  } catch (error) {
    console.error('Error generating blog sitemap:', error);
    
    // Return empty sitemap if there's an error
    const emptySitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
</urlset>`;
    
    return new Response(emptySitemap, {
      headers: {
        'Content-Type': 'application/xml'
      }
    });
  }
}