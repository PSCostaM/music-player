import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AlbumSongUserService {

  constructor(private prisma:PrismaService) {}
  resp : any = {
    status: 200,
    message: "Success",
    data : []
  }
  async create(data:any) {
    try{
     ;
      //then we create the link between the album and the song
      const albumSong = await this.prisma.albumxSongxUser.create({
        data:{
          albumId: data.albumId,
          songId: data.songId,
          userId: data.userId
        }
      });
    }catch(e){
      this.resp.status = 500;
      this.resp.message = e.message;
    }
    return this.resp;
  }

  async findAll() {
    return `This action returns all albumSongUser`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} albumSongUser`;
  }

  async update(id: number) {
    return `This action updates a #${id} albumSongUser`;
  }

  async remove(id: number) {
    return `This action removes a #${id} albumSongUser`;
  }


}
