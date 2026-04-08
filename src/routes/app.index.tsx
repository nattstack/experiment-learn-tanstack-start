import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/app/")({
  component: function RouteAppIndex() {
    return (
      <>
        {Array.from({ length: 100 }).map((_, index) => (
          <p className="text-14 font-mono" key={index}>
            {index + 1}
          </p>
        ))}
      </>
    )
  },
})
