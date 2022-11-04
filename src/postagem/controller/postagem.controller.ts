import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";
import { Postagem } from "../entities/postagem.entity";
import { PostagemService } from "../service/postagem.service";

@UseGuards(JwtAuthGuard)
@Controller("/postagens")
export class PostagemController{
    constructor(private readonly postagemService: PostagemService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise <Postagem[]> {
        return this.postagemService.findAll();
    }


    /*A rota será ID do tipo numero, a resposta vai ser verificada e dara um ok
    dentro disso temos o nosso metodo findByID que vai ter como parâmetro o nosso ID do tipo INTEIRO
    ai sim ele verifica a postagem verificado se está vazia ou não.*/
    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id',ParseIntPipe) id:number): Promise<Postagem>{
        return this.postagemService.findById(id)
    }

    /*Temos nossa rota Titulo que recebe o parametro de titulo, e dentro do findbytitulo
    temos o retorno da nossa função, */
    @Get('/Titulo/:titulo')
    @HttpCode(HttpStatus.OK)
    findByTitulo(@Param('titulo')titulo:string): Promise<Postagem>{
        return this.postagemService.findByTitulo(titulo)
    }

    /*Criação do metodo Post em "postagem"*/
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() postagem: Postagem): Promise<Postagem>{
        return this.postagemService.create(postagem)
    }
    /*Criação de Alteração com Put*/
    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() postagem: Postagem): Promise<Postagem>{
        return this.postagemService.update(postagem)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        return this.postagemService.delete(id)
    }

}