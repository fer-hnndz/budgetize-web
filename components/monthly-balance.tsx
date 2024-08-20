"use client"
import React from 'react';
import { useTranslations } from 'next-intl';
import Transaction from '../utils/transaction';
import { useEffect, useState } from 'react';
import localStorageDB from "localstoragedb";

export default function MonthlyBalance() {
    const t = useTranslations('Dashboard');

    let [income, setIncome] = useState(0.0)
    let [expense, setExpense] = useState(0.0)

    useEffect(() => {
        const db = new localStorageDB("budgetize", localStorage);
        if (!db.tableExists("transactions")) db.createTable("transactions", ["account_id", "amount", "description", "timestamp", "visible"])

        // TODO: Convert all currencies to main currency
        // TODO: Filter monthly
        let trans: Object[] = db.queryAll("transactions");

        let tempIncome = 0.0
        let tempExpense = 0.0
        trans.forEach((t) => {
            if (t.amount < 0) tempExpense += t.amount
            else tempIncome += t.amount
        })

        setIncome(tempIncome);
        setExpense(tempExpense);


    })

    return (
        <>
            <div className="text-center justify-centert mt-4">
                <h1 className="font-bold text-lg dark:text-white">{t("monthlyIncome")}</h1>
                <span className="text-md text-lime-400">{income}</span>

                <h1 className="font-bold text-lg dark:text-white">{t("monthlyBalance")}</h1>
                <span className="text-md text-blue-400">{income - expense}</span>
                <h1 className="font-bold text-lg dark:text-white">{t("monthlyExpense")}</h1>
                <span className="text-md text-red-400">{expense}</span>
            </div>
        </>
    )
}