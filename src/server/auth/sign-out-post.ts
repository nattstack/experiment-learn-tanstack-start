import { createServerFn } from "@tanstack/react-start"
import { deleteSession } from "../../utils/session"

export const signOutPost = createServerFn({ method: "POST" }).handler(async () => {
  deleteSession()
})
