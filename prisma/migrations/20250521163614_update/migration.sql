/*
  Warnings:

  - Added the required column `avatarId` to the `room-join-requests` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "room-join-requests" ADD COLUMN     "avatarId" INTEGER NOT NULL,
ADD COLUMN     "isAnonymous" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "name" VARCHAR(20);

-- AddForeignKey
ALTER TABLE "room-join-requests" ADD CONSTRAINT "room-join-requests_avatarId_fkey" FOREIGN KEY ("avatarId") REFERENCES "avatars"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
