"use client"
import Link from "next/link"
import { useTranslations } from "next-intl";
import { FiMenu } from "react-icons/fi";

export default function Tabs({ active }) {

    let hoverClasses = "transition ease-in duration-100 delay-75 hover:-translate-y-1 "
    let activeClass = "w-fit border-b-2 border-orange-500 border-dashed";

    const t = useTranslations("Dashboard")

    function showDropdown() {
        let dropdown = document.getElementById("dropdown")
        if (!dropdown) return;

        dropdown.classList.remove("hidden")
        dropdown.classList.add("flex")
    }

    function hideDropdown() {
        let dropdown = document.getElementById("dropdown")
        if (!dropdown) return;

        dropdown.classList.remove("flex")
        dropdown.classList.add("hidden")
    }

    return (
        <>
            <div id="dropdown" className="overflow-clip select-none hidden flex-col w-screen h-screen md:display-none absolute bg-white dark:bg-dark transition-opacity ease-in-out">
                <button onClick={hideDropdown} className="flex flex-row justify-end md:hidden float-end mr-8 mt-2 font-extrabold text-2xl">X</button>
                <div className="gap-y-5 flex flex-col mt-20 text-3xl ml-4 font-extrabold">
                    <div className={hoverClasses + (active == 0 ? activeClass : "")}>
                        <Link href="/dashboard">{t("tabAccounts")}</Link>
                    </div>

                    <div className={hoverClasses + (active == 1 ? activeClass : "")}>
                        <Link href="/dashboard/transactions">{t("tabTransactions")}</Link>
                    </div>

                    <div className={hoverClasses + (active == 2 ? activeClass : "")}>
                        <Link href="/dashboard/budgets">{t("tabBudgets")}</Link>
                    </div>

                    <div className={hoverClasses + (active == 3 ? activeClass : "")}>
                        <Link href="/dashboard/settings">{t("tabSettings")}</Link>
                    </div>
                </div>

            </div >

            <div className="md:hidden flex justify-end text-3xl mr-8 mt-4">
                <FiMenu onClick={showDropdown} className="" />
            </div >

            <div className="hidden select-none w-screen h-fit bg-white dark:bg-dark dark:text-white border-blue-500 border-b-2 border-dashed md:flex flex-row justify-center text-center gap-x-6 font-semibold py-3">

                <div className={hoverClasses + (active == 0 ? activeClass : "")}>
                    <Link href="/dashboard">{t("tabAccounts")}</Link>
                </div>

                <div className={hoverClasses + (active == 1 ? activeClass : "")}>
                    <Link href="/dashboard/transactions">{t("tabTransactions")}</Link>
                </div>

                <div className={hoverClasses + (active == 2 ? activeClass : "")}>
                    <Link href="/dashboard/budgets">{t("tabBudgets")}</Link>
                </div>

                <div className={hoverClasses + (active == 3 ? activeClass : "")}>
                    <Link href="/dashboard/settings">{t("tabSettings")}</Link>
                </div>
            </div >
        </>
    )
}