import { Body, Controller, Post } from "@nestjs/common";
import { AuthLoginDTO } from "./dto/auth-loginDTO";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {

    constructor(private readonly authService:AuthService){}

    @Post('login')
    async login(@Body() {email, senha}:AuthLoginDTO){
       return this.authService.login(email,senha)
    }
    
    
}