import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/app/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      {Array.from({ length: 64 }).map((_, index) => (
        <p className="text-14 font-mono" key={index}>
          {index + 1}
        </p>
      ))}
    </>
  )
}
