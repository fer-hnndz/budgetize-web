"use client";

import React from "react"
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

/*
@param {object} props
@property callback - A function that will be executed to save the currency in the localStorage.
*/
export default function LanguageDropwdown({ parentCallback }: { parentCallback: CallableFunction }) {
    const SUPPORTED_LANGUAGES: { code: string, name: string }[] = [
        { code: "en", name: "English" },
        { code: "es", name: "Español" },
    ]

    // Set a random currency as default
    let [lang, setLang] = useState(SUPPORTED_LANGUAGES[0])

    // Hides/Shows the dropwdown
    function handleDropdownClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
        const dropdown = document.querySelector("#langDropdown")
        if (dropdown) {
            dropdown.classList.toggle("hidden")
        }
    }

    // Updates search results from the dropdown
    function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
        const search = event.target.value

        const dropdown = document.querySelector("#langDropdown")
        if (!dropdown) return;

        const items = dropdown.querySelectorAll("li")
        if (search.length < 1) {
            items.forEach((item) => {
                item.classList.remove("hidden")
            })
        }

        items.forEach((item) => {
            const text = item.textContent
            if (text && text.toLowerCase().includes(search.toLowerCase())) {
                item.classList.remove("hidden")
            } else {
                item.classList.add("hidden")
            }
        })

    }

    // Updates the selected currency
    function handleLangChange(event: React.MouseEvent<HTMLAnchorElement>) {
        event.preventDefault()

        const dropdown = document.querySelector("#langDropdown")
        if (!dropdown) return;

        let selectedLang = event.currentTarget.parentElement?.getAttribute("data-key")
        if (!selectedLang) return;

        const lang = SUPPORTED_LANGUAGES.find((lang) => lang.code === selectedLang)
        if (!lang) return;
        setLang(lang)
        parentCallback(lang.code) // Send to parent the current currency

        // Close the dropdown
        dropdown.classList.toggle("hidden")

    }
    return (
        <div>
            <button onClick={handleDropdownClick} className="bg-white dark:bg-inputBG dark:text-white rounded-lg text-sm flex flex-row gap-x align-middle px-2 py-2 font-semibold" type="button">
                {lang.name}<FaAngleDown className="mt-1 ml-2" />
            </button>

            <div id="langDropdown" className="z-10 hidden bg-dark rounded-lg shadow w-44 dark:bg-white absolute">
                <input className="w-auto h-fit py-1 text-sm m-1 border rounded-lg outline-none border-zinc-600 text-white dark:text-black" placeholder="Search Language" type="text" onChange={handleSearch}></input>
                <ul className="py-2 text-sm text-white dark:text-black min-h-40 max-h-96 overflow-y-scroll">
                    {SUPPORTED_LANGUAGES.map((language) => (
                        <li key={language.code} data-key={language.code}>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={handleLangChange}>{language.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div >
    )
}