/*
  Warnings:

  - Added the required column `ownerId` to the `boxes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "boxes" ADD COLUMN     "ownerId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "boxes" ADD CONSTRAINT "boxes_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
