import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Tabs from "../components/tabs"
import MonthlyBalance from "../components/monthly-balance"
export default function Home() {
  return (
    <>
      <Head>
        <title>Budgetize | Main Menu</title>
      </Head>

      <div className="w-screen h-screen bg-white dark:bg-dark">


        <Tabs />
        <div className="flex flex-col lg:flex-row lg: mx-10">
          <MonthlyBalance income="1000" expense="500" />

        </div>
      </div>
    </>
  )
}
