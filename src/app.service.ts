import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello world';
  }
  getBSM(): string {
    return 'Comunicação,Proatividade </br>- Responsabilidade Pessoal </br>- Profissionalismo </br>- Mentalidade de Crescimento </br>- Comunicação </br>- Trabalho em Equipe </br>- Atenção para Detalhes </br>- Precisão </br>- Técnica'
  }
  getListaDeConteudo(): string {
    return 'Aprender nextjs e banco de dados';
  }
}