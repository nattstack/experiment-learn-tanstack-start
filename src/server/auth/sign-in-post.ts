import { createServerFn } from "@tanstack/react-start"

interface SignInPostInput {
  email: string
  password: string
}

export const signInPost = createServerFn({ method: "POST" })
  .inputValidator((data: SignInPostInput) => data)
  .handler(async (context) => {
    const { data } = context
    const { email, password } = data
    console.log("email:", email)
    console.log("password:", password)
    return { success: true }
  })
