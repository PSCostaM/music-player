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
  async addSong(data:any) {
    try{
      this.resp.status = 200; 
      this.resp.message = "success";
      //find if it belongs to the album already
      const albumsong = await this.prisma.albumxSongxUser.create({
        data:{
          albumId: data.albumId,
          songId: data.songId,
          userId: data.userId
        }
      });
      this.resp.data = albumsong;
    }catch(e){
      this.resp.status = 500;
      this.resp.message = e.message;
    }
    return this.resp;
  }

  async songExistInAlbum(data:any){
    try{
      this.resp.status = 200;
      this.resp.message = "success";
      const exists = await this.prisma.albumxSongxUser.findFirst({
        where: {
          albumId: data.albumId,
          songId: data.songId
        }
      });
      this.resp.data = exists;
    }catch(e){
      this.resp.status = 500;
      this.resp.message = e.message;
    }
    return this.resp;
  }
  async findByUserId(id:number) {
    try{
      this.resp.status = 200;
      this.resp.message = "success";
      this.resp.data = await this.prisma.albumxSongxUser.findMany({
        where: {
          userId: id
        }
      });
    }catch(e){
      this.resp.error = 500;
      this.resp.message = JSON.stringify(e);
    }
    return this.resp;
  }

  async GetSongsByAlbumId(id:number) {
    try{
      this.resp.status = 200;
      this.resp.message = "success";
      this.resp.data = await this.prisma.albumxSongxUser.findMany({
        where: {
          albumId: id
        }
      });
    }catch(e){
      this.resp.status = 500;
      this.resp.message = e.message;
    }
  }


  async update(id: number) {
    return `This action updates a #${id} albumSongUser`;
  }

  async remove(id: number) {
    return `This action removes a #${id} albumSongUser`;
  }


}
