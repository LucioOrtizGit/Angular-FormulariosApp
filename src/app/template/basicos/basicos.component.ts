import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!:NgForm;

  initForm = {
    producto: 'RTX 3080         ',
    precio: 1000,
    existencias: 10
  }

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido():boolean{
    return this.miFormulario?.controls['producto']?.invalid && 
    this.miFormulario?.controls['producto']?.touched
  }

  precioValido():boolean{
    return this.miFormulario?.controls['precio']?.value < 0 && 
    this.miFormulario?.controls['precio']?.touched
  }

  guardar() {
    console.log('Posteo Correcto');

    this.miFormulario.resetForm({
      producto:'cosa',
      precio:0,
      existencias:0
    });
    
  }

}
