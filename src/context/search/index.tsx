"use client"

import { useCurrentPath } from "@/hooks"
import { useRouter, useSearchParams } from "next/navigation"
import { PropsWithChildren, createContext, useContext, useState } from "react"

interface SearchContextData {
  searchValue: string
  clearSearch: () => void
  setSearchValue: (term: string) => void
  updateSearch: () => void
}

const SearchContext = createContext({} as SearchContextData)

export const SearchContextProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter()
  const path = useCurrentPath()
  const searchParams = useSearchParams()

  const [searchValue, setSearchValue] = useState(
    searchParams.get("search") ?? "",
  )

  const updateSearch = () => {
    const params = new URLSearchParams(searchParams)
    if (searchValue.trim() !== "") {
      if (params.has("page")) params.delete("page")
      params.set("search", searchValue)
    }
    router.replace(`${path}?${params.toString()}`)
  }

  const clearSearch = () => {
    const params = new URLSearchParams(searchParams)
    setSearchValue("")
    params.delete("search")
    router.replace(path)
  }

  return (
    <SearchContext.Provider
      value={{ searchValue, clearSearch, updateSearch, setSearchValue }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export const useSearchContext = () => useContext(SearchContext)
