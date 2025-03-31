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

        const resend = new Resend(RESEND);
        const { data, error } = await resend.emails.send({
			from: 'Acme <onboarding@resend.dev>',
			to: ['delalegion99@gmail.com'],
			subject: 'Adshelp - Nowy audyt z headeru',
			html: '<strong>Imię i nazwisko: '+name+' </strong><br/> <strong>Email: '+email+'</strong><br /> <strong>Nr tel.: '+phone+'</strong><br /><strong>Nazwa allegro: '+allegroName+' </strong><br />',
		});

        if (error) {
			return console.log({ error });
		}

        return { success: true };

    },
    auditOnContact: async ({ request }: { request: Request }) => {
        const form = await request.formData();

        const allegroName = form.get('ctc_audit_account_name_copy') as string;
        const email = form.get('ctc_audit_email') as string;
        const phone = form.get('ctc_audit_phone') as string;
        const name = form.get('ctc_audit_name') as string;

        const resend = new Resend(RESEND);
        const { data, error } = await resend.emails.send({
			from: 'Acme <onboarding@resend.dev>',
			to: ['delalegion99@gmail.com'],
			subject: 'Adshelp - Nowy audyt z kontaktu',
			html: '<strong>Imię i nazwisko: '+name+' </strong><br/> <strong>Email: '+email+'</strong><br /> <strong>Nr tel.: '+phone+'</strong><br /><strong>Nazwa allegro: '+allegroName+' </strong><br />',
		});

        if (error) {
			return console.log({ error });
		}

        return { success: true };

    },
    auditOnConsult: async ({ request }: { request: Request }) => {
        const form = await request.formData();

        const allegroName = form.get('cns_audit_account_name_copy') as string;
        const email = form.get('cns_audit_email') as string;
        const phone = form.get('cns_audit_phone') as string;
        const name = form.get('cns_audit_name') as string;

        const resend = new Resend(RESEND);
        const { data, error } = await resend.emails.send({
			from: 'Acme <onboarding@resend.dev>',
			to: ['delalegion99@gmail.com'],
			subject: 'Adshelp - Nowy audyt środkowy',
			html: '<strong>Imię i nazwisko: '+name+' </strong><br/> <strong>Email: '+email+'</strong><br /> <strong>Nr tel.: '+phone+'</strong><br /><strong>Nazwa allegro: '+allegroName+' </strong><br />',
		});

        if (error) {
			return console.log({ error });
		}

        return { success: true };

    },
    contact: async ({ request }: { request: Request }) => {
        const form = await request.formData();
   
        const email = form.get('ctc_email') as string;
        const phone = form.get('ctc_phone') as string;
        const name = form.get('ctc_name') as string;
        const company = form.get('ctc_company') as string;
        const message = form.get('ctc_message') as string;
        const checkbox = form.get('ctc_terms') as string;

        if (name.length < 3) {
            return fail(400, { name, nameError: true })
        }
        if (company.length < 3) {
            return fail(400, { company, companyError: true })
        }
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		if (!emailRegex.test(email) && email.length < 5) {
			return fail(400, { email, emailError: true })
		}
        const numberRegex = /^(\+48\s?)?(\d{3}[-\s]?\d{3}[-\s]?\d{3})$/;
		if (!numberRegex.test(phone)) {
			return fail(400, { phone, phoneError: true })
		}
        if (message.length < 10) {
            return fail(400, { message, messageError: true })
        }
        if (checkbox !== "on") {
			return fail(400, { checkbox, checkboxError: true })
		}

        const resend = new Resend(RESEND);
        const { data, error } = await resend.emails.send({
			from: 'Acme <onboarding@resend.dev>',
			to: ['delalegion99@gmail.com'],
			subject: 'Adshelp - Formularz kontaktowy',
			html: '<strong>Imię i nazwisko lub firma: '+name+' '+company+' </strong><br/> <strong>Email: '+email+'</strong><br /> <strong>Nr tel.: '+phone+'</strong><br /><strong>Wiadomość: '+message+' </strong><br />',
		});

        if (error) {
			return console.log({ error });
		}

        return { success: true };
    }
}