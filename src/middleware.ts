import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … `/templates/*` — the industry demo sites deliberately live
  //   outside [locale] so they render with their own chrome (no
  //   CodeWithAli navbar/footer). Running them through next-intl
  //   would redirect `/templates/x` → `/en/templates/x`, which
  //   doesn't exist in the app tree and 404s.
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|templates|.*\\..*).*)'
};

// To match routes with dots, check: https://next-intl.dev/docs/getting-started/app-router/with-i18n-routing#middleware-matcher-dots