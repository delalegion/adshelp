import type { PageLoad } from './$types.js';
import { STRAPI_KEY, STRAPI_BASE } from "$env/static/private";

export const load = (async ({params}) => {

    let response = await fetch(STRAPI_BASE + '/api/articles?populate=*&filters[slug][$eq]='+params.article, {
        headers: {
            'Authorization': STRAPI_KEY
        }
    });
    const posts = await response.json();
    console.log('Post: ', posts)
    console.log('Cover: ', posts.data[0].cover)
    console.log('Blocks: ', posts.data[0].blocks)
    return {};
}) satisfies PageLoad;