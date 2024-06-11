import { ClearSearchButton } from "./clear-search-button"
import { Subtitle } from "./subtitle"

interface SearchResultInfoProps {
  search?: string
  boxCount: number
  page: number
  pageCount: number
}

export const SearchResultInfo = ({
  boxCount,
  page,
  pageCount,
  search,
}: SearchResultInfoProps) => {
  return (
    <div>
      <div className="mb-2 border-b pb-2">
        <Subtitle label="Resultado da pesquisa" />
      </div>
      <div className="flex flex-col items-start gap-2 sm:flex-row sm:justify-between ">
        <div>
          <p>
            Pesquisando por: <strong>{search}</strong>
          </p>
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
