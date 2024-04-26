-- CreateEnum
CREATE TYPE "EntityType" AS ENUM ('CITY', 'SCHOOL');

-- AlterTable
ALTER TABLE "entities" ADD COLUMN     "uex" TEXT;
