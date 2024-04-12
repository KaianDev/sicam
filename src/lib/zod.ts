import { z } from "zod"

export const addSchoolSchema = z.object({
  uex: z.string().min(6),
  name: z.string(),
})
