import { Prisma } from "@prisma/client"
import { fetchEntityWithBoxes } from "@/actions/entity"

export type EntityWithBoxes = Prisma.PromiseReturnType<
  typeof fetchEntityWithBoxes
>
