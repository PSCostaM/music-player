-- DropForeignKey
ALTER TABLE `Song` DROP FOREIGN KEY `Song_artistId_fkey`;

-- AlterTable
ALTER TABLE `Song` MODIFY `artistId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Song` ADD CONSTRAINT `Song_artistId_fkey` FOREIGN KEY (`artistId`) REFERENCES `Artist`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
