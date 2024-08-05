import Head from 'next/head'
import Tabs from '../../../components/tabs'
import React from 'react';

export default function Budgets() {
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