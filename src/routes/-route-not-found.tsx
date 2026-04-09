import { Link } from "@tanstack/react-router"

export function RouteNotFound() {
  return (
    <main className="bg-gray-1 flex min-h-dvh items-center justify-center px-24 py-48">
      <div className="border-gray-4 bg-gray-2 shadow-2 w-full max-w-[44rem] rounded-[2.4rem] border p-32 text-center">
        <p className="text-primary-11 text-14 m-0 font-semibold tracking-[0.08em] uppercase">404</p>
        <h1 className="text-gray-12 text-32 mt-12 mb-8">Page not found</h1>
        <p className="text-gray-11 m-0 leading-[1.6]">
          The page you were looking for does not exist or may have moved.
        </p>
        <Link
          to="/"
          className="bg-primary-9 text-primary-1 mt-24 inline-flex rounded-full px-16 py-12 font-semibold transition-opacity hover:opacity-90"
        >
          Back to home
        </Link>
      </div>
    </main>
  )
}
