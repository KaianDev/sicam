import Image from "next/image"
import { SearchForm } from "./search-form"
import Link from "next/link"
import { Button } from "./ui/button"
import { AsideMenu } from "./aside-menu"

export const Header = () => {
  const session = true

  return (
    <header className="h-shadow sticky top-0 flex h-24 items-center justify-between gap-2 bg-green-700 px-4 sm:relative sm:px-8">
      <Link href="/">
        <Image
          src="/assets/logo.png"
          alt="Logo CREDE 3 - Acaraú"
          width={0}
          height={0}
          sizes="100vw"
          className="sm:w-36"
        />
      </Link>
      <div className="flex flex-1 items-center justify-end gap-4">
        <SearchForm />

        {!session && (
          <>
            <div className="h-14 w-[2px] bg-primary"></div>
            <Button variant="ghost">Entrar</Button>
          </>
        )}

        {session && <AsideMenu user={{ name: "John Snow", role: "admin" }} />}
      </div>
    </header>
  )
}
