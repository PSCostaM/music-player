import { Test, TestingModule } from '@nestjs/testing';
import { AlbumSongUserService } from './album_song_user.service';

describe('AlbumSongUserService', () => {
  let service: AlbumSongUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlbumSongUserService],
    }).compile();

    service = module.get<AlbumSongUserService>(AlbumSongUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
