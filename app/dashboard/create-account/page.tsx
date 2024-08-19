"use client"
import { useState } from "react";
import Tabs from "../../../components/tabs";
import Button from "../../../components/button";
import CurrencyDropdown from "../../../components/currency-dropdown";
import localStorageDB from "localstoragedb";
import { FaDribbble } from "react-icons/fa";

export default function CreateAccount() {
    const [accountName, setAccountName] = useState("");
    const [initialBalance, setInitialBalance] = useState(0);
    const [selectedCurrency, setSelectedCurrency] = useState("");

    function saveAccount() {
        let db = new localStorageDB("budgetize", localStorage);
        db.insert("accounts", { name: accountName, currency: selectedCurrency })
        let acc = db.queryAll("accounts", { query: { name: accountName } })[0]

        console.warn(acc);


        let id = acc.ID
        if (initialBalance > 0) {
            db.insert("transactions", { account_id: id, amount: initialBalance, timestamp: 0, visible: false });
        }

        db.commit()

        // Optionally, clear the form or give feedback to the user
        setAccountName("");
        setInitialBalance(0);
        setSelectedCurrency("");
        alert("Account saved successfully!");
    }

    function updateCurrency(code) {
        setSelectedCurrency(code);
    }

    let inputClasses = "text-black dark:text-white dark:bg-inputBG px-2 w-44 rounded-md py-2 shadow text-sm";
    return (
        <>
            <Tabs active={0} />
            <div className="flex justify-center flex-col">
                <h1 className="text-center text-2xl font-extrabold mt-4">Create Account</h1>
                <div className="text-left flex flex-col md:flex-row self-center md:self-auto mt-5 gap-y-4 lg:">
                    <div className="flex flex-col px-4">
                        <h1 className="pl-1 text-xs mb-1">Account Name</h1>
                        <input
                            className={inputClasses}
                            type="text"
                            placeholder="Account Name"
                            value={accountName}
                            onChange={(e) => setAccountName(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col px-4">
                        <h1 className="pl-1 text-xs mb-1">Currency</h1>
                        <CurrencyDropdown callback={updateCurrency} />
                    </div>
                    <div className="flex flex-col px-4">
                        <h1 className="pl-1 text-xs mb-1">Initial Balance</h1>
                        <input
                            className={inputClasses}
                            type="number"
                            placeholder="Initial Balance"
                            value={initialBalance}
                            onChange={(e) => setInitialBalance(Number(e.target.value))}
                        />
                    </div>
                </div>
                <Button text={"Save"} variant={"success"} onClick={saveAccount} />
            </div>
        </>
    );
}
