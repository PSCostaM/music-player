import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AlbumService } from './album.service';

@Controller('album')
export class AlbumController {

  constructor(private albumService: AlbumService) {}

  @Post()
  async createAlbum(@Body() data : any) {
      return await this.albumService.create(data);
  }

  @Delete(':id')
  async deleteAlbum(id:string) {
      return await this.albumService.delete(+id);
  }

  @Put('update/:id')
  async updateAlbum(@Param('id') id: string, @Body() data: any) {
      return await this.albumService.update(Number(id),data);
  }

}
