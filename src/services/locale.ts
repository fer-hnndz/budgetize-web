"use server"

import { cookies } from "next/headers"

let COOKIE = "NEXT_LOCALE"

export async function setUserLocale(locale: string) {
    cookies().set(COOKIE, locale)
}

export async function getUserLocale() {
    return cookies().get(COOKIE) || "en"
}