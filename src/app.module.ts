import { Module } from '@nestjs/common';
import { SongModule } from './song/song.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AlbumController } from './album/album.controller';
import { AlbumService } from './album/album.service';
import { AlbumModule } from './album/album.module';
import { AlbumSongUserService } from './album_song_user/album_song_user.service';
import { AlbumSongUserModule } from './album_song_user/album_song_user.module';

@Module({
  imports: [SongModule,UserModule, AuthModule, AlbumModule, AlbumSongUserModule],
  controllers: [AlbumController],
  providers: [AlbumService, AlbumSongUserService],
})
export class AppModule {}
