import { z } from "zod";
import { createOrUpdateEntitySchema } from "./schemas";

export type CreateOrUpdateEntityData = z.infer<typeof createOrUpdateEntitySchema >