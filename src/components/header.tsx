import Link from "next/link"
import Image from "next/image"

// Components
import { SearchForm } from "@/components/search-form"
import { AsideMenu } from "@/components/aside-menu"
import { LoginDialog } from "@/components/login-dialog"

export const Header = () => {
  const session = true

  return (
    <header className="h-shadow sticky top-0 z-10 flex h-24 items-center justify-between gap-2 bg-green-700 px-4 sm:px-8">
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
            <LoginDialog />
          </>
        )}

        {session && <AsideMenu />}
      </div>
    </header>
  )
}
