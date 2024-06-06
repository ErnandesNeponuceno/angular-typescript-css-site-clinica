import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terceira-sessao',
  templateUrl: './terceira-sessao.component.html',
  styleUrls: ['./terceira-sessao.component.css']
})
export class TerceiraSessaoComponent implements OnInit {
  titulo: string = 'Odontologia Estética';
  descricao: string = 'O seu sorriso merece muito mais';
  icones: { src: string, titulo: string, descricao: string }[] = [
    { src: 'assets/img/img_5.png', titulo: 'Lente de Contato', descricao: 'Relativamente simples, pode ser feito de forma rápida e indolor. É uma opção muito vantajosa, por sua longa durabilidade e ótimo custo-benefício.' },
    { src: 'assets/img/img_6.png', titulo: 'Implante Dentário', descricao: 'O implante dentário busca substituir a queda de um ou mais dentes. Essa intervenção é capaz de melhorar a autoestima.' },
    { src: 'assets/img/img_7.png', titulo: 'Alinhadores Estéticos', descricao: 'Os alinhadores estéticos são utilizados na Odontologia, para solucionar problemas no sorriso, na gengiva e no tratamento de bruxismo.' },
    { src: 'assets/img/img_8.png', titulo: 'Clareamento', descricao: 'Procedimento estético que utiliza agentes clareadores para remover manchas e descolorações dos dentes, resultando em um sorriso mais branco e brilhante.' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
