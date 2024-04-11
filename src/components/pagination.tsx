import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "./ui/button"

export const Pagination = () => {
  return (
    <div className="flex items-center justify-center gap-4 pb-8">
      <Button size="icon" variant="secondary">
        <ArrowLeft />
      </Button>
      <div className="flex size-5 items-center justify-center text-xl font-bold">
        1
      </div>
      <Button size="icon" variant="secondary">
        <ArrowRight />
      </Button>
    </div>
  )
}
