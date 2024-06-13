"use client"
import { Filter } from "lucide-react"
import { useState } from "react"

// Components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
} from "@/components/ui/dropdown-menu"
import { Sector } from "@prisma/client"
import { Button } from "./ui/button"
import { useRouter, useSearchParams, usePathname } from "next/navigation"

interface SectorFilterDropdownProps {
  sectors: Sector[]
}

export const SectorFilterDropdown = ({
  sectors,
}: SectorFilterDropdownProps) => {
  const [value, setValue] = useState("ALL")
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleChangeValue = (value: string) => {
    setValue(value)
    const params = new URLSearchParams(searchParams)
    if (value !== "ALL") {
      params.set("sector", value)
    } else {
      params.delete("sector")
    }
    router.replace(`${pathname}?${params.toString()}`)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Filter size={20} className="mr-1" />
          Setor
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Filtrar por:</DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuRadioGroup value={value} onValueChange={handleChangeValue}>
          <DropdownMenuRadioItem value="ALL">Todos</DropdownMenuRadioItem>
          {sectors.map((sector) => (
            <DropdownMenuRadioItem key={sector.id} value={sector.name}>
              {sector.name}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
