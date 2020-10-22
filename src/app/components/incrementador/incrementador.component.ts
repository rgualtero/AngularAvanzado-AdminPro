/* ====================== Modificaciones ======================== 
*  Variable progreso tipo numeric
*  @Input progreso valor numerico del progreso, opcional renombrar como value
*  @Input btnClass 'btn-primary' clase para los botones
*  METODO CambiarValor incremeta valor (Si progreso > A 100 y valor es positivo / Si progreso < A 0 y valor es negativo)
*  ngOnInit concatena clase 'btn' a los valores de btnClass 
*  @Output Inicializa valorProgreso tipo numerico para enviar dato a los progressBar 
*  METODO onChange controla valor digitado en caja de texto (entre 0 y 100) usando en incrementador.component.html 
============================================================= */

import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit{
  
  ngOnInit() {
    this.btnClass = `btn ${ this.btnClass}`;
  }

  //@Input() progreso: number = 50;
  @Input('value') progreso: number = 50;
  @Input() btnClass: string = 'btn-primary';

  @Output() valorProgreso: EventEmitter<number> = new EventEmitter();
 
    CambiarValor(valor: number) {
      if (this.progreso >= 100 && valor >= 0) {
        this.valorProgreso.emit(100);
        return this.progreso = 100;
      }
      if (this.progreso <= 0 && valor < 0) {
        this.valorProgreso.emit(0);
        return this.progreso = 0;
      }
  
      this.progreso = this.progreso + valor;
      this.valorProgreso.emit(this.progreso);
    }

    onChange(nuevoValor: number){

      if( nuevoValor >= 100 ){
        this.progreso = 100;
      }else if(nuevoValor<=0){
        this.progreso=0;
      }else{
        this.progreso=nuevoValor;
      }

      this.valorProgreso.emit(this.progreso);

        console.log(this.progreso);
    }

  
}
