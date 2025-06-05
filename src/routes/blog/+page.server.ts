import type { PageServerLoad } from './$types';
import { STRAPI_KEY } from "$env/static/private";
import { STRAPI_BASE } from "$env/static/private";
import { Resend } from 'resend';
import { RESEND } from '$env/static/private';
import { fail } from '@sveltejs/kit';
import { MessageForm } from '$lib/server/user-operations.js';

export const load = (async () => {
    let response = await fetch(STRAPI_BASE + '/api/articles?fields[0]=description&fields[1]=slug&fields[2]=title&fields[3]=publishedAt&populate[category][fields]&populate[cover][fields]&pagination[page]=1&pagination[pageSize]=8', {
        headers: {
            'Authorization': STRAPI_KEY
        }
    });
    const posts = await response.json();

    return { posts };
}) satisfies PageServerLoad;

/** @type {import('./$types').Actions} */
export const actions = {
    auditOnContact: async ({ request }: { request: Request }) => {
        const form = await request.formData();

        const allegroName = form.get('msg_audit_account_name_copy') as string;
        const email = form.get('msg_audit_email') as string;
        const phone = form.get('msg_audit_phone') as string;
        const name = form.get('msg_audit_name') as string;

        const resend = new Resend(RESEND);
        const { data, error } = await resend.emails.send({
			from: 'kontakt@adshelp.pl',
			to: ['marcinadshelp@gmail.com'],
			subject: 'Adshelp - Nowy audyt z bloga',
			html: '<strong>Imię i nazwisko: '+name+' </strong><br/> <strong>Email: '+email+'</strong><br /> <strong>Nr tel.: '+phone+'</strong><br /><strong>Nazwa allegro: '+allegroName+' </strong><br />',
		});

        if (error) {
			return console.log({ error });
		}

        return { success: true };

    },
    auditOnBlog: async ({ request }: { request: Request }) => {
        const form = await request.formData();

        const allegroName = form.get('blog_audit_account_name_copy') as string;
        const email = form.get('blog_audit_email') as string;
        const phone = form.get('blog_audit_phone') as string;
        const name = form.get('blog_audit_name') as string;

        const resend = new Resend(RESEND);
        const { data, error } = await resend.emails.send({
			from: 'kontakt@adshelp.pl',
			to: ['marcinadshelp@gmail.com'],
			subject: 'Adshelp - Nowy audyt z bloga',
			html: '<strong>Imię i nazwisko: '+name+' </strong><br/> <strong>Email: '+email+'</strong><br /> <strong>Nr tel.: '+phone+'</strong><br /><strong>Nazwa allegro: '+allegroName+' </strong><br />',
		});

        if (error) {
			return console.log({ error });
		}

        return { success: true };

    },
    contact: async ({ request }: { request: Request }) => {
        const data = await request.formData();
        return await MessageForm(data);
    }
}