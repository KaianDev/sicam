"use client"
import { Search } from "lucide-react"

// Components
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useDebouncedCallback } from "use-debounce"

export const SearchForm = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const path = pathname.includes("/app") ? "/app" : pathname

  const router = useRouter()
  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams)

    if (term) {
      params.set("search", term)
    } else {
      params.delete("search")
    }
    router.replace(`${path}?${params.toString()}`)
  }, 300)

  return (
    <div className="w-full md:w-2/3 lg:w-1/2">
      <div className="relative h-9 overflow-hidden rounded-md">
        <input
          type="search"
          name="search"
          placeholder="Pesquisar"
          className="h-full w-full border-0 pl-10 pr-2 outline-none ring-0"
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchParams.get("search")?.toString()}
        />
        <button className="top absolute left-2 top-0 size-9 text-muted-foreground">
          <Search />
        </button>
      </div>
    </div>
  )
}
