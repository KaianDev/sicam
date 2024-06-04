import prisma from "@/lib/db"

export const getEntities = async () => {
  return await prisma.entity.findMany({
    orderBy: [
      {
        uex: {
          sort: "asc",
          nulls: "first",
        },
      },
      {
        name: "asc",
      },
    ],
  })
}
