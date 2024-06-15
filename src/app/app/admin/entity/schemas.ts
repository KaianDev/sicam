import { z } from "zod";

export const entitySchema = z.object({
  id: z.string(),
  name: z.string({ required_error: "Campo Obrigatório" }),
  uex: z.string().optional(),
})

export const createOrUpdateEntitySchema = entitySchema.omit({ id: true })