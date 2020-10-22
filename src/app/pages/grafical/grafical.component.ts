import { Component } from '@angular/core';


@Component({
  selector: 'app-grafical',
  templateUrl: './grafical.component.html',
  styles: []
})


export class GraficalComponent {

  public labelVentas: string[] = ['Vehiculos','Alimentos','Ropa'];
  public DataVentas: string[] = ['200','400','300'];
}
