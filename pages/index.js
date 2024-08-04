import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Tabs from "../components/tabs"

export default function Home() {
  return (
    <>
      <Head>
        <title>Budgetize | Main Menu</title>
      </Head>

      <div className="w-screen h-screen bg-white dark:bg-dark">


        <Tabs />
        <div className="flex">

          <div>
            <h1>Income this Month</h1>
          </div>
        </div>
      </div>
    </>
  )
}
