/*
  Warnings:

  - The primary key for the `Attendee` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Event` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `endDate` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `eventName` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `hidden` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `metadata` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `requiresRSVP` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `showAttendees` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `teamId` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `timeZone` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `visibility` on the `Event` table. All the data in the column will be lost.
  - The primary key for the `Host` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Attendee" DROP CONSTRAINT "Attendee_eventId_fkey";

-- DropForeignKey
ALTER TABLE "Host" DROP CONSTRAINT "Host_eventId_fkey";

-- AlterTable
ALTER TABLE "Attendee" DROP CONSTRAINT "Attendee_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "eventId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Attendee_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Attendee_id_seq";

-- AlterTable
ALTER TABLE "Event" DROP CONSTRAINT "Event_pkey",
DROP COLUMN "endDate",
DROP COLUMN "eventName",
DROP COLUMN "hidden",
DROP COLUMN "metadata",
DROP COLUMN "requiresRSVP",
DROP COLUMN "showAttendees",
DROP COLUMN "startDate",
DROP COLUMN "teamId",
DROP COLUMN "timeZone",
DROP COLUMN "userId",
DROP COLUMN "visibility",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Event_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Event_id_seq";

-- AlterTable
ALTER TABLE "Host" DROP CONSTRAINT "Host_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "eventId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Host_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Host_id_seq";

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
