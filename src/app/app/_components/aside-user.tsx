import Image from "next/image"
import { mockUser } from "@/data/mock-user"

export const AsideUser = () => {
  const user = mockUser

  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-green-800 p-4 lg:w-full">
      <Image
        src={user.avatar || "/assets/default.png"}
        alt="default"
        width={100}
        height={100}
        className="rounded-full border-4 border-zinc-300 bg-zinc-100"
      />
      <div className="hidden text-center text-zinc-100 lg:block">
        <p>{user.name}</p>
        <p>{user.sectorId}</p>
      </div>
    </div>
  )
}
