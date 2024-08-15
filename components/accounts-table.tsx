"use client"

import { useTranslations } from "next-intl";
import localStorageDB from "localstoragedb";
import Account from "../utils/account";
import { useEffect, useState } from "react";

export default function AccountsTable() {
    let [accounts, setAccounts] = useState([]);
    let [balanceMap, setBalanceMap] = useState(new Map());

    useEffect(() => {
        let db = new localStorageDB("budgetize", localStorage);

        if (db.isNew() || !db.tableExists("accounts")) {
            db.createTable("accounts", ["name", "currency", "balance"])
            db.createTable("transactions", ["account_id", "amount", "description", "timestamp", "visible"])
            db.commit()
        }

        let accountDb = db.queryAll("accounts")

        let newAccounts: Account[] = []
        let newBalanceMap = new Map();

        accountDb.map((account) => {
            newAccounts.push(new Account(account.id, account.name, account.balance
            ))

            let transactions = db.queryAll("transactions", {
                account_id: account.id
            })

            console.log(transactions)

            let total = 0;
            transactions.forEach((transaction) => {
                total += transaction.amount;
            })

            newBalanceMap.set(account.id, total)
        })

        setBalanceMap(newBalanceMap);
        setAccounts(newAccounts)
    }, [])

    const t = useTranslations("Dashboard")
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
                        <td className="hover:bg-orange-500">{balanceMap.get(account.id)}</td>
                    </tr>
                ))}
            </tbody>
        </table >
    )
}