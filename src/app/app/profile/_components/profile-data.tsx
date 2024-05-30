"use client"

import { useState } from "react"

import { User } from "@prisma/client"

// Components
import { Button, buttonVariants } from "@/components/ui/button"
import { UpdateDataForm } from "./update-data-form"
import { ChangePasswordForm } from "./change-password-form"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface ProfileDataProps {
  user: User
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
            <p>{user.name}</p>
          </div>
          <div>
            <p className="font-semibold">E-mail</p>
            <p>johnsnow@mail.com</p>
          </div>
          <div>
            <p className="font-semibold">Setor</p>
            <p>CEGAF</p>
          </div>
          <div className="space-x-4">
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

      {/* TODO: Melhorar a tipagem dos dados do usuário no formulário */}
      {showForm.alterData && (
        <UpdateDataForm user={user} hideForms={hideForms} />
      )}

      {showForm.alterPassword && (
        <ChangePasswordForm userId={user.id} hideForms={hideForms} />
      )}
    </div>
  )
}
