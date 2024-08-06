import Tabs from "../../components/tabs"
import MonthlyBalance from "../../components/monthly-balance"
import AccountsTable from '../../components/accounts-table'
import { Account } from '../../utils/account'
import React from 'react';
import { Metadata } from 'next'
import ButtonLink from "../../components/button-green";

export const metadata: Metadata = {
  title: "Budgetize | Dashboard",
}

export default function Home() {
  // Placeholders
  let accounts = [
    new Account("Checking", 1000),
    new Account("Savings", 2000),
  ]

  return (
    <>
      <Tabs active={0} />
      <div className="flex flex-col lg:flex-row lg:gap-x-96 mx-10 content-center justify-center">
        <AccountsTable accounts={accounts} />
        <MonthlyBalance income="1000" expense="500" />
      </div>

      <div className="flex flex-auto justify-center mt-8 gap-x-4">
        <ButtonLink href="/add-account" text="New Account" />
        <ButtonLink href="/add-transaction" text="New Transaction" />
      </div>
    </>
  )
}
