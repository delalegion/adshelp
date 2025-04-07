import { Resend } from 'resend';
import { RESEND } from '$env/static/private';
import { fail } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
    contactToMessage: async ({ request }: { request: Request }) => {
        const form = await request.formData();
   
        const email = form.get('msg_email') as string;
        const phone = form.get('msg_phone') as string;
        const name = form.get('msg_name') as string;
        const company = form.get('msg_company') as string;
        const message = form.get('msg_message') as string;
        const checkbox = form.get('msg_terms') as string;

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
			from: 'kontakt@adshelp.pl',
			to: ['marcinadshelp@gmail.com'],
			subject: 'Adshelp - Kontakt - Wiadomosc',
			html: '<strong>Imię i nazwisko lub firma: '+name+' '+company+' </strong><br/> <strong>Email: '+email+'</strong><br /> <strong>Nr tel.: '+phone+'</strong><br /><strong>Wiadomość: '+message+' </strong><br />',
		});

        if (error) {
			return console.log({ error });
		}

        return { success: true, email, phone, company, message, name };
    },
    contactToConsult: async ({ request }: { request: Request }) => {
        const form = await request.formData();

        const phone = form.get('cns_phone') as string;
        const name = form.get('cns_name') as string;
        const company = form.get('cns_company') as string;
        const message = form.get('cns_message') as string;
        const checkbox = form.get('cns_terms') as string;

        if (name.length < 3) {
            return fail(400, { name, nameErrorConsult: true })
        }
        if (company.length < 3) {
            return fail(400, { company, companyErrorConsult: true })
        }
        const numberRegex = /^(\+48\s?)?(\d{3}[-\s]?\d{3}[-\s]?\d{3})$/;
        if (!numberRegex.test(phone)) {
            return fail(400, { phone, phoneErrorConsult: true })
        }
        if (message.length < 10) {
            return fail(400, { message, messageErrorConsult: true })
        }
        if (checkbox !== "on") {
            return fail(400, { checkbox, checkboxErrorConsult: true })
        }

        const resend = new Resend(RESEND);
        const { data, error } = await resend.emails.send({
            from: 'kontakt@adshelp.pl',
            to: ['marcinadshelp@gmail.com'],
            subject: 'Adshelp - Kontakt - Konsultacja',
            html: '<strong>Imię i nazwisko lub firma: '+name+' '+company+' </strong><br/><strong>Nr tel.: '+phone+'</strong><br /><strong>Wiadomość: '+message+' </strong><br />',
        });

        if (error) {
            return console.log({ error });
        }

        return { successConsult: true, phone, company, message, name };
    }
}