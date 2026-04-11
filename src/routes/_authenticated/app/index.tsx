import { Spacer } from "@nattstack/ui"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_authenticated/app/")({
  component: function RouteAppIndex() {
    return (
      <>
        <Spacer height={64} />
        {Array.from({ length: 100 }).map((_, index) => (
          <p className="text-14 font-mono" key={index}>
            {index + 1}
          </p>
        ))}
        <Spacer height={144} />
      </>
    )
  },
})
