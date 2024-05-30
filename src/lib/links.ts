import { Role } from "@prisma/client"
import {
  FolderPlus,
  Home,
  School,
  UserCog,
  Bookmark,
  ShieldAlert,
  Users,
} from "lucide-react"

export const links = [
  {
    href: "/app",
    label: "Home",
    icon: Home,
  },
  {
    href: "/app/box/create",
    label: "Adicionar Caixa",
    icon: FolderPlus,
  },
  {
    href: "/app/profile",
    label: "Perfil",
    icon: UserCog,
  },
  {
    href: "/app/admin",
    label: "Administrativo",
    icon: ShieldAlert,
  },
  {
    href: "/app/admin/entity",
    label: "Entidade",
    icon: School,
  },
  {
    href: "/app/admin/sector",
    label: "Setor",
    icon: Bookmark,
  },
  {
    href: "/app/admin/users",
    label: "Usuários",
    icon: Users,
  },
]

export const getLinks = (role: Role) => {
  return links.filter((link) => {
    if (!link.href.includes("/admin")) return link
    if (role === "ADMIN") return link
  })
}
