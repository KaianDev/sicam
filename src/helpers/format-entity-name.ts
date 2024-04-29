export const formatEntityName = (entityName: string, uex?: string | null) => {
  if (uex) return `${uex} - ${entityName}`
  return entityName
}
