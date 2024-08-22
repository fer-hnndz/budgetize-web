"use client";

import React from "react"
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

/*
@param {object} props
@property callback - A function that will be executed to save the currency in the localStorage.
*/
export default function CurrencyDropdown({ parentCallback }: { parentCallback: CallableFunction }) {
    const CURRENCIES: { code: string, name: string }[] = [
        { code: "USD", name: "United States Dollar" },
        { code: "EUR", name: "Euro" },
        { code: "GBP", name: "British Pound Sterling" },
        { code: "JPY", name: "Japanese Yen" },
        { code: "AUD", name: "Australian Dollar" },
        { code: "CAD", name: "Canadian Dollar" },
        { code: "CHF", name: "Swiss Franc" },
        { code: "CNY", name: "Chinese Yuan" },
        { code: "MXN", name: "Mexican Peso" },
        { code: "BRL", name: "Brazilian Real" },
        { code: "ARS", name: "Argentine Peso" },
        { code: "COP", name: "Colombian Peso" },
        { code: "PEN", name: "Peruvian Sol" },
        { code: "CLP", name: "Chilean Peso" },
        { code: "UYU", name: "Uruguayan Peso" },
        { code: "CRC", name: "Costa Rican Colón" },
        { code: "GTQ", name: "Guatemalan Quetzal" },
        { code: "HNL", name: "Honduran Lempira" },
        { code: "NIO", name: "Nicaraguan Córdoba" },
        { code: "PAB", name: "Panamanian Balboa" },
    ]

    // Set a random currency as default
    let [currency, setCurrency] = useState(CURRENCIES[0])
    parentCallback(currency.code)

    // Hides/Shows the dropwdown
    function handleDropdownClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
        const dropdown = document.querySelector("#dropdown")
        if (dropdown) {
            dropdown.classList.toggle("hidden")
        }
    }

    // Updates search results from the dropdown
    function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
        const search = event.target.value

        const dropdown = document.querySelector("#dropdown")
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
    function handleCurrency(event: React.MouseEvent<HTMLAnchorElement>) {
        event.preventDefault()
        const dropdown = document.querySelector("#dropdown")
        if (!dropdown) return;

        let selectedCurrency = event.currentTarget.textContent
        if (!selectedCurrency) return;
        selectedCurrency = selectedCurrency?.substring(1, 4) // Grab the code between parentheses: (XXX)

        const currency = CURRENCIES.find((currency) => currency.code === selectedCurrency)
        if (!currency) return;
        setCurrency(currency)
        parentCallback(currency.code) // Send to parent the current currency

        // Close the dropdown
        dropdown.classList.toggle("hidden")

    }
    return (
        <div>
            <button onClick={handleDropdownClick} className="bg-white dark:bg-inputBG dark:text-white rounded-lg text-sm flex flex-row gap-x align-middle px-2 py-2 font-semibold" type="button">
                ({currency.code}) {currency.name}<FaAngleDown className="mt-1 ml-2" />
            </button>

            <div id="dropdown" className="z-10 hidden bg-dark rounded-lg shadow w-44 dark:bg-white">
                <input className="w-auto h-fit py-1 text-sm m-1 border-1 rounded-lg border-zinc-600 text-white dark:text-black" placeholder=" Search Currency" type="text" onChange={handleSearch}></input>
                <ul className="py-2 text-sm text-white dark:text-black min-h-40 max-h-96 overflow-y-scroll">
                    {CURRENCIES.map((currency) => (
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={handleCurrency}>({currency.code}) {currency.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div >
    )
}