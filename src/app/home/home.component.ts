import { Component, OnInit } from '@angular/core';
import Toastify from 'toastify-js';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const form = document.getElementById('formulario_home') as HTMLFormElement;
    const emailInput = document.getElementById('inputEmail4') as HTMLInputElement;
    const telefoneInput = document.getElementById('inputNumberphone') as HTMLInputElement;
    const nomeInput = document.getElementById('inputName') as HTMLInputElement;

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const email = emailInput.value;
      const telefone = telefoneInput.value;
      const nome = nomeInput.value;

      if (!this.validateEmail(email)) {
        this.showToast('Por favor, insira um email válido.', '#ef4444');
        return;
      }

      if (!this.validateTelefone(telefone)) {
        this.showToast('Por favor, insira um telefone válido.', '#ef4444');
        return;
      }

      if (!this.validateNome(nome)) {
        this.showToast('Por favor, insira seu nome.', '#ef4444');
        return;
      }
      
      this.showToast('ENVIADO COM SUCESSO. AGUARDE O CONTATO.', '#2ecc71');
      
      form.reset();
    });
    
  }

  validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  validateTelefone(telefone: string): boolean {
    const re = /^[0-9]{10,11}$/;
    return re.test(telefone);
  }

  validateNome(nome: string): boolean {
    const re = /^[a-zA-Z\s]+$/;
    return re.test(nome.trim());
  }

  showToast(message: string, backgroundColor: string): void {
    Toastify({
      text: message,
      duration: 4000,
      close: true,
      gravity: "top", 
      position: "center", 
      stopOnFocus: true,
      style: {
        background: backgroundColor,
      },
    }).showToast();
  }

}
