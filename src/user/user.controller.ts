import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "@prisma/client";

@Controller('users')
export class UserController{
    
    constructor(private userService: UserService){}

    @Get()
    async getAllUsers(){
        return await this.userService.getAllUsers();
    }

    @Post('register')
    async createUser(@Body() data: User){
        return await this.userService.createUser(data);
    }
}