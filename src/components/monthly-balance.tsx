import React from 'react';
import { useTranslations } from 'next-intl';

export default function MonthlyBalance({ income, expense }) {
    const t = useTranslations('Dashboard');
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