import { sequence } from "@sveltejs/kit/hooks";
import { handleErrorWithSentry, sentryHandle } from "@sentry/sveltekit";
import * as Sentry from '@sentry/sveltekit';
import type { Handle } from "@sveltejs/kit";

Sentry.init({
  dsn: 'https://bfdbabff339582e258d94e110a06323a@o4509275833499648.ingest.de.sentry.io/4509275837694032',

  tracesSampleRate: 1.0,

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: import.meta.env.DEV,
});

const fonts: Handle = async ({ event, resolve }) => {
  const response = await resolve(event, {
    preload: ({ type }) => {
      return type === 'font' || type === 'js' || type === 'css';
    }
  })
  return response;
}

// If you have custom handlers, make sure to place them after `sentryHandle()` in the `sequence` function.
export const handle = sequence(
  sentryHandle(), fonts
);

// If you have a custom error handler, pass it to `handleErrorWithSentry`
export const handleError = handleErrorWithSentry();
