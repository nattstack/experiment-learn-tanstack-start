import { createServerFn } from "@tanstack/react-start"
import { z } from "zod"

const SignInPostInputSchema = z.object({
  email: z.email(),
  password: z.string().min(8).max(100),
})

export const signInPost = createServerFn({ method: "POST" })
  .inputValidator(SignInPostInputSchema)
  .handler(async (context) => {
    const { data } = context
    const { email, password } = data
    console.log("email:", email)
    console.log("password:", password)
    return { success: true }
  })
