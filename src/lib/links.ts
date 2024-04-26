import {
  FolderPlus,
  Home,
  School,
  User,
  Bookmark,
  ShieldAlert,
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
    href: "/app/admin/user",
    label: "Usuário",
    icon: User,
  },
]
