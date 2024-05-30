import { z } from "zod"
import {
  CreateOrUpdateBoxSchema,
  CreateOrUpdateEntitySchema,
  CreateOrUpdateSectorSchema,
  UpdateUserWithOutPasswordSchema,
  CreateUserSchema,
  SendMailSchema,
  loginSchema,
  UpdateUserProfileSchema,
  ChangePasswordSchema,
} from "@/lib/zod"

export type LoginSchema = z.infer<typeof loginSchema>

export type CreateOrUpdateBoxType = z.infer<typeof CreateOrUpdateBoxSchema>

export type CreateOrUpdateEntityType = z.infer<
  typeof CreateOrUpdateEntitySchema
>

export type CreateOrUpdateSectorType = z.infer<
  typeof CreateOrUpdateSectorSchema
>

export type CreateUserType = z.infer<typeof CreateUserSchema>

export type UpdateUserWithOutPasswordType = z.infer<
  typeof UpdateUserWithOutPasswordSchema
>

// Profile
export type UpdateProfileData = z.infer<typeof UpdateUserProfileSchema>
export type ChangePasswordData = z.infer<typeof ChangePasswordSchema>

export type SendMailType = z.infer<typeof SendMailSchema>
