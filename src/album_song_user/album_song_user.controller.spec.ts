import { Test, TestingModule } from '@nestjs/testing';
import { AlbumSongUserController } from './album_song_user.controller';

describe('AlbumSongUserController', () => {
  let controller: AlbumSongUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlbumSongUserController],
    }).compile();

    controller = module.get<AlbumSongUserController>(AlbumSongUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
