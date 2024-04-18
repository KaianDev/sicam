/*
  Warnings:

  - You are about to drop the column `schoolId` on the `boxes` table. All the data in the column will be lost.
  - You are about to drop the `schools` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `entityId` to the `boxes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sectorId` to the `boxes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sectorId` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "boxes" DROP CONSTRAINT "boxes_schoolId_fkey";

-- AlterTable
ALTER TABLE "boxes" DROP COLUMN "schoolId",
ADD COLUMN     "entityId" TEXT NOT NULL,
ADD COLUMN     "sectorId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "sectorId" TEXT NOT NULL;

-- DropTable
DROP TABLE "schools";

-- CreateTable
CREATE TABLE "entities" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "entities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sectors" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "sectors_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "entities_name_key" ON "entities"("name");

-- CreateIndex
CREATE UNIQUE INDEX "sectors_name_key" ON "sectors"("name");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_sectorId_fkey" FOREIGN KEY ("sectorId") REFERENCES "sectors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "boxes" ADD CONSTRAINT "boxes_sectorId_fkey" FOREIGN KEY ("sectorId") REFERENCES "sectors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "boxes" ADD CONSTRAINT "boxes_entityId_fkey" FOREIGN KEY ("entityId") REFERENCES "entities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
