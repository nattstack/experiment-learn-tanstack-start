import { useSession } from "@tanstack/react-start/server"

const AUTH_SECRET = "0f2d7a2515a3bc20b4afc5e963126a1c3895995602f90f4f4eb96219a6b85d6e"

export function upsertSession() {
  return useSession({
    cookie: {
      httpOnly: true,
      path: "/",
      priority: "medium",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    },
    maxAge: 60 * 60 * 24 * 365, // 1 year in seconds
    name: "session",
    password: AUTH_SECRET,
  })
}
