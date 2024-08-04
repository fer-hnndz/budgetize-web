import Head from 'next/head'
import Tabs from '../components/tabs'
export default function Transactions() {
    return (
        <>
            <Head>
                <title>Budgetize | Transactions</title>
            </Head>
            <Tabs active={1} />
            <h1>Transactions</h1>
        </>
    )
}