"use client"

import { useTranslations, useFormatter } from "next-intl";
import Account from "../utils/account";
import { useEffect, useState } from "react";
import localStorageDB from "localstoragedb";

export default function AccountsTable() {
    let placeholder: Account[] = [] // infer array type to react
    let [accounts, setAccounts] = useState(placeholder);

    useEffect(() => {
        let db = new localStorageDB("budgetize", localStorage);

        if (!db.tableExists("accounts") || !db.tableExists("transactions")) {
            db.createTable("accounts", ["name", "currency"])
            db.createTable("transactions", ["account_id", "amount", "transaction", "description", "timestamp", "visible"])
            db.commit()
        }


        let newAccounts = Account.getAccountsFromStorage(localStorage);
        setAccounts(newAccounts)
        console.log(newAccounts)
    }, [])

    const t = useTranslations("Dashboard")
    const format = useFormatter()
    return (
        <table className="mt-6 border border-blue-600 h-fit">
            <thead className="text-lg font-semibold p-2 bg-blue-500">
                <tr>
                    <th className="bg-blue-500 font-semibold px-4">{t("accountName")}</th>
                    <th className="bg-blue-500 font-semibold px-2">{t("accountBalance")}</th>
                </tr>
            </thead >
            <tbody className="p-2">
                {accounts.map((account) => (
                    <tr key={account.name}>
                        <td className="hover:bg-orange-500 transition duration-100 ease-in-out">{account.name}</td>
                        <td className="hover:bg-orange-500">{format.number(account.balance, { style: "currency", currency: account.currency, currencyDisplay: "code" })}</td>
                    </tr>
                ))}
            </tbody>
        </table >
    )
}