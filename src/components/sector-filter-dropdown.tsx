"use client"
import { Filter } from "lucide-react"
import { useState } from "react"
import { useRouter, useSearchParams, usePathname } from "next/navigation"

import type { Sector } from "@prisma/client"

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
import { Button } from "@/components/ui/button"

interface SectorFilterDropdownProps {
  sectors: Sector[]
}

export const SectorFilterDropdown = ({
  sectors,
}: SectorFilterDropdownProps) => {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const searchValue = searchParams.get("sector")

  const sectorSearchValue = searchValue
    ? searchValue !== "ALL"
      ? searchValue
      : ""
    : "ALL"

  const [value, setValue] = useState(sectorSearchValue)

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
