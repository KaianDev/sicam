/*
  Warnings:

  - You are about to drop the column `ownerId` on the `boxes` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "boxes" DROP CONSTRAINT "boxes_ownerId_fkey";

-- AlterTable
ALTER TABLE "boxes" DROP COLUMN "ownerId";
