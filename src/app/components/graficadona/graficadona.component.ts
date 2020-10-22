import { Component, Input } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-graficadona',
  templateUrl: './graficadona.component.html',
  styles: []
})


export class GraficadonaComponent {

  @Input() titulo: string = "Sin Titulo";
  @Input('labels') doughnutChartLabels: Label[] = ['Dato 1', 'Dato 2', 'Dato 3'];
  @Input('Data') doughnutChartData: MultiDataSet = [ [350, 450, 100] ];

  public colors:Color[] = [ {backgroundColor:[ '#40E0D0','#EE82EE','#F5DEB3' ]} ];

}
