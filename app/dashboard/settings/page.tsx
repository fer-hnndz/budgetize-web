import { cookies } from "next/headers"
import Tabs from "../../../components/tabs"
import { NextIntlClientProvider } from "next-intl"
import locales from "../../../utils/locales"

export default async function Settings() {
    return (
        <>
            <Tabs active={3} />
            <div>
                <h1>Settings</h1>

                <h2>Language</h2>
                <select>
                    {locales.map((locale: string) => (
                        <option key={locale} value={locale}>
                            {locale}
                        </option>
                    ))}
                </select>
            </div>
        </>

    )
}