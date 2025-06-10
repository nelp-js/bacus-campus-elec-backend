/*
  Warnings:

  - You are about to drop the column `isActice` on the `Election` table. All the data in the column will be lost.
  - Added the required column `electionId` to the `Position` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Election_isActice_idx";

-- AlterTable
ALTER TABLE "Election" DROP COLUMN "isActice",
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "notes" TEXT;

-- AlterTable
ALTER TABLE "Position" ADD COLUMN     "electionId" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "Election_isActive_idx" ON "Election"("isActive");

-- AddForeignKey
ALTER TABLE "Position" ADD CONSTRAINT "Position_electionId_fkey" FOREIGN KEY ("electionId") REFERENCES "Election"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
