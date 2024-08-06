import createMiddleware from 'next-intl/middleware';
import locales from './utils/locales';

export default createMiddleware({
    // A list of all locales that are supported
    locales: locales,

    // Used when no locale matches
    defaultLocale: 'en'
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', `/(en|es)/:path*`]
};