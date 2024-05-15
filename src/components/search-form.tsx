"use client"
import { Search } from "lucide-react"

// Components
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { ChangeEvent, FormEvent, useState } from "react"

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
      if (params.has("page")) params.delete("search")
      params.set("search", term)
    }

    router.replace(`${path}?${params.toString()}`)
  }

  const handleChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams)
    if (e.target.value.trim() !== "") {
      setTerm(e.target.value)
    } else {
      params.delete("page")
      params.delete("search")
      setTerm("")
    }
    router.replace(`${path}`)
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
          onChange={handleChangeInputValue}
          value={term}
        />
        <button className="top absolute left-2 top-0 size-9 text-muted-foreground">
          <Search />
        </button>
      </form>
    </div>
  )
}
