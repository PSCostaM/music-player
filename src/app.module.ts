import { Module } from '@nestjs/common';
import { SongModule } from './song/song.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [SongModule,UserModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
