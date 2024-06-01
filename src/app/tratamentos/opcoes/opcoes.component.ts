import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opcoes',
  templateUrl: './opcoes.component.html',
  styleUrls: ['./opcoes.component.css']
})
export class OpcoesComponent implements OnInit {
  titulo: string = 'Especialidades';
  descricao: string = 'Confira os tratamentos oferecidos pela Odonto +';
  icones: { id: number, src: string, titulo: string, descricao: string, button: string }[] = [
    { id: 1, src: 'assets/img/5x.png', titulo: 'Clínico Geral', descricao: 'Descrição do Clínico Geral', button: 'Saiba mais' },
    { id: 2, src: 'assets/img/8x.png', titulo: 'Ortodontia', descricao: 'Descrição da Ortodontia', button: 'Saiba mais' },
    { id: 3, src: 'assets/img/3x.png', titulo: 'Implantes', descricao: 'Descrição dos Implantes', button: 'Saiba mais' },
    { id: 4, src: 'assets/img/7x.png', titulo: 'Estética', descricao: 'Descrição da Estética', button: 'Saiba mais' },
    { id: 5, src: 'assets/img/4x.png', titulo: 'Facetas', descricao: 'Descrição das Facetas', button: 'Saiba mais' },
    { id: 6, src: 'assets/img/1x.png', titulo: 'Odontopediatria', descricao: 'Descrição da Odontopediatria', button: 'Saiba mais' },
    { id: 7, src: 'assets/img/6x.png', titulo: 'Próteses', descricao: 'Descrição das Próteses', button: 'Saiba mais' },
    { id: 8, src: 'assets/img/2x.png', titulo: 'Cirurgia', descricao: 'Descrição da Cirurgia', button: 'Saiba mais' }
  ];

  constructor() { }

  ngOnInit(): void { }

  handleClick(id: number): void {
    console.log('Button ID:', id);
  }

}

