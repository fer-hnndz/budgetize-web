"use client"

import Tabs from "../../../components/tabs"
import locales from "../../../utils/locales"
import { useState, useEffect } from "react"

export default function Settings() {

    let [locale, setLocale] = useState("en")
    function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setLocale(event.target.value)
    }

    return (
        <>
            <Tabs active={3} />
            <div>
                <h1>Settings - {locale}</h1>

                <h2>Language</h2>
                <select className="p-2 bg-white dark:bg-dark dark:text-white border rounded-md border-zinc-600z" defaultValue="" onChange={handleChange}>
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