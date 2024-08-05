import Head from 'next/head'
import Tabs from "../components/tabs"
import MonthlyBalance from "../components/monthly-balance"
import AccountsTable from '../components/accounts-table'
import { Account } from '../utils/account'
import React from 'react';

export default function Home() {
  // Placeholders
  let accounts = [
    new Account("Checking", 1000),
    new Account("Savings", 2000),
  ]

  return (
    <>
      <Head>
        <title>Budgetize | Main Menu</title>
      </Head>

      <Tabs active={0} />
      <div className="flex flex-col lg:flex-row lg: mx-10 lg:gap-x-96 content-center justify-center">
        <AccountsTable accounts={accounts} />
        <MonthlyBalance income="1000" expense="500" />

      </div>
    </>
  )
}
