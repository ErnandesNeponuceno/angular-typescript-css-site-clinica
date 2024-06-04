import { Component} from '@angular/core';
import {icones} from '../opcoes/data'

@Component({
  selector: 'app-opcoes',
  templateUrl: './opcoes.component.html',
  styleUrls: ['./opcoes.component.css']
})
export class OpcoesComponent {
  titulo: string = 'Especialidades';
  descricao: string = 'Confira os tratamentos oferecidos pela Odonto +';
  
  icones: { id: number, src: string, titulo: string, descricao: string, descricaoCompleta: string, button: string, itens: string[] }[] = icones;
  showModal: boolean = false;
  modalData: { src: string, titulo: string, descricaoCompleta: string, itens: string[] } = { src: '', titulo: '', descricaoCompleta:'', itens: [] };
  
  constructor() { }
  ngOnInit(): void { }

  handleClick(id: number): void {
    
    const iconeSelecionado = this.icones.find(icones => icones.id === id);
    
    if (iconeSelecionado) {
      this.modalData = {
        src: iconeSelecionado.src,
        descricaoCompleta: iconeSelecionado.descricaoCompleta,
        titulo: iconeSelecionado.titulo,
        itens: iconeSelecionado.itens || [] 
      };
      this.showModal = true;
     
    }
  }
  closeModal(): void {
    this.showModal = false;
  }
  
  
}

