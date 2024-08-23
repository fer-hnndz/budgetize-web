"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

let COOKIE = "BUDGETIZE_CURRENCY"

export async function setUserCurrency(currency: string) {
    cookies().set(COOKIE, currency)
}

export async function getUserCurrency() {
    return cookies().get(COOKIE)?.value || null
}