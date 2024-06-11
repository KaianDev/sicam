import type { SearchParams } from "@/types/search-params"
import { ClearSearchButton } from "./clear-search-button"
import { Subtitle } from "./subtitle"

interface SearchResultInfoProps {
  boxCount: number
  pageCount: number
  page: number
  searchParams: SearchParams
}

export const SearchResultInfo = ({
  boxCount,
  pageCount,
  page,
  searchParams: { entity, search, sector },
}: SearchResultInfoProps) => {
  return (
    <div>
      <div className="mb-2 border-b pb-2">
        <Subtitle label="Resultado da pesquisa" />
      </div>
      <div className="flex flex-col items-start gap-2 sm:flex-row sm:justify-between ">
        <div>
          {search && (
            <p>
              Pesquisando por: <strong>{search}</strong>
            </p>
          )}
          {sector && (
            <p>
              Filtrado por: <strong>{sector}</strong>
            </p>
          )}
          {entity && (
            <p>
              Filtrado por: <strong>{entity}</strong>
            </p>
          )}

          <p>
            Quantidade de resultados: <strong>{boxCount}</strong>
          </p>
          {boxCount > 0 && (
            <p>
              Página:
              <strong>{` ${page} de ${pageCount}`}</strong>
            </p>
          )}
        </div>
        {boxCount > 0 && <ClearSearchButton />}
      </div>
    </div>
  )
}
