import { Resend } from 'resend';
import { RESEND } from '$env/static/private';
import { fail } from '@sveltejs/kit';
import { AuditFooterForm, AuditForm, AuditHomepageForm, MessageForm } from '$lib/server/user-operations.js';

/** @type {import('./$types').Actions} */
export const actions = {
    audit: AuditForm,
    auditOnContact: AuditFooterForm,
    auditOnConsult: AuditHomepageForm,
    contact: MessageForm
}

export const ssr = true;