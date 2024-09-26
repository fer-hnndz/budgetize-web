"use client";

import React, { useEffect } from "react"
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { Currency } from "../interfaces";
import Input from "./input";

/*
@param {object} props
@property callback - A function from the parent component to send the selected currency
@property dropdownId - The id of the dropdown
*/
export default function CurrencyDropdown({ parentCallback, dropdownId }: { parentCallback: CallableFunction, dropdownId: string }) {
    const CURRENCIES: Currency[] = [
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

    // This component has 2 useState hooks, one for the component's state and another for the parent's state
    let [currency, setCurrency] = useState(CURRENCIES[0])

    // Hides/Shows the dropwdown
    function handleDropdownClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
        const dropdown = document.querySelector(`#${dropdownId}`)
        if (dropdown) {
            dropdown.classList.toggle("hidden")
        }
    }

    // Updates search results from the dropdown
    function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
        const search = event.target.value

        const dropdown = document.querySelector(`#${dropdownId}`)
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
        const dropdown = document.querySelector(`#${dropdownId}`)
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


    // Once done rendering, send the current currency to the parent
    useEffect(() => {
        parentCallback(currency)
    }, [])

    return (
        <div>
            <span className="text-black dark:text-white text-lg font-bold">Currency</span>
            <button onClick={handleDropdownClick} className="dark:border-0 border-2 shadow bg-white dark:bg-inputBG dark:text-white rounded-lg text-sm flex flex-row gap-x align-middle px-2 py-2 font-semibold" type="button">
                ({currency.code}) {currency.name}<FaAngleDown className="mt-1 ml-2" />
            </button>

            <div id={dropdownId} className="z-10 hidden bg-dark dark:bg-white absolute rounded-lg shadow h-1/4 md:h-1/3 w-fit p-4">
                <Input type="text" name="Search" placeholder="Search Currency" onChange={handleSearch} />

                <div className="h-4/5">
                    <ul className="text-sm text-white h-full dark:text-black overflow-y-scroll scroll-mt-4 snap-y gap-y-1.5 flex flex-col">
                        {CURRENCIES.map((currency) => (
                            <li key={currency.code}>
                                <a href="#" className="h-fit w-fit p-1 rounded block hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white snap-end" onClick={handleCurrency}>({currency.code}) {currency.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    )
}