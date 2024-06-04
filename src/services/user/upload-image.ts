import { storage } from "@/lib/firebase"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import mime from "mime"

export const uploadImage = async (file: File, imageName: string) => {
  try {
    const bucketRef = ref(
      storage,
      `${imageName}.${mime.getExtension(file.type)}`,
    )
    const snapshot = await uploadBytes(bucketRef, file)
    const url = await getDownloadURL(snapshot.ref)
    return url
  } catch (error) {
    return false
  }
}
