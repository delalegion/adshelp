import { dev } from '$app/environment';
import { getPosts, getCategories } from '$lib/api.js';

const SITE_URL = 'https://adshelp.pl';

/**
 * Generate XML sitemap entry
 */
function createUrlEntry(url, lastmod, changefreq = 'weekly', priority = '0.5') {
    return `
    <url>
      <loc>${url}</loc>
      <lastmod>${lastmod}</lastmod>
      <changefreq>${changefreq}</changefreq>
      <priority>${priority}</priority>
    </url>`;
}

/**
 * Get all static routes
 */
function getStaticRoutes() {
    const staticPages = [
      { path: '', changefreq: 'weekly', priority: '1.0' },
      // { path: '/allegro', changefreq: 'weekly', priority: '0.7' },
      { path: '/contact', changefreq: 'yearly', priority: '0.8' },
      { path: '/blog', changefreq: 'daily', priority: '0.9' }
    ];
  
    return staticPages.map(page => 
      createUrlEntry(
        `${SITE_URL}${page.path}`,
        new Date().toISOString(),
        page.changefreq,
        page.priority
      )
    ).join('');
}

/**
 * Main GET handler
 */
export async function GET() {
    try {
        // Fetch all route types
        const [staticRoutes] = await Promise.all([
          getStaticRoutes()
        ]);

        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${staticRoutes}
        
        <!-- Reference to blog sitemap -->
        <sitemap>
            <loc>${SITE_URL}/sitemap-blog.xml</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
        </sitemap>
        
        </sitemapindex>`;

        return new Response(sitemap.trim(), {
            headers: {
                'Content-Type': 'application/xml',
                'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
            }
        });
                 
    } catch (error) {
        console.error('Error generating sitemap:', error);
                 
        // Return minimal sitemap on error
        const fallbackSitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            <sitemap>
                <loc>${SITE_URL}/sitemap-blog.xml</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
            </sitemap>
        </sitemapindex>`;

        return new Response(fallbackSitemap, {
          headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=300' // Shorter cache on error
          }
        });
    }
}