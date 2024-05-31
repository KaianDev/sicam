export const checkFileTypeIsImage = (file: File) => {
  const imageTypes = ["image/png", "image/jpeg", "image/jpg"]

  if (imageTypes.includes(file.type)) {
    return true
  }
  return false
}
