import Link from "next/link"

export default function Tabs({ active }) {

    let hoverClasses = "transition ease-in duration-100 delay-75 hover:-translate-y-1 "
    let activeClass = "border-b-2 border-orange-500 border-dashed";
    return (
        <div className="select-none w-screen h-fit bg-white dark:bg-dark dark:text-white border-blue-500 border-b-2 border-dashed flex flex-row justify-center text-center gap-x-6 font-semibold py-3">

            <div className={hoverClasses + (active == 0 ? activeClass : "")}>
                <Link href="/dashboard">Accounts</Link>
            </div>

            <div className={hoverClasses + (active == 1 ? activeClass : "")}>
                <Link href="/dashboard/transactions">Transactions</Link>
            </div>

            <div className={hoverClasses + (active == 2 ? activeClass : "")}>
                <Link href="/dashboard/budgets">Budgets</Link>
            </div>
        </div >
    )
}