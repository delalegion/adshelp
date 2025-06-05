import type { PageLoad } from './$types.js';
import { STRAPI_KEY, STRAPI_BASE } from "$env/static/private";

export const load = (async ({params}) => {
    const slug = params.article;
    const dataPromise = new Promise(async (resolve, reject) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));

            let response = await fetch(STRAPI_BASE + '/api/articles?populate=*&filters[slug][$eq]='+slug, {
                headers: {
                    'Authorization': STRAPI_KEY
                }
            });
            const post = await response.json();
            resolve(post.data);
        } catch (error) {
            reject(error);
        }
    })

    let lastPostsAwait = await fetch(STRAPI_BASE + '/api/articles?fields[0]=description&fields[1]=slug&fields[2]=title&fields[3]=publishedAt&populate[category][fields]&populate[cover][fields]&pagination[page]=1&pagination[pageSize]=3');
    const lastPosts = await lastPostsAwait.json();

    return { post: dataPromise, posts: lastPosts };
}) satisfies PageLoad;


// export const load = (async ({params}) => {

//     const dataPromise = new Promise(async (resolve) => {
//         // Simulate or perform your data loading
//         const data = await fetchYourBigData();
//         resolve(data);
//     });
    
//     return {
//         data: dataPromise
//     };
// }) satisfies PageLoad;

