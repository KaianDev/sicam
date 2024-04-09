import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "./ui/button"

export const Pagination = () => {
  return (
    <div className="flex items-center justify-center gap-4 pb-8">
      <Button size="icon" className="bg-green-700 hover:bg-green-800">
        <ArrowLeft />
      </Button>
      <div className="flex size-5 items-center justify-center text-xl font-bold">
        1
      </div>
      <Button size="icon" className="bg-green-700 hover:bg-green-800">
        <ArrowRight />
      </Button>
    </div>
  )
}
