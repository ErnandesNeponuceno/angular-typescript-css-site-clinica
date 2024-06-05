import { Component, OnInit } from '@angular/core';
import Toastify from 'toastify-js';


@Component({
  selector: 'app-duvidas',
  templateUrl: './duvidas.component.html',
  styleUrls: ['./duvidas.component.css']
})
export class DuvidasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const form = document.getElementById('contact-form') as HTMLFormElement;
    const emailDuvidas = document.getElementById('emailDuvidas') as HTMLInputElement;

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const email = emailDuvidas.value;

      if (!this.validateEmail(email)) {
        this.showToast('Por favor, insira um email válido.', '#ef4444');
        return;
      }
      this.showToast('ENVIADO COM SUCESSO. ACOMPANHE O SEU E-MAIL', '#2ecc71');
      
      form.reset();
    });
    
  }

  validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
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
