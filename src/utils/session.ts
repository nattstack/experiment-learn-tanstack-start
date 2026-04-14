import { redirect } from "@tanstack/react-router"
import { deleteCookie, setCookie } from "@tanstack/react-start/server"

export function createSession(id: string): void {
  const name = "session"
  const value = "JWT_TOKEN_" + id
  const options = {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 365, // 1 year in seconds
    partitioned: false,
    path: "/",
    priority: "medium" as const,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
  }
  setCookie(name, value, options)
}

export function deleteSession(): void {
  const name = "session"
  deleteCookie(name)
  throw redirect({ to: "/signin" })
}
