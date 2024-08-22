"use client"

import CurrencyDropdown from "../../components/currency-dropdown";
import LanguageDropwdown from "../../components/language-dropdown";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Button from "../../components/button";
import { useTransition } from "react";
import { setUserLocale } from "../../services/locale"

export default function setup() {
    let [currency, setCurrency] = useState("USD")
    let [lang, setLang] = useState("en")
    let [pending, startTransition] = useTransition()

    function handleCurrencyChange(currency: string) {
        setCurrency(currency)
    }

    function handleLangChange(locale: string) {
        setLang(locale)
        startTransition(() => {
            setUserLocale(locale)

        })
    }

    function saveSettings() {

    }

    const t = useTranslations("Setup")
    return (
        <>
            <h1 className="font-extrabold text-3xl pt-5 text-center mb-3">Setup</h1>

            <div className="flex flex-col md:flex-row justify-center items-center gap-y-3 gap-x-12 h-fit">
                <div className="flex flex-col gap-y-1 justify-center items-center">
                    <h2 className="font-semibold text-xl">{t("mainCurrency")}</h2>
                    <CurrencyDropdown parentCallback={handleCurrencyChange} />
                </div>

                <div className="flex flex-col gap-y-1 justify-center items-center">
                    <h2 className="font-semibold text-xl">{t("language")}</h2>
                    <LanguageDropwdown parentCallback={handleLangChange} />
                </div>
            </div>

            <div className="pt-8 flex justify-center items-center">
                <Button text={t("saveSettings")} variant="success" onClick={saveSettings} />
            </div>
        </>
    )
}