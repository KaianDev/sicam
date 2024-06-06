"use client"
import { useSearchContext } from "@/context/search"
import { Search } from "lucide-react"
import { FormEvent } from "react"

export const SearchForm = () => {
  const { searchValue, updateSearch, setSearchValue } = useSearchContext()
  const handleSearch = (e: FormEvent) => {
    e.preventDefault()
    updateSearch()
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
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
        <button className="top absolute left-2 top-0 size-9 text-muted-foreground">
          <Search />
        </button>
      </form>
    </div>
  )
}
