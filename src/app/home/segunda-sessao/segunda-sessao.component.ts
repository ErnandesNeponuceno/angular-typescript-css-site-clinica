import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segunda-sessao',
  templateUrl: './segunda-sessao.component.html',
  styleUrls: ['./segunda-sessao.component.css']
})
export class SegundaSessaoComponent implements OnInit {
  titulo: string = 'Odonto +';
  descricao: string = 'A mais completa solução odontológica';
  icones: { src: string, texto: string }[] = [
    { src: 'assets/img/dentista-2.png', texto: '+ 400 de dentistas credenciados' },
    { src: 'assets/img/dentista.png', texto: '+ de 20 anos de história em odontologia' },
    { src: 'assets/img/limpar.png', texto: '+ 1.3 milhão de sorrisos sob nossos cuidados' },
    { src: 'assets/img/brasil.png', texto: '+ 1.150 municípios brasileiros' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}

