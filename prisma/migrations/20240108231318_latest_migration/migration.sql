/*
  Warnings:

  - Added the required column `sellerid` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "sellerid" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_sellerid_fkey" FOREIGN KEY ("sellerid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
