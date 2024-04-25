import { Skeleton } from "./ui/skeleton"

export const BoxesListSkeleton = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <Skeleton key={i} className="h-[268px] space-y-4 bg-zinc-300 p-4">
          <Skeleton className="h-[22px] w-16 rounded-full" />
          <div className="flex items-center gap-4">
            <Skeleton className="size-[30px]" />
            <div className="w-full">
              <Skeleton className="h-6" />
              <Skeleton className="h-[20px] w-20" />
            </div>
          </div>
          <Skeleton className="h-[60px]" />
          <div className="">
            <Skeleton className="ml-auto h-[40px] w-1/2" />
          </div>
        </Skeleton>
      ))}
    </div>
  )
}
