import { IconLock } from "@nattstack/icons-outlined"
import { Button, Column, Input, Label, Row, Spacer } from "@nattstack/ui"
import { createFileRoute } from "@tanstack/react-router"
import type { SubmitEvent } from "react"

export const Route = createFileRoute("/coming-soon")({
  component: RouteComponent,
})

function RouteComponent() {
  async function onSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <Column as="main" className="min-h-dvh items-center justify-center px-16 pt-24 pb-144">
      <Column className="w-full max-w-[380px]">
        {/* Header */}
        <h1 className="text-24">Under construction</h1>
        <Spacer height={24} />

        {/* Form */}
        <form onSubmit={onSubmit}>
          <Column>
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

            <Button isFullWidth size={48} type="submit" variant="accent">
              Submit
            </Button>
          </Column>
        </form>
        <Spacer height={24} />
      </Column>
    </Column>
  )
}
