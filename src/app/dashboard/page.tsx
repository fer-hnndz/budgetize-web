"use client"

import Tabs from "../../components/tabs"
import MonthlyBalance from "../../components/monthly-balance"
import AccountsTable from '../../components/accounts-table'
import ButtonLink from "../../components/button-link";
import React from 'react';
import { useTranslations } from "next-intl";
import { getUserCurrency } from "../../services/currency";
import { redirect } from "next/navigation";
import AddAccountModal from "../../modals/add_account";
import Button from "../../components/button";

// export const metadata: Metadata = {
//   title: "Budgetize | Dashboard",
// }

export default function Home() {
  function showAccountModal() {
    const modal = document.getElementById("addAccountModal")
    if (!modal) {
      alert("Cannot add account. Try again later.")
      return
    }
    modal.classList.remove("hidden")
  }

  const t = useTranslations("Dashboard")
  return (
    <>
      <AddAccountModal />

      <Tabs active={0} />
      <div className="flex flex-col lg:flex-row lg:gap-x-96 mx-10 content-center justify-center">
        <AccountsTable />
        <MonthlyBalance />
      </div>


      <div className="flex flex-auto justify-center mt-8 gap-x-4 mx-4 md:mx-0">
        <Button text={t("addAccount")} variant={"primary"} onClick={showAccountModal} />
        <ButtonLink href="/dashboard/add-transaction" text={t("addTransaction")} variant={"success"} />
      </div>
    </>
  )
}
