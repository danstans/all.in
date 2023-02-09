/*
  Warnings:

  - Added the required column `visibility` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "endDate" TIMESTAMP(3),
ADD COLUMN     "eventName" TEXT,
ADD COLUMN     "hidden" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "metadata" JSONB,
ADD COLUMN     "requiresRSVP" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "showAttendees" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "startDate" TIMESTAMP(3),
ADD COLUMN     "teamId" INTEGER,
ADD COLUMN     "timeZone" TEXT,
ADD COLUMN     "visibility" "Visibility" NOT NULL;

-- AddForeignKey
ALTER TABLE "Host" ADD CONSTRAINT "Host_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attendee" ADD CONSTRAINT "Attendee_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;
