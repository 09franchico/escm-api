import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { AuthLoginDTO } from "./dto/auth-loginDTO";
import { AuthService } from "./auth.service";
import { AuthGuard } from "src/guards/auth.guard";
import { Usuario } from "src/decorators/usuario.decorators";

@Controller('auth')
export class AuthController {

    constructor(private readonly authService:AuthService){}

    @Post('login')
    async login(@Body() {email, senha}:AuthLoginDTO){
       return this.authService.authLogin(email,senha)
    }

    @UseGuards(AuthGuard)
    @Get('account')
    async account(@Usuario() usuario){
        return usuario
    }
    
}