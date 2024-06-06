import Link from "next/link"
import { ArrowLeft, Eraser } from "lucide-react"

// Components
import { BoxItem } from "@/components/box-item"
import { Subtitle } from "@/components/subtitle"
import { BackLink } from "@/components/back-link"
import { buttonVariants } from "@/components/ui/button"
import { Pagination } from "@/components/pagination"

// Utilities
import { fetchBoxes } from "@/data/box"

interface BoxListProps {
  backHref: string
  searchParams: {
    page?: string
    search?: string
  }
}

export const BoxList = async ({ backHref, searchParams }: BoxListProps) => {
  const results = await fetchBoxes(searchParams)

  // TODO: Fazer uma página de ocorreu um erro
  if (!results) return <div>Ocorreu um erro no carregamento dos dados</div>

  const { boxCount, boxes, first, last, next, page, pageCount, prev } = results

  return (
    <div className="flex flex-1 flex-col gap-6 justify-between h-full">
      {searchParams.search && (
        <div>
          <div className="mb-2 border-b pb-2">
            <Subtitle label="Resultado da pesquisa" />
          </div>
          <div className="flex flex-col items-start gap-2 sm:flex-row sm:justify-between ">
            <div>
              <p>
                Pesquisando por: <strong>{searchParams.search}</strong>
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
            {boxCount > 0 && (
              <BackLink className={buttonVariants({ variant: "outline" })}>
                <Eraser className="mr-2" />
                Limpar Pesquisa
              </BackLink>
            )}
          </div>
        </div>
      )}
      {boxes.length > 0 && (
        <>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {boxes.map((box) => (
              <BoxItem box={box} key={box.id} />
            ))}
          </div>
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
        <div className="flex min-h-[calc(100dvh-380px)] flex-col items-center justify-center gap-8">
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
