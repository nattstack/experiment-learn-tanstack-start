import { Button, Column, Input, Label, Row } from "@nattstack/ui"
import { Link, createFileRoute } from "@tanstack/react-router"
import type { SubmitEvent } from "react"
import { Logo } from "../../components/logo"

export const Route = createFileRoute("/_unauthenticated/signin")({
  component: function RouteSignin() {
    function onSubmit(event: SubmitEvent<HTMLFormElement>) {
      event.preventDefault()
    }

    return (
      <main className="bg-gray-1 flex min-h-dvh items-center justify-center px-24 py-48">
        <Column className="w-full max-w-[420px] gap-32">
          <Column className="items-center gap-16">
            <Link to="/" className="p-8 transition-opacity hover:opacity-75">
              <Logo />
            </Link>
            <Column className="items-center gap-8">
              <h1 className="text-gray-12 text-28 m-0 tracking-tight">Sign in to your account</h1>
              <p className="text-gray-11 text-14 m-0 leading-[1.6]">
                Welcome back. Enter your credentials to continue.
              </p>
            </Column>
          </Column>

          <Column className="border-gray-4 bg-bg-primary shadow-2 gap-24 rounded-[24px] border p-32">
            <form onSubmit={onSubmit}>
              <Column className="gap-20">
                <Column className="gap-8">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    autoComplete="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    size={44}
                    type="email"
                  />
                </Column>

                <Column className="gap-8">
                  <Row className="items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link
                      to="."
                      className="text-primary-11 text-12 font-semibold transition-opacity hover:opacity-75"
                    >
                      Forgot password?
                    </Link>
                  </Row>
                  <Input
                    autoComplete="current-password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    size={44}
                    type="password"
                  />
                </Column>

                <Button isFullWidth size={44} type="submit" variant="primary">
                  Sign in
                </Button>
              </Column>
            </form>
          </Column>

          <p className="text-gray-11 text-14 m-0 text-center">
            Don&apos;t have an account?{" "}
            <Link
              to="."
              className="text-primary-11 font-semibold transition-opacity hover:opacity-75"
            >
              Create one
            </Link>
          </p>
        </Column>
      </main>
    )
  },
})
