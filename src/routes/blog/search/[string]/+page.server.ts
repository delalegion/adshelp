import type { PageServerLoad } from './$types.js';
import { STRAPI_KEY, STRAPI_BASE } from "$env/static/private";
import { Resend } from 'resend';
import { RESEND } from '$env/static/private';
import { AuditForm, MessageForm } from '$lib/server/user-operations.js';

export const load = (async ({ params }) => {
  try {
    let response = await fetch(STRAPI_BASE + '/api/articles?fields[0]=description&fields[1]=slug&fields[2]=title&fields[3]=publishedAt&populate[category][fields]&populate[cover][fields]&pagination[page]=1&pagination[pageSize]=8&filters[title][$containsi]='+params.string, {
        headers: {
            'Authorization': STRAPI_KEY
        }
    });
    if (!response.ok) {
      throw new Error('Failed to fetch articles');
    }
    const articles = await response.json();

    return { articles };
  } catch (error) {
    console.error('Error loading articles:', error);
    return {
      articles: [],
      error: error.message
    };
  }
}) satisfies PageServerLoad;

export const actions = {
  contact: MessageForm,
  audit: AuditForm
};