import { Resend } from 'resend';
import { RESEND } from '$env/static/private';
import { fail } from '@sveltejs/kit';
import { AuditForm, ConsultForm, MessageForm } from '$lib/server/user-operations.js';

/** @type {import('./$types').Actions} */
export const actions = {
    contactToMessage: MessageForm,
    contactToConsult: ConsultForm,
    auditOnBlog: AuditForm
}
