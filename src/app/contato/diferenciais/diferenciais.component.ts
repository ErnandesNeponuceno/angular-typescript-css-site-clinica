import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diferenciais',
  templateUrl: './diferenciais.component.html',
  styleUrls: ['./diferenciais.component.css']
})
export class DiferenciaisComponent implements OnInit {
  diferenciais: { imgSrc: string, alt: string, titulo: string, descricao: string }[] = [
    { imgSrc: 'assets/img/icon_6.png', alt: 'Convênio para sua empresa', titulo: 'Convênio para sua empresa', descricao: 'Planos odontológicos exclusivos para empresas. Sem carência.' },
    { imgSrc: 'assets/img/icon_1.png', alt: 'Convênio para sua família', titulo: 'Convênio para sua família', descricao: 'Cuide da saúde bucal de toda a família.' },
    { imgSrc: 'assets/img/icon_2.png', alt: 'Atendimento personalizado', titulo: 'Atendimento personalizado', descricao: 'Atendimento humanizado, rápido e eficiente.' },
    { imgSrc: 'assets/img/icon_4.png', alt: 'Clínica 24 horas', titulo: 'Clínica 24 horas', descricao: 'Atendimento disponível a qualquer hora nas unidades Smart.' },
    { imgSrc: 'assets/img/icon_5.png', alt: 'Atendimento em toda a rede', titulo: 'Atendimento em toda a rede', descricao: 'Facilidade e conveniência em diversas localidades.' },
    { imgSrc: 'assets/img/brasil.png', alt: 'Unidades em todo o Brasil', titulo: 'Unidades em todo o Brasil', descricao: 'Presença nacional para melhor atender você. Presentes em +1.150 cidades.' }
  ];

  constructor() { }

  ngOnInit(): void { }
}
