import { useState } from "react";
import localStorageDB from "localstoragedb"
import CurrencyDropdown from "../components/currency-dropdown";
import Button from "../components/button";
import Input from "../components/input";
import { Currency } from "../interfaces";

export default function AddAccountModal() {
    const [accountName, setAccountName] = useState("");
    const [initialBalance, setInitialBalance] = useState(0);
    const [selectedCurrency, setSelectedCurrency] = useState({} as Currency);

    function saveAccount() {
        let db = new localStorageDB("budgetize", localStorage);
        let acc = db.queryAll("accounts", { query: { name: accountName } })

        if (acc.length > 0) {
            alert("Account already exists!");
            return;
        }

        let id = db.insert("accounts", { name: accountName, currency: selectedCurrency })
        if (initialBalance > 0) {
            db.insert("transactions", { account_id: id, amount: initialBalance, timestamp: 0, visible: false });
        }

        db.commit()

        // Optionally, clear the form or give feedback to the user
        setAccountName("");
        setInitialBalance(0);
        setSelectedCurrency({} as Currency);
        alert("Account saved successfully!");

        hideModal();

    }

    function updateCurrency(code) {
        setSelectedCurrency(code);
    }

    function updateAccountName(event: React.ChangeEvent<HTMLInputElement>) {
        setAccountName(event.target.value);
    }

    function updateInitialBalance(event: React.ChangeEvent<HTMLInputElement>) {
        setInitialBalance(Number(event.target.value));
    }

    function hideModal() {
        const modalDiv = document.querySelector("#addAccountModal");
        if (!modalDiv) return;

        modalDiv.classList.add("hidden");
    }

    return (
        <div id="addAccountModal" className="hidden fixed">
            <div className="absolute z-10 w-screen h-screen bg-opacity-40 bg-black flex justify-center flex-col items-center">
                <div className="min-w-fit max-h-content p-8 bg-white dark:bg-dark text-black dark:text-white rounded-md shadow-lg">
                    <h2 className="text-4xl font-bold mb-8">Create Account</h2>

                    <div className="flex flex-col gap-y-4">
                        <Input name={"Account Name"} type="text" onChange={updateAccountName} value={accountName} />
                        <Input name={"Initial Balance"} type="number" onChange={updateInitialBalance} />
                        <CurrencyDropdown parentCallback={updateCurrency} dropdownId="currencyDropdown" />
                    </div>

                    <div className="flex flex-row gap-x-4 mt-12">
                        <Button text="Add Account" variant="success" onClick={saveAccount} />
                        <Button text="Cancel" variant="error" onClick={hideModal} />
                    </div>
                </div>
            </div>
        </div>
    );
}