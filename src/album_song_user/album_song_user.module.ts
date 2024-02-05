import { Module } from '@nestjs/common';
import { AlbumSongUserController } from './album_song_user.controller';

@Module({
  controllers: [AlbumSongUserController]
})
export class AlbumSongUserModule {}
