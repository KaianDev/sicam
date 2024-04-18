import { Box, Entity, Sector } from "@prisma/client"

export interface BoxWithEntityAndSector extends Box {
  entity: Entity
  sector: Sector
}
