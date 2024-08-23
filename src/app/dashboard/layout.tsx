import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { getUserCurrency } from '../../services/currency';
import { redirect } from 'next/navigation';
import '../../styles/globals.css'

export const metadata = {
    title: 'Next.js',
    description: 'Generated by Next.js',
}

export default async function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}) {
    const locale = await getLocale();

    const currency = await getUserCurrency()
    if (currency === null) redirect("/setup")

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();
    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
