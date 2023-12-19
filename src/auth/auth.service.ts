import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { comparePassword } from 'src/utils/bcrypt';
@Injectable()
export class AuthService {

    constructor(private prisma: PrismaService) {}

    async login(email:string, rawpassword:string){
        let resp ={
            error: false,
            statusCode: 200,
            data:{},
            message: "User logged in successfully"
        };
        try{
            const user = await this.prisma.user.findUnique({
                where: {email: email}
            });
            if(!user){
                resp.error = true;
                resp.statusCode = 400;
                resp.message = "User email not found";
            }
            else{
                const match = await comparePassword(rawpassword, user.password);
                if(match){
                    console.log("auth");
                    resp.data = user;
                }
                else{
                    resp.error = true;
                    resp.statusCode = 400;
                    resp.message = "Invalid password";
                }
            }
        }catch(e){
            resp.error = true;
            resp.statusCode = 400;
            resp.message = e.message;
        }
        return resp;
    }

}
