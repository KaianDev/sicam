import Link from "next/link"
import { ArrowLeft } from "lucide-react"

// Components
import { Pagination } from "@/components/pagination"
import { SearchResultInfo } from "@/components/search-result-info"

// Utilities
import { fetchBoxes } from "@/data/box"
import { buttonVariants } from "@/components/ui/button"
import { BoxList } from "@/components/box-list"

interface BoxContainerProps {
  backHref: string
  searchParams: {
    page?: string
    search?: string
  }
}

export const BoxContainer = async ({
  backHref,
  searchParams,
}: BoxContainerProps) => {
  const results = await fetchBoxes(searchParams)

  // TODO: Fazer uma página de ocorreu um erro
  if (!results) return <div>Ocorreu um erro no carregamento dos dados</div>

  const { boxCount, boxes, first, last, next, page, pageCount, prev } = results

  return (
    <div className="flex h-full flex-1 flex-col gap-6">
      {searchParams.search && (
        <SearchResultInfo
          search={searchParams.search}
          boxCount={boxCount}
          page={page}
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
            {searchParams.search
              ? "Nenhum resultado encontrado para essa consulta"
              : "Não há caixas cadastradas"}
          </div>
          {(searchParams.search || searchParams.page) && (
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
