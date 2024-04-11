import { Search } from "lucide-react"

// Components
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export const SearchForm = () => {
  return (
    <div className="w-full md:w-2/3 lg:w-1/2">
      <form action="" className="flex gap-2">
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
