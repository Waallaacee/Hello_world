import { Body, Controller, Get, HttpCode, HttpStatus, Post, Put, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/AUTH/guard/jwt-auth.guard";
import { Usuario } from "../entities/usuario.entity";
import { UsuarioService } from "../service/usuario.service";

@UseGuards(JwtAuthGuard)
@Controller('/usuarios')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) {}

    @UseGuards(JwtAuthGuard)
    @Get('/all')
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Usuario[]>{
        return this.usuarioService.findAll()
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    getId(id: number): Promise<Usuario>{
        return this.usuarioService.findById(id)
    }

    @Post('/cadastrar')
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() usuario: Usuario): Promise<Usuario> {
        return this.usuarioService.create(usuario)
    }

    @UseGuards(JwtAuthGuard)
    @Put('/atualizar')
    @HttpCode(HttpStatus.OK)
    async update(@Body () usuario: Usuario): Promise<Usuario> {
        return this.usuarioService.update(usuario)
    }

}