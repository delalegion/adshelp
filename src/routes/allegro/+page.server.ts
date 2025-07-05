import { AuditFooterForm, AuditForm, AuditHomepageForm, MessageForm } from '$lib/server/user-operations.js';

/** @type {import('./$types').Actions} */
export const actions = {
    audit: AuditForm,
    auditOnContact: AuditFooterForm,
    auditOnConsult: AuditHomepageForm,
    contact: MessageForm
}
