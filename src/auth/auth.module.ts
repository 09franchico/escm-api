import { Module, forwardRef } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UsuarioModule } from "src/modules/usuario/usuario.module";

//Instalar o @nestjs/jwt
@Module({
    imports:[JwtModule.register({
        secret:'C%^W]u6m.Ev~4?54IP%;3<]!BsF@|:cj'
    }),
    forwardRef(()=>UsuarioModule) //resolver dependecia circular [UsuarioModule e AuthModule]
    ],
    controllers:[AuthController],
    providers:[AuthService],
    exports:[AuthService]
})
export class AuthModule {}