import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() modalData: { src: string, titulo: string, descricaoCompleta: string, itens: string[] } = { src: '', titulo: '', descricaoCompleta: '', itens: [] };
  @Output() closeModalEvent = new EventEmitter<void>();

  closeModal(): void {
    this.closeModalEvent.emit();
  }
}
