import { redirect } from "@tanstack/react-router"
import { createServerFn } from "@tanstack/react-start"
import { upsertSession } from "../../utils/upsert-session"

export const signOutPost = createServerFn({ method: "POST" }).handler(async () => {
  const session = await upsertSession()
  await session.clear()
  throw redirect({ to: "/signin" })
})
