import { redirect } from "@tanstack/react-router"
import { createServerFn } from "@tanstack/react-start"
import { getCookie, setCookie } from "@tanstack/react-start/server"

const COOKIE_CONSTRUCTION_NAME = "construction"
const COOKIE_CONSTRUCTION_VALUE = "123123"

export const gateGet = createServerFn({ method: "GET" }).handler(async () => {
  return getCookie(COOKIE_CONSTRUCTION_NAME) === COOKIE_CONSTRUCTION_VALUE
})

interface GatePostInput {
  password: string
}

export const gatePost = createServerFn({ method: "POST" })
  .inputValidator((data: GatePostInput) => data)
  .handler(async ({ data }) => {
    if (data.password !== COOKIE_CONSTRUCTION_VALUE) {
      return { error: "Incorrect password" }
    }

    setCookie(COOKIE_CONSTRUCTION_NAME, COOKIE_CONSTRUCTION_VALUE, {
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    })

    throw redirect({ to: "/app" })
  })
