import Link from "next/link"

export default function Tabs() {
    return (
        <div className="w-screen h-fit bg-white dark:bg-dark border-blue-500 border-b-2 border-dashed flex flex-row text-white justify-center text-center gap-x-6 font-semibold py-3">
            <Link href="/">Accounts</Link>
            <Link href="/">Transactions</Link>
            <Link href="/">Budgets</Link>
        </div>
    )
}