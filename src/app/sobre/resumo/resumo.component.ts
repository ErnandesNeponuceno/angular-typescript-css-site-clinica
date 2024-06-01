import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.css']
})
export class ResumoComponent implements OnInit {
  resumos: { classe: string, titulo: string, descricao: string, imgSrc: string }[] = [
    { classe: 'res_1', titulo: '20 anos de histórias', imgSrc: 'assets/img/img_26.jpg',  descricao: 'A sua história faz parte da nossa, e é um prazer fazer parte dela.'},
    { classe: 'res_2', titulo: 'Atendimento premiado', imgSrc: 'assets/img/img_25.jpg',  descricao: 'Nosso atendimento é campeão. Da recepção ao dentista, temos orgulho de tratar você bem.'},
    { classe: 'res_3', titulo: 'Genuinamente Brasileira', imgSrc: 'assets/img/img_24.jpg',  descricao: 'Nascemos em 2004 no interior de Minas Gerais e hoje estamos presentes em 15 estados.'},
    { classe: 'res_4', titulo: 'Clínica especializada em atendimento infantil.', imgSrc: 'assets/img/img_23.jpg',  descricao: 'Temos orgulho de ser a favorita dos pequeninos. Nossa especialidade em atendimento infantil nos rendeu o prêmio TOP of KIDS em 2023.'},
    { classe: 'res_5', titulo: 'Dezenas de especialidades disponíveis.', imgSrc: 'assets/img/img_27.jpg',  descricao: 'Nossa clínica odontológica oferece dezenas de especialidades para garantir o melhor cuidado com a sua saúde bucal.'},
    { classe: 'res_6', titulo: 'Especialistas altamente qualificados', imgSrc: 'assets/img/img_11.png' , descricao: 'Contamos com especialistas altamente qualificados, dedicados a proporcionar o melhor tratamento odontológico para você.'}
  ];

  constructor() { }

  ngOnInit(): void { }
}
