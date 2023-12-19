import { Controller, Param } from '@nestjs/common';
import { SongService } from './song.service';
import { Get, Post, Put, Delete, Body } from '@nestjs/common';
import { Song } from '@prisma/client';

@Controller('songs')
export class SongController{
    constructor(private songService : SongService){}

    @Get()
    async getAllSongs(){
        return await this.songService.getAllSongs();
    }

    @Post()
    async createSong(@Body() data: Song){
        return await this.songService.createSong(data);
    }

    @Get(':id')
    async getSongById(@Param('id') id: string){
        return await this.songService.getSongById(Number(id));
    }

    @Delete(':id')
    async deleteSongById(@Param('id') id: string){
        return await this.songService.deleteSong(Number(id));
    }

    @Put(':id')
    async updateSongById(@Param('id') id: string, @Body() data: Song){
        return await this.songService.updateSong(Number(id), data);
    }
    
}