import { redirect } from "@tanstack/react-router"
import { createServerFn } from "@tanstack/react-start"
import { getCookie, setCookie } from "@tanstack/react-start/server"

const GATE_PASSWORD = "123123"
const COOKIE_NAME = "gate-password"

export const gateGet = createServerFn({ method: "GET" }).handler(async () => {
  return getCookie(COOKIE_NAME) === GATE_PASSWORD
})

export const gatePost = createServerFn({ method: "POST" })
  .inputValidator((data: { password: string }) => data)
  .handler(async ({ data }) => {
    if (data.password !== GATE_PASSWORD) {
      return { error: "Incorrect password" }
    }

    setCookie(COOKIE_NAME, GATE_PASSWORD, {
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    })

    throw redirect({ to: "/" })
  })
