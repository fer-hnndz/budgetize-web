import Head from 'next/head'
import Tabs from "../../components/tabs"
import MonthlyBalance from "../../components/monthly-balance"
import AccountsTable from '../../components/accounts-table'
import { Account } from '../../utils/account'
import React from 'react';

export default function Home() {
  // Placeholders
  let accounts = [
    new Account("Checking", 1000),
    new Account("Savings", 2000),
  ]

  // ! FLEX DIRECTION IS NOT APPLYING PROPERLY
  return (
    <>
      <Head>
        <title>Budgetize | Main Menu</title>
      </Head>

      <Tabs active={0} />
      <div className="flex flex-col lg:flex-row lg:gap-x-96 mx-10 content-center justify-center">
        <AccountsTable accounts={accounts} />
        <MonthlyBalance income="1000" expense="500" />

      </div>
    </>
  )
}
