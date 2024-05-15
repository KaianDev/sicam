"use client"
import { Search } from "lucide-react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { FormEvent, useState } from "react"

export const SearchForm = () => {
  const [term, setTerm] = useState("")
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const path = pathname.includes("/app") ? "/app" : pathname

  const router = useRouter()

  const handleSearch = (e: FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams(searchParams)

    if (term.trim() !== "") {
      if (params.has("page")) params.delete("page")
      params.set("search", term)
    }
    router.replace(`${path}?${params.toString()}`)
  }

  return (
    <div className="w-full md:w-2/3 lg:w-1/2">
      <form
        className="relative h-9 overflow-hidden rounded-md"
        onSubmit={handleSearch}
      >
        <input
          type="search"
          name="search"
          placeholder="Pesquisar"
          className="h-full w-full border-0 pl-10 pr-2 outline-none ring-0"
          onChange={(e) => setTerm(e.target.value)}
          value={term}
        />
        <button className="top absolute left-2 top-0 size-9 text-muted-foreground">
          <Search />
        </button>
      </form>
    </div>
  )
}
