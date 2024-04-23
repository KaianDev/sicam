import Image from "next/image"

export const AsideUser = () => {
  return (
    <div className="flex  flex-col items-center justify-center gap-2 bg-green-800 p-4 lg:h-64 lg:w-full">
      <Image
        src="/assets/default.png"
        alt="default"
        width={140}
        height={140}
        className="rounded-full border-4 border-zinc-300 bg-zinc-100"
      />
      <div className="hidden text-center text-zinc-100 lg:block">
        <p>John Snow</p>
        <p>Cegaf</p>
      </div>
    </div>
  )
}
