import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller()
export class AuthController{
    constructor(private authService: AuthService){}

    @Post('signup')
    signup(){}

    signin(){}
}