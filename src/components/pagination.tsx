"use client"

import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "./ui/button"
import { useRouter, usePathname, useSearchParams } from "next/navigation"

interface PaginationProps {
  pageNum: number
  boxCount: number
}

export const Pagination = ({ pageNum, boxCount }: PaginationProps) => {
  const quantityPage = Math.ceil(boxCount / 12)
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handleNextClick = () => {
    const params = new URLSearchParams(searchParams)
    params.set("page", `${pageNum + 1}`)
    router.replace(`${pathname}?${params.toString()}`)
  }

  const handlePrevClick = () => {
    const params = new URLSearchParams()
    params.set("page", `${pageNum - 1}`)
    router.replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="flex items-center justify-center gap-4 pb-8">
      <Button
        size="icon"
        variant="secondary"
        disabled={pageNum <= 1}
        onClick={handlePrevClick}
      >
        <ArrowLeft />
      </Button>
      <div className="flex size-5 items-center justify-center text-xl font-bold">
        {pageNum}
      </div>
      <Button
        size="icon"
        variant="secondary"
        disabled={quantityPage === pageNum}
        onClick={handleNextClick}
      >
        <ArrowRight />
      </Button>
    </div>
  )
}
