import Head from 'next/head'
import Tabs from '../components/tabs'
export default function Transactions() {
    return (
        <>
            <Head>
                <title>Budgetize | Budgets</title>
            </Head>
            <Tabs active={2} />
            <h1>Budgets</h1>
        </>
    )
}