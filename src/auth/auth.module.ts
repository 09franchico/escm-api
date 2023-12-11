import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

//Instalar o @nestjs/jwt
@Module({
    imports:[JwtModule.register({
        secret:'C%^W]u6m.Ev~4?54IP%;3<]!BsF@|:cj'
    })],
    controllers:[AuthController],
    providers:[AuthService]
})
export class AuthModule {}