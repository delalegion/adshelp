import type { PageServerLoad } from './$types.js';
import { STRAPI_KEY, STRAPI_BASE } from "$env/static/private";

export const load = (async () => {
  try {
    let response = await fetch(STRAPI_BASE + '/api/articles?fields[0]=description&fields[1]=slug&fields[2]=title&fields[3]=publishedAt&populate[category][fields]&populate[cover][fields]&pagination[page]=1&pagination[pageSize]=8', {
        headers: {
            'Authorization': STRAPI_KEY
        }
    });
    if (!response.ok) {
      throw new Error('Failed to fetch articles');
    }
    const articles = response.json();

    return { streamed: { articles } };
  } catch (error) {
    console.error('Error loading articles:', error);
    return {
      articles: [],
      error: error.message
    };
  }
}) satisfies PageServerLoad;