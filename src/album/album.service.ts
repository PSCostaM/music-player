import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AlbumService {
  constructor(private prisma:PrismaService) {}
  resp:any = {
    "status": 200,
    "message": "success",
    "data":[]
  }

  async create(data:any) {
    try{
      this.resp.status = 200;
      this.resp.message = "success";
      //data recieved should be the name and description of the album
      this.resp.data = await this.prisma.album.create({
        data
      });
    }catch(e){
      this.resp.status = 400;
      this.resp.message = e.message;
      console.log("Error",e.message)
    }
    return this.resp;
  }

  async delete(id:number){
    try{
      this.resp.status = 200;
      this.resp.message = "success";
      this.resp.data = await this.prisma.album.delete({
        where: {id:id}
      });
    }catch(e){
      this.resp.status = 400;
      this.resp.message = e.message;
    }
    return this.resp;
  }
  async update(id:number,data:any){
    try{
      this.resp.status = 200;
      this.resp.message = "success";
      //where data should be the name and description of the album
      this.resp.data = await this.prisma.album.update({
      where: {id:id},
      data
      });
    }catch(e){
      this.resp.status = 400;
      this.resp.message = e.message;
    }
    return this.resp;
  }
}
