import Image from "next/image"
import { SearchForm } from "./search-form"
import Link from "next/link"
import { Button } from "./ui/button"

export const Header = () => {
  const session = null

  return (
    <>
      <header className="flex h-24 items-center justify-between gap-2 bg-green-700 px-4 shadow-2xl sm:px-8">
        <Link href="/">
          <Image
            src="/assets/logo.svg"
            alt="Logo CREDE 3 - Acaraú"
            width={0}
            height={0}
            sizes="100vw"
            className="sm:w-52 md:block md:w-96"
          />
        </Link>
        <div className="flex flex-1 items-center justify-end gap-4">
          <SearchForm />

          {!session && (
            <>
              <div className="h-14 w-[2px] bg-primary"></div>
              <Button className="bg-transparent uppercase">Entrar</Button>
            </>
          )}
        </div>
      </header>
      <div className="h-2 bg-zinc-500/50"></div>
    </>
  )
}
