import { z } from "zod"
import {
  updateUserProfileSchema,
  changePasswordSchema,
  profileAvatarFormSchema,
} from "./schemas"

export type UpdateProfileData = z.infer<typeof updateUserProfileSchema>
export type ChangePasswordData = z.infer<typeof changePasswordSchema>
export type ProfileAvatarData = z.infer<typeof profileAvatarFormSchema>
