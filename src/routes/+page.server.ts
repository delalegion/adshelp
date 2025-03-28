import { Resend } from 'resend';
import { RESEND } from '$env/static/private';
import { fail } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
    audit: async ({ request }: { request: Request }) => {
        const form = await request.formData();

        const allegroName = form.get('audit_account_name_copy') as string;
        const email = form.get('audit_email') as string;
        const phone = form.get('audit_phone') as string;
        const name = form.get('audit_name') as string;

        console.log(allegroName);
        console.log(email);
        const resend = new Resend(RESEND);
        const { data, error } = await resend.emails.send({
			from: 'Acme <onboarding@resend.dev>',
			to: ['delalegion99@gmail.com'],
			subject: 'Adshelp - Nowy audyt',
			html: '<strong>Imię i nazwisko: '+name+' </strong><br/> <strong>Email: '+email+'</strong><br /> <strong>Nr tel.: '+phone+'</strong><br /><strong>Nazwa allegro: '+allegroName+' </strong><br />',
		});

        if (error) {
			return console.log({ error });
		}

        return { success: true };

    }
}