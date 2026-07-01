import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex h-[80vh] w-full flex-col items-center justify-center bg-brand-dark">
      <div className="flex flex-col items-center justify-center emil-enter">
        {/* Fast spinning loader for perceived performance */}
        <Loader2 className="size-10 text-primary animate-spin" style={{ animationDuration: '0.5s' }} />
        <p className="mt-4 text-brand-secondary font-medium emil-enter stagger-1 text-sm tracking-wide">
          Loading AddReach...
        </p>
      </div>
    </div>
  )
}
