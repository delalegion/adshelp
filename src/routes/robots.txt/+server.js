// src/routes/robots.txt/+server.js

import { dev } from '$app/environment';

const SITE_URL = dev ? 'http://localhost:5173' : 'https://adshelp.pl';

export async function GET() {
  const robots = dev 
    ? // Development - block all crawlers
      `User-agent: *
Disallow: /

# Development environment - crawling disabled`

    : // Production - SEO optimized
      `# Robots.txt for ${SITE_URL}
# Generated: ${new Date().toISOString()}

# Allow all crawlers access to public content
User-agent: *
Allow: /

# Allow access to CSS, JS, and images for proper rendering
Allow: /css/
Allow: /js/
Allow: /images/
Allow: /_app/
Allow: /favicon.ico
Allow: /manifest.json

# Block duplicate content patterns
Disallow: /*?page=*
Disallow: /*?sort=*
Disallow: /*?filter=*
Disallow: /print/

# Allow social media crawlers for rich previews
User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: LinkedInBot
Allow: /

User-agent: WhatsApp
Allow: /

# Sitemaps
Sitemap: ${SITE_URL}/sitemap.xml
Sitemap: ${SITE_URL}/sitemap-blog.xml

# Host directive (helps with canonicalization)
Host: ${new URL(SITE_URL).hostname}`;

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400' // Cache for 24 hours
    }
  });
}