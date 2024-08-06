import React from 'react';
import { useTranslations } from 'next-intl';

const t = useTranslations('Dashboard');
export default function MonthlyBalance({ income, expense }) {
    return (
        <>
            <div className="text-center justify-centert mt-4">
                <h1 className="font-bold text-lg dark:text-white">{t("monthlyIncome")}</h1>
                <span className="text-md text-lime-400">{income}</span>

                <h1 className="font-bold text-lg dark:text-white">Balance</h1>
                <span className="text-md text-blue-400">{income - expense}</span>
                <h1 className="font-bold text-lg dark:text-white">Expense this Month</h1>
                <span className="text-md text-red-400">{expense}</span>
            </div>
        </>
    )
}