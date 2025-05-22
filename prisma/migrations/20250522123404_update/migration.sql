/*
  Warnings:

  - You are about to drop the column `isDeleted` on the `messages` table. All the data in the column will be lost.

*/
-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "RoomMemberStatus" ADD VALUE 'Leaved';
ALTER TYPE "RoomMemberStatus" ADD VALUE 'Removed';

-- AlterTable
ALTER TABLE "messages" DROP COLUMN "isDeleted";

-- AlterTable
ALTER TABLE "room-members" ADD COLUMN     "isRemoved" BOOLEAN NOT NULL DEFAULT false;
