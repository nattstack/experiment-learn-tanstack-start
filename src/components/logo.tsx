import { Logomark } from "./logomark"
import { Logotype } from "./logotype"

export function Logo() {
  return (
    <div className="flex shrink-0 items-center gap-x-8">
      <Logomark />
      <Logotype />
    </div>
  )
}
