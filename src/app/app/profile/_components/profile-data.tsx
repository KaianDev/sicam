"use client"

import Link from "next/link"
import { useState } from "react"

import type { UserWithSector } from "@/types/user"

// Components
import { Button, buttonVariants } from "@/components/ui/button"

// Utilities
import { UpdateDataForm } from "./update-data-form"
import { ChangePasswordForm } from "./change-password-form"
import { cn } from "@/lib/utils"

interface ProfileDataProps {
  user: UserWithSector
}

export const ProfileData = ({ user }: ProfileDataProps) => {
  const [showForm, setShowForm] = useState({
    alterData: false,
    alterPassword: false,
  })

  const hideForms = () => {
    setShowForm({
      alterData: false,
      alterPassword: false,
    })
  }

  return (
    <div className="space-y-4 pb-8">
      {!showForm.alterData && !showForm.alterPassword && (
        <>
          <div>
            <p className="font-semibold">Nome</p>
            <p>{user?.name}</p>
          </div>
          <div>
            <p className="font-semibold">E-mail</p>
            <p>{user?.email}</p>
          </div>
          <div>
            <p className="font-semibold">Setor</p>
            <p>{user?.sector.name}</p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              variant="secondary"
              onClick={() => setShowForm({ ...showForm, alterData: true })}
            >
              Alterar dados
            </Button>
            <Button
              variant="secondary"
              onClick={() => setShowForm({ ...showForm, alterPassword: true })}
            >
              Alterar senha
            </Button>

            <Link
              href="/app"
              className={cn(buttonVariants({ variant: "ghost" }), "text-black")}
            >
              Cancelar
            </Link>
          </div>
        </>
      )}

      {showForm.alterData && (
        <UpdateDataForm user={user} hideForms={hideForms} />
      )}

      {showForm.alterPassword && (
        <ChangePasswordForm userId={user?.id!} hideForms={hideForms} />
      )}
    </div>
  )
}
