import type { PageServerLoad } from './$types.js';
import { STRAPI_KEY, STRAPI_BASE } from "$env/static/private";

export const load = (async ({params}) => {
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

    return { article, posts };
  } catch (error) {

    console.error('Error loading articles:', error);
    return {
      article: [],
      posts: [],
      error: error.message
    };

  }
}) satisfies PageServerLoad;