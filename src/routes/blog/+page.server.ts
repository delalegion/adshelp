import type { PageServerLoad } from './$types';
import { STRAPI_KEY } from "$env/static/private";
import { STRAPI_BASE } from "$env/static/private";

export const load = (async () => {
    let response = await fetch(STRAPI_BASE + '/api/articles?populate=*', {
        headers: {
            'Authorization': STRAPI_KEY
        }
    });
    const posts = await response.json();

    return { posts };
}) satisfies PageServerLoad;