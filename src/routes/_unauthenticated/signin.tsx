import { Button, Column, Input, Label, Row, Spacer } from "@nattstack/ui"
import { Link, createFileRoute } from "@tanstack/react-router"
import type { SubmitEvent } from "react"
import { Logo } from "../../components/logo"
import { LogoLink } from "../../components/logo-link"

export const Route = createFileRoute("/_unauthenticated/signin")({
  component: function RouteSignin() {
    function onSubmit(event: SubmitEvent<HTMLFormElement>) {
      event.preventDefault()
    }

    return (
      <Column as="main" className="min-h-dvh items-center justify-center p-16">
        <Column className="w-full max-w-[360px]">
          {/* Header */}
          <LogoLink />
          <Spacer height={24} />
          <h1 className="text-[28px]">Sign in to your account</h1>
          <Spacer height={4} />
          <p>Welcome back. Enter your credentials to continue.</p>
          <Spacer height={16} />

          {/* Form */}
          <form onSubmit={onSubmit}>
            <Column>
              <Label htmlFor="email">Email</Label>
              <Spacer height={4} />
              <Input
                autoComplete="email"
                id="email"
                name="email"
                placeholder="Email"
                type="email"
              />
              <Spacer height={16} />

              <Label htmlFor="password">Password</Label>
              <Spacer height={4} />
              <Input
                autoComplete="current-password"
                id="password"
                name="password"
                placeholder="Password"
                type="password"
              />
              <Spacer height={24} />

              <Button isFullWidth size={48} type="submit" variant="primary">
                Sign in
              </Button>
            </Column>
          </form>
          <Spacer height={24} />

          <p className="text-gray-11 text-14 text-center">
            Don&apos;t have an account?{" "}
            <Link
              to="."
              className="text-primary-11 font-semibold transition-opacity hover:opacity-75"
            >
              Create one
            </Link>
          </p>
          <Spacer height={80} />
        </Column>
      </Column>
    )
  },
})
