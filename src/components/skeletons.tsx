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

export const EntityTableSkeleton = () => {
  return (
    <div className="pb-6">
      <Skeleton className="w-full">
        <Skeleton className="h-12 w-full p-4">
          <Skeleton className="h-full w-1/2 bg-zinc-300"></Skeleton>
        </Skeleton>
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="flex h-16 gap-4 p-4">
            <Skeleton className="flex-1 bg-zinc-300"></Skeleton>
            <Skeleton className="w-10 bg-zinc-300 md:w-24"></Skeleton>
          </div>
        ))}
      </Skeleton>
    </div>
  )
}
