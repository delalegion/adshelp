import type { PageLoad } from './$types.js';
import { STRAPI_KEY, STRAPI_BASE } from "$env/static/private";

export const load = (async ({params}) => {
    const strapiStart = Date.now();
    let response = await fetch(STRAPI_BASE + '/api/articles?populate=*&filters[slug][$eq]='+params.article, {
        headers: {
            'Authorization': STRAPI_KEY
        }
    });
    const post = await response.json();

    let lastPostsAwait = await fetch(STRAPI_BASE + '/api/articles?fields[0]=description&fields[1]=slug&fields[2]=title&fields[3]=publishedAt&populate[category][fields]&populate[cover][fields]&pagination[page]=1&pagination[pageSize]=3');
    const lastPosts = await lastPostsAwait.json();
    let timer = Date.now() - strapiStart;
    return { post: post.data, posts: lastPosts, timer };
}) satisfies PageLoad;