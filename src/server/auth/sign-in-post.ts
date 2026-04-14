import { redirect } from "@tanstack/react-router"
import { createServerFn } from "@tanstack/react-start"
import { z } from "zod"
import { createSession } from "../../utils/session"

const SignInPostInputSchema = z.object({
  email: z.email(),
  password: z.string().min(8).max(100),
})

interface SignInPostInput {
  email: string
  password: string
}

interface SessionData {
  userId?: string
  email?: string
  role?: string
}

export const signInPost = createServerFn({ method: "POST" })
  .inputValidator((data: SignInPostInput) => data)
  .handler(async (context) => {
    const { data } = context
    const { email, password } = data
    console.log("email:", email)
    console.log("password:", password)

    // const session = await upsertSession()
    // await session.update({ id: 1 })

    createSession("1")

    throw redirect({ to: "/app" })
  })
