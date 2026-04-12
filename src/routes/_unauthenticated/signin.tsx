import { IconEmail1, IconLock } from "@nattstack/icons-outlined"
import { Button, Column, Input, Label, Row, Spacer } from "@nattstack/ui"
import { Link, createFileRoute } from "@tanstack/react-router"
import { useServerFn } from "@tanstack/react-start"
import type { SubmitEvent } from "react"
import { LogoLink } from "../../components/logo-link"
import { signInPost } from "../../server/auth/sign-in-post"

export const Route = createFileRoute("/_unauthenticated/signin")({
  component: function RouteSignin() {
    const signIn = useServerFn(signInPost)

    async function onSubmit(event: SubmitEvent<HTMLFormElement>) {
      event.preventDefault()

      const formData = new FormData(event.currentTarget)
      const email = formData.get("email") as string
      const password = formData.get("password") as string

      console.log("email:", email)
      console.log("password:", password)

      const data = await signIn({
        data: {
          email,
          password,
        },
      })

      console.log("data:", data)
    }

    return (
      <Column as="main" className="min-h-dvh items-center justify-center px-16 pt-24 pb-144">
        <Column className="w-full max-w-[380px]">
          {/* Header */}
          <Row className="-mt-8 -ml-8">
            <LogoLink />
          </Row>
          <Spacer height={16} />
          <h1 className="text-24">Sign in to your account</h1>
          <Spacer height={24} />

          {/* Form */}
          <form onSubmit={onSubmit}>
            <Column>
              {/* Email */}
              <Label htmlFor="email">Email</Label>
              <Spacer height={4} />
              <Row className="relative">
                <IconEmail1
                  className="text-gray-6 absolute top-1/2 left-16 -translate-y-1/2"
                  size={20}
                />
                <Input
                  autoComplete="email"
                  className="pl-48!"
                  id="email"
                  name="email"
                  placeholder="Email"
                  // type="email"
                />
              </Row>
              <Spacer height={16} />

              {/* Password */}
              <Label htmlFor="password">Password</Label>
              <Spacer height={4} />
              <Row className="relative">
                <IconLock
                  className="text-gray-6 absolute top-1/2 left-16 -translate-y-1/2"
                  size={20}
                />
                <Input
                  autoComplete="current-password"
                  className="pl-48!"
                  id="password"
                  name="password"
                  placeholder="Password"
                  type="password"
                />
              </Row>
              <Spacer height={24} />

              <Button isFullWidth size={48} type="submit">
                Sign in
              </Button>
            </Column>
          </form>
          <Spacer height={24} />

          {/* Sign up */}
          <p className="text-14">
            Don't have an account?{" "}
            <Link
              className="text-primary font-500 transition-opacity hover:opacity-75"
              to="/signup"
            >
              Sign up
            </Link>
          </p>
        </Column>
      </Column>
    )
  },
})
