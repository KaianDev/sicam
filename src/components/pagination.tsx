"use client"

import {
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "./ui/button"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { useState } from "react"

interface PaginationProps {
  page: number
  first: number | null
  last: number | null
  prev: number | null
  next: number | null
}

export const Pagination = ({
  page,
  first,
  last,
  next,
  prev,
}: PaginationProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [search, setSearch] = useState("")

  const handleNextClick = () => {
    const params = new URLSearchParams(searchParams)
    const searchTerm = params.get("search")?.toString()
    if (searchTerm) {
      setSearch(searchTerm)
    } else {
      setSearch("")
    }
    params.set("page", next!.toString())
    router.push(`${pathname}?${params.toString()}`)
  }

  const handlePrevClick = () => {
    const params = new URLSearchParams()
    if (search) params.set("search", search)
    params.set("page", prev!.toString())
    router.push(`${pathname}?${params.toString()}`)
  }

  const handleFirstClick = () => {
    const params = new URLSearchParams()
    if (search) params.set("search", search)
    params.set("page", first!.toString())
    router.push(`${pathname}?${params.toString()}`)
  }

  const handleLastClick = () => {
    const params = new URLSearchParams(searchParams)
    const searchTerm = params.get("search")?.toString()
    if (searchTerm) {
      setSearch(searchTerm)
    } else {
      setSearch("")
    }
    params.set("page", last!.toString())
    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="flex mt-auto items-center justify-center gap-4 pb-8">
      <div className="space-x-2">
        <Button
          size="icon"
          variant="secondary"
          disabled={first === page}
          onClick={handleFirstClick}
        >
          <ChevronFirst />
        </Button>
        <Button
          size="icon"
          variant="secondary"
          disabled={prev === null}
          onClick={handlePrevClick}
        >
          <ChevronLeft />
        </Button>
      </div>
      <div className="flex size-5 items-center justify-center text-xl font-bold">
        {page}
      </div>
      <div className="space-x-2">
        <Button
          size="icon"
          variant="secondary"
          disabled={next === null}
          onClick={handleNextClick}
        >
          <ChevronRight />
        </Button>
        <Button
          size="icon"
          variant="secondary"
          disabled={last === page}
          onClick={handleLastClick}
        >
          <ChevronLast />
        </Button>
      </div>
    </div>
  )
}
