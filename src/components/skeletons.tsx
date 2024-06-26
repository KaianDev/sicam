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
      <Skeleton className="w-full bg-zinc-300">
        <Skeleton className="h-12 w-full rounded-none rounded-t-md p-4">
          <Skeleton className="h-full w-1/2 bg-zinc-300"></Skeleton>
        </Skeleton>
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="flex h-16 gap-4 p-4">
            <Skeleton className="flex-1"></Skeleton>
            <Skeleton className="w-10 md:w-24"></Skeleton>
          </div>
        ))}
      </Skeleton>
    </div>
  )
}

export const BoxDetailsSkeleton = () => {
  return (
    <div className="container space-y-4 px-4 py-2 sm:px-8">
      <div className="flex justify-between">
        <Skeleton className="h-6 w-24" />
        <Skeleton className="h-6 w-16 rounded-full" />
      </div>
      <div className="mb-4 space-y-2 border-b pb-4">
        <Skeleton className="h-7 w-80" />
        <Skeleton className="h-6 w-full" />
      </div>

      <div className="space-y-2">
        <Skeleton className="h-6 w-32" />
        <div className="space-y-1">
          <Skeleton className="h-6 w-[80%]" />
          <Skeleton className="h-6 w-[88%]" />
          <Skeleton className="w-[78%]] h-6" />
        </div>
      </div>

      <div className="space-y-2">
        <Skeleton className="h-6 w-32" />
        <div className="space-y-1">
          <Skeleton className="h-6 w-[80%]" />
          <Skeleton className="h-6 w-[88%]" />
          <Skeleton className="w-[78%]] h-6" />
        </div>
      </div>

      <div className="flex flex-col items-end justify-end gap-1">
        <Skeleton className="h-3 w-48" />
        <Skeleton className="h-6 w-64" />
      </div>

      <div className="flex justify-end">
        <Skeleton className="h-10 w-24" />
      </div>
    </div>
  )
}

export const EntityBoxListSkeleton = () => {
  return (
    <div className="">
      <div className="mb-4 flex justify-between">
        <Skeleton className="h-10 w-24" />
        <Skeleton className="h-10 w-24" />
      </div>
      <div className="mb-10 space-y-2 border-b pb-4">
        <Skeleton className="h-7 w-28" />
        <Skeleton className="h-6 w-full" />
      </div>

      <BoxesListSkeleton />
    </div>
  )
}

export const ProfilePageSkeleton = () => {
  return (
    <div className="container space-y-4 px-0 py-2">
      <div className="animate-pulse border-b border-zinc-300 pb-4">
        {/* TITLE */}
        <Skeleton className="h-14 w-[300px]" />
      </div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex items-center justify-center">
          <Skeleton className="size-36 sm:size-48" />
        </div>
        <div className="flex-1 space-y-4">
          <Skeleton className="h-10 w-full sm:max-w-[160px]" />
          <Skeleton className="h-10 w-full sm:max-w-[160px]" />
        </div>
      </div>
      <div>
        <div className="mb-2 animate-pulse border-b border-zinc-300 pb-2">
          {/* SUBTITLE */}
          <Skeleton className="h-7 w-52" />
        </div>

        <div className="space-y-4">
          <div className="space-y-1">
            <Skeleton className="h-[24px] w-28" />
            <Skeleton className="h-[24px] w-full" />
          </div>
          <div className="space-y-1">
            <Skeleton className="h-[24px] w-28" />
            <Skeleton className="h-[24px] w-full" />
          </div>
          <div className="space-y-1">
            <Skeleton className="h-[24px] w-28" />
            <Skeleton className="h-[24px] w-full" />
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            {/* BUTTONS */}
            <Skeleton className="h-10 sm:w-28" />
            <Skeleton className="h-10 sm:w-28" />
            <Skeleton className="h-10 sm:w-28" />
          </div>
        </div>
      </div>
    </div>
  )
}
export const CreateBoxPageSkeleton = () => {
  return (
    <div className="container space-y-4 px-0 py-2">
      <div className="animate-pulse border-b border-zinc-300 pb-4">
        <Skeleton className="h-14 w-[300px]" />
      </div>

      <div className="space-y-8">
        <div className="space-y-3">
          <Skeleton className="h-5 w-28" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-3">
            <Skeleton className="h-5 w-28" />
            <Skeleton className="h-20 w-full" />
          </div>
          <div className="space-y-3">
            <Skeleton className="h-5 w-28" />
            <Skeleton className="h-20 w-full" />
          </div>
        </div>

        <div className="flex gap-3">
          <Skeleton className="h-10 sm:w-28" />
          <Skeleton className="h-10 sm:w-28" />
        </div>
      </div>
    </div>
  )
}

export const UpdateBoxPageSkeleton = () => {
  return (
    <div className="container space-y-4 px-0 py-2">
      <div className="animate-pulse border-b border-zinc-300 pb-4">
        <Skeleton className="h-14 w-[300px]" />
      </div>

      <div className="space-y-8">
        <div className="space-y-3">
          <Skeleton className="h-5 w-28" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-3">
            <Skeleton className="h-5 w-28" />
            <Skeleton className="h-20 w-full" />
          </div>
          <div className="space-y-3">
            <Skeleton className="h-5 w-28" />
            <Skeleton className="h-20 w-full" />
          </div>
        </div>

        <div className="flex gap-3">
          <Skeleton className="h-10 sm:w-28" />
          <Skeleton className="h-10 sm:w-28" />
        </div>
      </div>
    </div>
  )
}

{
  /* <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex items-center justify-center">
          <Skeleton className="size-36 sm:size-48" />
        </div>
        <div className="flex-1 space-y-4">
          <Skeleton className="h-10 w-full sm:max-w-[160px]" />
          <Skeleton className="h-10 w-full sm:max-w-[160px]" />
        </div>
  </div> */
}
// <div>
//   <div className="mb-2 animate-pulse border-b border-zinc-300 pb-2">
//     {/* SUBTITLE */}
//     <Skeleton className="h-7 w-52" />
//   </div>
// </div>

// <div className="space-y-4">
//   <div className="space-y-1">
//     <Skeleton className="h-[24px] w-28" />
//     <Skeleton className="h-[24px] w-full" />
//   </div>
//   <div className="space-y-1">
//     <Skeleton className="h-[24px] w-28" />
//     <Skeleton className="h-[24px] w-full" />
//   </div>
//   <div className="space-y-1">
//     <Skeleton className="h-[24px] w-28" />
//     <Skeleton className="h-[24px] w-full" />
//   </div>
//   <div className="flex flex-col gap-4 sm:flex-row">
//     {/* BUTTONS */}
//     <Skeleton className="h-10 sm:w-28" />
//     <Skeleton className="h-10 sm:w-28" />
//     <Skeleton className="h-10 sm:w-28" />
//   </div>
// </div>
