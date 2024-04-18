import { loginSchema } from "@/lib/zod"
import { z } from "zod"

export type LoginSchema = z.infer<typeof loginSchema>
