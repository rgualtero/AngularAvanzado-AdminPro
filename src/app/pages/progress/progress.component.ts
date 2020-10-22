import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})

export class ProgressComponent {

progres1: number = 15;
progres2: number = 25;

get getProgreso1(){
  return `${ this.progres1 }%`;
}

get getProgreso2(){
  return `${ this.progres2 }%`;
}


}
