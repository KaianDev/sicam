import { Search } from "lucide-react"

// Components
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { searchAction } from "@/actions/search-action"

export const SearchForm = () => {
  return (
    <div className="w-full md:w-2/3 lg:w-1/2">
      <form action={searchAction} className="flex gap-2">
        <Input
          type="search"
          name="search"
          placeholder="Pesquisar"
          className="w-full border-0"
        />
        <Button variant="ghost" size="icon" className="w-12">
          <Search />
        </Button>
      </form>
    </div>
  )
}
