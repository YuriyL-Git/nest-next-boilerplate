-- AlterTable
ALTER TABLE "User" ADD COLUMN     "icon" TEXT,
ALTER COLUMN "password" DROP NOT NULL;
