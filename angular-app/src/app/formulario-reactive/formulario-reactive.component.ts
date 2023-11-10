import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactive',
  template: `
              <form [formGroup]="meuForm" (ngSubmit)="enviar()">
                <label for="nome">Nome:</label>
                <input type="text" id="nome" formControlName="nome">

                <label for="email">Email:</label>
                <input type="email" id="email" formControlName="email">

                <button type="submit">Enviar</button>
              </form>
            `
  // standalone: true,
  // imports: [CommonModule],
  // templateUrl: './formulario-reactive.component.html',
  // styleUrl: './formulario-reactive.component.css'
})
export class FormularioReactiveComponent {
  meuForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.meuForm = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  enviar() {
    if (this.meuForm.valid) {
      // Lógica para processar os dados
    }
  }
}




