import Link from "next/link"
import { ArrowLeft } from "lucide-react"

// Components
import { buttonVariants } from "@/components/ui/button"
import { Pagination } from "@/components/pagination"

// Utilities
import { getPageNum } from "@/helpers/get-page-num"
import { fetchBoxes } from "@/actions/box"
import { BoxItem } from "./box-item"

interface BoxListProps {
  backHref: string
  searchParams: {
    page?: string
    search?: string
  }
}

export const BoxList = async ({ backHref, searchParams }: BoxListProps) => {
  const { boxes, boxCount } = await fetchBoxes(searchParams)
  const pageNum = getPageNum(searchParams.page)

  return (
    <>
      {boxes.length > 0 && (
        <>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {boxes.map((box) => (
              <BoxItem box={box} key={box.id} />
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
