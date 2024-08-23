import { getRequestConfig } from 'next-intl/server';
import { cookies, headers } from 'next/headers';

export default getRequestConfig(async () => {
    // Provide a static locale, fetch a user setting,
    // read from `cookies()`, `headers()`, etc.


    let cookieLocale = cookies().get('NEXT_LOCALE')
    let locale = ""

    if (!cookieLocale) locale = "en"
    else locale = cookieLocale.value


    return {
        locale,
        messages: (await import(`./src/messages/${locale}.json`)).default
    };
});