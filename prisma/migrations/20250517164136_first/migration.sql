-- CreateEnum
CREATE TYPE "RoomStatus" AS ENUM ('Open', 'Closed');

-- CreateEnum
CREATE TYPE "RoomMemberRole" AS ENUM ('Owner', 'Member');

-- CreateEnum
CREATE TYPE "RoomMemberStatus" AS ENUM ('Active', 'Inactive');

-- CreateEnum
CREATE TYPE "AvatarStatus" AS ENUM ('Active', 'Inactive', 'Deleted');

-- CreateEnum
CREATE TYPE "RoomPhotoStatus" AS ENUM ('Active', 'Inactive', 'Deleted');

-- CreateEnum
CREATE TYPE "RoomJoinRequestStatus" AS ENUM ('Approve', 'Declined', 'Canceled', 'Timeout');

-- CreateEnum
CREATE TYPE "MessageContentType" AS ENUM ('Text', 'Media');

-- CreateTable
CREATE TABLE "rooms" (
    "id" SERIAL NOT NULL,
    "code" CHAR(12) NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "photoId" INTEGER NOT NULL,
    "status" "RoomStatus" NOT NULL DEFAULT 'Open',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "rooms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "room-members" (
    "id" SERIAL NOT NULL,
    "roomId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "name" VARCHAR(20),
    "avatarId" INTEGER NOT NULL,
    "isAnonymous" BOOLEAN NOT NULL DEFAULT false,
    "role" "RoomMemberRole" NOT NULL,
    "status" "RoomMemberStatus" NOT NULL DEFAULT 'Active',
    "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "room-members_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "avatars" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "status" "AvatarStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "avatars_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "room-photos" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "status" "RoomPhotoStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "room-photos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "room-join-requests" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "roomId" INTEGER NOT NULL,
    "status" "RoomJoinRequestStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "room-join-requests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "messages" (
    "id" SERIAL NOT NULL,
    "roomId" INTEGER NOT NULL,
    "memberId" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "contentType" "MessageContentType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "messages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "rooms_code_key" ON "rooms"("code");

-- CreateIndex
CREATE UNIQUE INDEX "room-members_id_userId_key" ON "room-members"("id", "userId");

-- AddForeignKey
ALTER TABLE "rooms" ADD CONSTRAINT "rooms_photoId_fkey" FOREIGN KEY ("photoId") REFERENCES "room-photos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "room-members" ADD CONSTRAINT "room-members_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "rooms"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "room-members" ADD CONSTRAINT "room-members_avatarId_fkey" FOREIGN KEY ("avatarId") REFERENCES "avatars"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "room-join-requests" ADD CONSTRAINT "room-join-requests_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "rooms"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "rooms"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "room-members"("id") ON DELETE CASCADE ON UPDATE CASCADE;
