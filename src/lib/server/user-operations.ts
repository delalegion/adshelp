import { Resend } from 'resend';
import { RESEND } from '$env/static/private';
import { fail } from '@sveltejs/kit';

export async function MessageForm({ request }: { request: Request }) {
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
        subject: 'Adshelp - Formularz kontaktowy',
        html: '<strong>Imię i nazwisko lub firma: '+name+' '+company+' </strong><br/> <strong>Email: '+email+'</strong><br /> <strong>Nr tel.: '+phone+'</strong><br /><strong>Wiadomość: '+message+' </strong><br />',
    });

    if (error) {
        return console.log({ error });
    }

    return { successContact: true };
}

export async function ConsultForm({ request }: { request: Request }) {
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
        subject: 'Adshelp - Konsultacja',
        html: '<strong>Imię i nazwisko lub firma: '+name+' '+company+' </strong><br/><strong>Nr tel.: '+phone+'</strong><br /><strong>Wiadomość: '+message+' </strong><br />',
    });

    if (error) {
        return console.log({ error });
    }

    return { successConsult: true, phone, company, message, name };
}

export async function AuditForm({ request }: { request: Request }) {
    const form = await request.formData();

    const allegroName = form.get('audit_account_name_copy') as string;
    const email = form.get('audit_email') as string;
    const phone = form.get('audit_phone') as string;
    const name = form.get('audit_name') as string;

    const resend = new Resend(RESEND);
    const { data, error } = await resend.emails.send({
        from: 'kontakt@adshelp.pl',
        to: ['marcinadshelp@gmail.com'],
        subject: 'Adshelp - Nowy audyt',
        html: '<strong>Imię i nazwisko: '+name+' </strong><br/> <strong>Email: '+email+'</strong><br /> <strong>Nr tel.: '+phone+'</strong><br /><strong>Nazwa allegro: '+allegroName+' </strong><br />',
    });

    if (error) {
        return console.log({ error });
    }

    return { success: true };
}

export async function AuditHomepageForm({ request }: { request: Request }) {
    const form = await request.formData();

    const allegroName = form.get('cns_audit_account_name_copy') as string;
    const email = form.get('cns_audit_email') as string;
    const phone = form.get('cns_audit_phone') as string;
    const name = form.get('cns_audit_name') as string;

    const resend = new Resend(RESEND);
    const { data, error } = await resend.emails.send({
        from: 'kontakt@adshelp.pl',
        to: ['marcinadshelp@gmail.com'],
        subject: 'Adshelp - Nowy audyt',
        html: '<strong>Imię i nazwisko: '+name+' </strong><br/> <strong>Email: '+email+'</strong><br /> <strong>Nr tel.: '+phone+'</strong><br /><strong>Nazwa allegro: '+allegroName+' </strong><br />',
    });

    if (error) {
        return console.log({ error });
    }

    return { success: true };
}

export async function AuditFooterForm({ request }: { request: Request }) {
    const form = await request.formData();

    const allegroName = form.get('msg_audit_account_name_copy') as string;
    const email = form.get('msg_audit_email') as string;
    const phone = form.get('msg_audit_phone') as string;
    const name = form.get('msg_audit_name') as string;

    const resend = new Resend(RESEND);
    const { data, error } = await resend.emails.send({
        from: 'kontakt@adshelp.pl',
        to: ['marcinadshelp@gmail.com'],
        subject: 'Adshelp - Nowy audyt',
        html: '<strong>Imię i nazwisko: '+name+' </strong><br/> <strong>Email: '+email+'</strong><br /> <strong>Nr tel.: '+phone+'</strong><br /><strong>Nazwa allegro: '+allegroName+' </strong><br />',
    });

    if (error) {
        return console.log({ error });
    }

    return { success: true };
}