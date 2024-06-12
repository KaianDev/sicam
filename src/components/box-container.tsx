import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import type { SearchParams } from "@/types/search-params"

// Components
import { Pagination } from "@/components/pagination"
import { SearchResultInfo } from "@/components/search-result-info"

// Utilities
import { fetchBoxes } from "@/data/box"
import { buttonVariants } from "@/components/ui/button"
import { BoxList } from "@/components/box-list"

interface BoxContainerProps {
  backHref: string
  searchParams: SearchParams
}

export const BoxContainer = async ({
  backHref,
  searchParams,
}: BoxContainerProps) => {
  const results = await fetchBoxes(searchParams)

  // TODO: Fazer uma página de ocorreu um erro
  if (!results) return <div>Ocorreu um erro no carregamento dos dados</div>

  const { boxCount, boxes, first, last, next, page, pageCount, prev } = results

  const { entity, search, sector, page: pageSearch } = searchParams
  const hasParams = search || entity || sector

  return (
    <div className="flex h-full flex-1 flex-col gap-6">
      {hasParams && (
        <SearchResultInfo
          searchParams={searchParams}
          page={page}
          boxCount={boxCount}
          pageCount={pageCount}
        />
      )}
      {boxes.length > 0 && (
        <>
          <BoxList boxes={boxes} />
          <Pagination
            first={first}
            last={last}
            next={next}
            page={page}
            prev={prev}
          />
        </>
      )}

      {boxes.length === 0 && (
        <div className="flex flex-1 flex-col items-center justify-center gap-8">
          <div className="text-center text-2xl">
            {hasParams
              ? "Nenhum resultado encontrado para essa consulta"
              : "Não há caixas cadastradas"}
          </div>
          {(hasParams || pageSearch) && (
            <div className="text-center">
              <Link href={backHref} className={buttonVariants()}>
                <ArrowLeft />
                Voltar
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
