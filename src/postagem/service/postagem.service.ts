import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Postagem } from "../entities/postagem.entity";

@Injectable()
export class PostagemService {
    constructor(
        @InjectRepository(Postagem)
        private PostagemRepository: Repository<Postagem>
        ){}

    /* Aqui temos funcionando de forma assincrona
    o levantamento das informações de Postagem e assim que 
    chamar o findAll ele retorna todos os dados de postagem acumulado até agora */
    
    async findAll(): Promise<Postagem[]>{
        return await this.PostagemRepository.find({
            relations:{
                tema: true,
                usuario: true
            },
        });
    }


    //Esse async procura exatamente um unico ID 
    async findById(id: number): Promise<Postagem> {
        let postagem = await this.PostagemRepository.findOne({
            where: {
                id
            }, relations:{
                tema: true,
                usuario: true
            }
        })
        /*Se postagem não existir ele retorna o erro POSTAGEM NÃO EXISTENTE
        mas se achar*/ 
        if (!postagem)
            throw new HttpException('Postagem não existe',HttpStatus.NOT_FOUND)

            return postagem
    }
/*Diferente do ID não precisamos guardar nenhuma informação, ao invés disso iremos procurar diretamente
o titulo e retornar o "Valor"*/
    async findByTitulo(titulo: string): Promise<Postagem>{
        return await this.PostagemRepository.findOne({
            where: {
                titulo: ILike(`%${titulo}%`)
            },
            relations:{
                tema: true,
                usuario: true
            }
        })
    }
    /*Criação de Postagem (criação de linha)*/
    async create(postagem: Postagem): Promise<Postagem>{
        return this.PostagemRepository.save(postagem)
    }
 

    /*Criamos um metodo de alteração*/
    async update(postagem: Postagem): Promise<Postagem>{
        let buscarPostagem = await this.findById(postagem.id)

        if(!buscarPostagem || !postagem.id)
        throw new HttpException('Postagem Não Existe',HttpStatus.NOT_FOUND)

        return await this.PostagemRepository.save(postagem)
    }

    async delete(id: number): Promise<DeleteResult>{
        let buscarPostagem = await this.findById(id)

        if(!buscarPostagem)
            throw new HttpException('Postagem não encontrada', HttpStatus.NOT_FOUND)

            return await this.PostagemRepository.delete(id)
    }

}