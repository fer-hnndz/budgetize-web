'use client'
import { useState } from "react"
import Account from "../../../utils/account"
import React from "react"

function onChange(event: any, setter: any) {
    setter(event.target.value)
}
export default function AddTransaction() {

    let accounts = []
    const [selectedAccount, setSelectedAccount] = useState(accounts[0])

    function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
        //setSelectedAccount(accounts.find(account => account.name === event.target.value) as Account)
    }

    return (
        <>
            <div className="flex flex-col flex-auto justify-center text-center mt-4 overflow-none">
                <h1 className="text-xl font-extrabold">New Transaction</h1>
                <span className="text-blue-300 font-semibold">New Balance: {selectedAccount.balance}</span>
                <select onChange={handleChange} className="shadow dark:bg-dark border border-black dark:border-white rounded w-fit self-center mt-4 p-2 font-sans font-semibold">
                    {
                        accounts.map((account: Account) => {
                            return <option key={account.name} value={account.name}>{account.name}</option>
                        })
                    }
                </select>
            </div >
        </>
    )
}