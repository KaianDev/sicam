"use client"
import { Eraser } from "lucide-react"

// Components
import { Button } from "./ui/button"

// Utilities
import { useSearchContext } from "@/context/search"

export const ClearSearchButton = () => {
  const { clearSearch } = useSearchContext()

  return (
    <Button onClick={clearSearch} variant="outline">
      <Eraser className="mr-2" /> Limpar pesquisa{" "}
    </Button>
  )
}
