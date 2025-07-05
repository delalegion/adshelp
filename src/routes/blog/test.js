import { Resend } from 'resend';
import { RESEND } from '$env/static/private';
import { MessageForm } from '$lib/server/user-operations.js';
import { fail } from '@sveltejs/kit';

export const actions = {
    auditOnContact: async ({ request }) => {
        const form = await request.formData();

        const allegroName = form.get('msg_audit_account_name_copy');
        const email = form.get('msg_audit_email');
        const phone = form.get('msg_audit_phone');
        const name = form.get('msg_audit_name');

        const resend = new Resend(RESEND);
        const { data, error } = await resend.emails.send({
            from: 'kontakt@adshelp.pl',
            to: ['marcinadshelp@gmail.com'],
            subject: 'Adshelp - Nowy audyt z bloga',
            html: '<strong>Imię i nazwisko: '+name+' </strong><br/> <strong>Email: '+email+'</strong><br /> <strong>Nr tel.: '+phone+'</strong><br /><strong>Nazwa allegro: '+allegroName+' </strong><br />',
        });

        if (error) {
            return fail(400, { error: error.message });
        }

        return { success: true };
    },
    
    auditOnBlog: async ({ request }) => {
        const form = await request.formData();

        const allegroName = form.get('blog_audit_account_name_copy');
        const email = form.get('blog_audit_email');
        const phone = form.get('blog_audit_phone');
        const name = form.get('blog_audit_name');

        const resend = new Resend(RESEND);
        const { data, error } = await resend.emails.send({
            from: 'kontakt@adshelp.pl',
            to: ['marcinadshelp@gmail.com'],
            subject: 'Adshelp - Nowy audyt z bloga',
            html: '<strong>Imię i nazwisko: '+name+' </strong><br/> <strong>Email: '+email+'</strong><br /> <strong>Nr tel.: '+phone+'</strong><br /><strong>Nazwa allegro: '+allegroName+' </strong><br />',
        });

        if (error) {
            return fail(400, { error: error.message });
        }

        return { success: true };
    },
    
    contact: async ({ request }) => {
        const data = await request.formData();
        return await MessageForm(data);
    }
}