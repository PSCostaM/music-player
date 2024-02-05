import { Injectable } from "@nestjs/common";
import { Song } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class SongService{
  constructor(private prisma: PrismaService){}

  async getAllSongs(){
    return await this.prisma.song.findMany();
  }
  async getSongById(id: number){
    return await this.prisma.song.findUnique({
      where: {
        id: id
      }
    });
  }
  async createSong(data: Song){
    return await this.prisma.song.create({
      data: data
    });
  }
  async updateSong(id:number, data: Song){
    return await this.prisma.song.update({
      where: {
        id: id
      },
      data: data
    });
  }
  async deleteSong(id: number){
    return await this.prisma.song.delete({
      where: {
        id: id
      }
    });
  }

}
