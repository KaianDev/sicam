export const getPageNum = (page: string | undefined) => {
  return page && !isNaN(parseInt(page)) ? parseInt(page) : 1
}
