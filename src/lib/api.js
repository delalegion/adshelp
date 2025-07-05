import { STRAPI_KEY, STRAPI_BASE } from "$env/static/private";

// APIS FOR GENERATE SITEMAPS, ROBOTS
export async function getPosts() {
    const dataPromise = new Promise(async (resolve, reject) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));

            let response = await fetch(STRAPI_BASE + '/api/articles?fields[0]=slug&fields[1]=updatedAt&fields[2]=createdAt', {
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
    return dataPromise;
}
export async function getCategories() {
    const categoriesPromise = new Promise(async (resolve, reject) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));

            let response = await fetch(STRAPI_BASE + '/api/categories?fields[0]=name&fields[1]=slug&fields[2]=createdAt', {
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
    return categoriesPromise;
}
