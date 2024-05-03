import Link from "next/link"
import { ArrowLeft, FolderOpen } from "lucide-react"

// Components
import { BoxItemActions } from "@/components/box-item-actions"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Pagination } from "@/components/pagination"

// Components
import { getPageNum } from "@/helpers/get-page-num"
import { fetchBoxes } from "@/actions/box"

interface BoxListProps {
  user?: any
  backHref: string
  searchParams: {
    page?: string
    search?: string
  }
}

export const BoxList = async ({
  user,
  backHref,
  searchParams,
}: BoxListProps) => {
  const { boxes, boxCount } = await fetchBoxes(searchParams)
  const pageNum = getPageNum(searchParams.page)

  return (
    <>
      {boxes.length > 0 && (
        <>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {boxes.map((box) => (
              <div
                key={box.id}
                className="space-y-4 overflow-hidden rounded-md bg-zinc-200 p-4 shadow-lg"
              >
                <Badge variant="secondary">{box.sector.name}</Badge>
                <div className="flex items-center gap-2 overflow-hidden">
                  <FolderOpen size={30} />
                  <div className="flex-1 truncate" title={box.entity.name}>
                    <strong className="truncate">{box.entity.name}</strong>
                    <p className="text-xl font-bold leading-none">
                      nº {box.numBox}
                    </p>
                  </div>
                </div>
                <div className="text-sm">
                  <p>Nessa pasta estão os seguintes processos:</p>
                  <p className="line-clamp-2 min-h-10">{box.content}</p>
                </div>
                <BoxItemActions box={box} userId={user && user.id} />
              </div>
            ))}
          </div>
          <Pagination pageNum={pageNum} boxCount={boxCount} />
        </>
      )}

      {boxes.length === 0 && (
        <div className="flex min-h-[calc(100dvh-280px)] flex-col items-center justify-center gap-8">
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
    </>
  )
}
