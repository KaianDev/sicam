import { Prisma } from "@prisma/client"

export type BoxWithEntityAndSector = Prisma.BoxGetPayload<{
  include: {
    entity: true
    sector: true
  }
}>
