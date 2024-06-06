import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.css']
})
export class AvaliacaoComponent implements OnInit {
  titulo: string = 'Veja o que os nossos clientes dizem sobre nós';
  avaliacoes: { src: string, nome: string, avaliacao: string }[] = [
    { src: 'assets/img/img_15.png', nome: 'Pedro Costa', avaliacao: 'Excelente atendimento! Profissionais muito competentes e atenciosos. Recomendo!' },
    { src: 'assets/img/img_19.jpg', nome: 'João Santos', avaliacao: 'Serviço de qualidade! Fiquei muito satisfeito com o resultado do tratamento. Voltarei com certeza.' },
    { src: 'assets/img/img_16.jpg', nome: 'Ana Oliveira', avaliacao: 'Ambiente acolhedor e equipe muito prestativa. Estou muito feliz com o resultado do meu sorriso.' },
    { src: 'assets/img/img_17.png', nome: 'Laura Pereira', avaliacao: 'Ótima experiência! Tratamento eficaz e personalizado. Recomendo a todos!' },
    { src: 'assets/img/img_18.jpg', nome: 'Carlos Rodrigues', avaliacao: 'Atendimento impecável! Profissionais dedicados e ambiente muito agradável. Superou minhas expectativas.' },
    { src: 'assets/img/img_14.png', nome: 'Tainá Texeira', avaliacao: 'Muito profissionalismo! Recebi um tratamento de alta qualidade e me senti muito bem cuidado. Parabéns à equipe.' }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
