import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello my Friend';
  }
  getBSM(): string {
    return '--------------------------------------------------MENTALIDADES--------------------------------------------------'+
    '<BR>1 - Participa de sessões síncronas pontualmente todos os dias'+'<BR>'+
     '<BR>2 - Complete todos as tarefas da turma e do programa em tempo hábil, sem dar desculpas.'+'<BR>'+
     '<BR>3 - Aproveite ao máximo as atividades de aprendizagem, incluindo fóruns de discussão e atividades <BR>com parceiros em salas de discussão onde o instrutor não está presente'+'<BR>'+
     '<BR>4 - Frequente o horário de atendimento disponível e faça perguntas ao instrutor se ele não entender <BR>o conteúdo das atividades assíncronas e módulos independentes.' + '<BR>'+
     '<BR>5 - Não desista diante dos desafios, inclusive diante das dificuldades técnicas que surgem.';
  }
  getAprendizagem(): string {
    return 'Conseguir incluir tudo que aprendi essa semana, no nosso projeto integrador';
  }
}
