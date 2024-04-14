import { Box, School } from "@prisma/client"

export interface BoxWithSchool extends Box {
  school: School
}
