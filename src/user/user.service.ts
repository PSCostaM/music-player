import { PrismaService } from "src/prisma/prisma.service";
import { User } from "@prisma/client";
import { Injectable } from "@nestjs/common";
import { encodePassword } from "src/utils/bcrypt";

@Injectable()
export class UserService{
    
    constructor(private prisma: PrismaService){}
    
    async getAllUsers(){
        let resp ={
            error: false,
            statusCode: 200,
            data:{},
            message: "Users fetched successfully"
        };
        try{
            resp.data = await this.prisma.user.findMany();
        }catch(e){
            resp.error = true;
            resp.statusCode = 400;
            resp.message = e.message;
        }
        return resp;
    }

    async createUser(data: User){
        let resp ={
            error: false,
            statusCode: 200,
            data:{},
            message: "User created successfully"
        };
        try{
            const {email} = data;
            const user = await this.prisma.user.findUnique({
                where: {email: email}
            });
            if(user){
                resp.error = true;
                resp.statusCode = 400;
                resp.message = "User already exists";
            }
            else{
                data.password = await encodePassword(data.password);
                console.log("DATA",data);
                resp.data = await this.prisma.user.create({
                    data: data
                });
            }
            
        }catch(e){
            resp.error = true;
            resp.statusCode = 400;
            resp.message = e.message;
        }
        return resp;
    }

    async findUserByEmail(email: string){
        let resp ={
            error: false,
            statusCode: 200,
            data:{},
            message: "User fetched successfully"
        };
        try{
            resp.data = await this.prisma.user.findUnique({
                where: {email: email}
            });
        }catch(e){
            resp.error = true;
            resp.statusCode = 400;
            resp.message = e.message;
        }
        return resp;
    }
}
