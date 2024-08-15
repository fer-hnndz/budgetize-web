import Tabs from "../../components/tabs"
import MonthlyBalance from "../../components/monthly-balance"
import AccountsTable from '../../components/accounts-table'
import Account from '../../utils/account'
import ButtonLink from "../../components/button-link";
import React from 'react';
import { Metadata } from 'next'
import { useTranslations } from "next-intl";
import { useEffect } from "react";

// export const metadata: Metadata = {
//   title: "Budgetize | Dashboard",
// }

export default function Home() {
  const t = useTranslations("Dashboard")
  return (
    <>
      <Tabs active={0} />
      <div className="flex flex-col lg:flex-row lg:gap-x-96 mx-10 content-center justify-center">
        <AccountsTable />
        <MonthlyBalance income="1000" expense="500" />
      </div>

      <div className="flex flex-auto justify-center mt-8 gap-x-4 mx-4 md:mx-0">
        <ButtonLink href="/dashboard/create-account" text={t("addAccount")} variant={"primary"} />
        <ButtonLink href="/dashboard/add-transaction" text={t("addTransaction")} variant={"success"} />
      </div>
    </>
  )
}
