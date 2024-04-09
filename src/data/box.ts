import type { Box } from "@/types/box-type"

export const getBoxes = async (): Promise<Box[]> => {
  const boxes: Box[] = []
  for (let i = 1; i <= 12; i++) {
    boxes.push({
      id: i + 1,
      content:
        "XXXXXXXX, SSSSSSSS, DDDDDD, OOOOOO, XXXXXXXX, SSSSSSSS, DDDDDD, OOOOOO, XXXXXXXX, SSSSSSSS, DDDDDD, OOOOOO",
      numBox: `#${i + 1}`,
      school: "Escola " + i,
    })
  }

  return boxes
}
