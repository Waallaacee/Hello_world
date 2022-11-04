import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from "@nestjs/common";
import { UsuarioLogin } from "../enitites/usuariologin.entity";
import { LocalAuthGuards } from "../guard/local-auth.guard";
import { AuthService } from "../service/auth.service";

@Controller('/auth')
export class AuthController {
    constructor( private authService: AuthService){ }

    @UseGuards(LocalAuthGuards)
    @HttpCode(HttpStatus.OK)
    @Post('/logar')
    async login(@Body() user: UsuarioLogin): Promise<any>{
        return this.authService.login(user)
    }
}