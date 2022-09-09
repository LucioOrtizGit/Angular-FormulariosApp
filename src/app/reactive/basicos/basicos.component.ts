import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  // miFormulario: FormGroup = new FormGroup({
  //   nombre:new FormControl('RTX 3060'),
  //   precio:new FormControl('500'),
  //   existencias:new FormControl('25'),

  // })

  miFormulario: FormGroup = this.formbuilder.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    precio: [0, [Validators.required, Validators.min(1)]],
    existencias: [0, [Validators.required, Validators.min(1)]]

  })

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.miFormulario.reset({
      nombre:'Rtx 3060',
      precio:500,
    })
  }

  campoEsValido(campo:string) {
    return this.miFormulario.controls[campo].errors
      && this.miFormulario.controls[campo].touched
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    
    this.miFormulario.reset();
  }



}
