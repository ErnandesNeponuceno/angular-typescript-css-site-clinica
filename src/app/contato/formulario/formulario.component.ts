import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const form = document.getElementById('orcamentoForm') as HTMLFormElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const telefoneInput = document.getElementById('telefone') as HTMLInputElement;

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const email = emailInput.value;
      const telefone = telefoneInput.value;

      if (!this.validateEmail(email)) {
        alert('Por favor, insira um email válido.');
        return;
      }

      if (!this.validateTelefone(telefone)) {
        alert('Por favor, insira um telefone válido.');
        return;
      }
      form.submit();
      alert('ISSO É UM TESTE');
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
}


