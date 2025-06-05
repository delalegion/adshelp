import type { PageServerLoad } from './$types';
import { STRAPI_KEY } from "$env/static/private";
import { STRAPI_BASE } from "$env/static/private";

export const load = (async ({ params }) => {
    let response = await fetch(STRAPI_BASE + '/api/articles?filters[category][slug][$eq]='+params.category+'&populate=category&pagination[page]=1&pagination[pageSize]=8', {
        headers: {
            'Authorization': STRAPI_KEY
        }
    });
    const posts = await response.json();
    let category = params.category;

    return { posts, category };
}) satisfies PageServerLoad;