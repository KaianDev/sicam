import { z } from "zod"
import { createOrUpdateBoxSchema } from "./schemas"

export type CreateOrUpdateBoxData = z.infer<typeof createOrUpdateBoxSchema>
