"use server"

import { setUserCurrency } from "./currency"
import { redirect } from "next/navigation"

export async function storeSettings(currency: string) {
    setUserCurrency(currency)
}
export async function navigate() {
    redirect("/dashboard")
}