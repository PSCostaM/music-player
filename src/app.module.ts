import { Module } from '@nestjs/common';
import { SongModule } from './song/song.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AlbumModule } from './album/album.module';
import { AlbumSongUserModule } from './album_song_user/album_song_user.module';

@Module({
  imports: [SongModule,UserModule, AuthModule, AlbumModule, AlbumSongUserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
