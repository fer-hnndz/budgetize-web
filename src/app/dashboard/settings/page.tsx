"use client"

import Tabs from "../../../components/tabs"
import locales from "../../../utils/locales"
import { useState, useEffect, useTransition } from "react"
import { getUserLocale, setUserLocale } from "../../../services/locale"
import { getUserCurrency, setUserCurrency } from "../../../services/currency"
import LanguageDropwdown from "../../../components/language-dropdown"

export default function Settings() {

    let [locale, setLocale] = useState("en")
    let [pending, startTransition] = useTransition()

    function handleLanguageChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setLocale(event.target.value)

        startTransition(() => {
            setUserLocale(event.target.value)
        })

    }

    return (
        <>
            <Tabs active={3} />
            <div>
                <h1>Settings - {locale}</h1>

                <h2>Language</h2>
                <LanguageDropwdown parentCallback={handleLanguageChange} />
            </div>
        </>

    )
}