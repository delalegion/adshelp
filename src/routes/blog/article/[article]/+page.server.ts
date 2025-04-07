import type { PageLoad } from './$types.js';
import { STRAPI_KEY, STRAPI_BASE } from "$env/static/private";

export const load = (async ({params}) => {
    let response = await fetch(STRAPI_BASE + '/api/articles?populate=*&filters[slug][$eq]='+params.article, {
        headers: {
            'Authorization': STRAPI_KEY
        }
    });
    const post = await response.json();

    let lastPostsAwait = await fetch(STRAPI_BASE + '/api/articles?populate=*&pagination[page]=1&pagination[pageSize]=3');
    const lastPosts = await lastPostsAwait.json();

    // console.log('Post: ', posts)
    // console.log('Cover: ', posts.data[0].cover)
    // console.log('Blocks: ', posts.data[0].blocks)
    return { post: post.data, posts: lastPosts };
}) satisfies PageLoad;