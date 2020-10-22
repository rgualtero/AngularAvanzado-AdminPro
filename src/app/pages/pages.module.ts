/*
*SE CREA MODULO PARA ORGANIZAR LOS COMPONENTES DE LA CARPETA PAGES
*Importa los modulos desde SharedModule 
*Importa los modulos desde rutas RouterModule 
*Importa componentes de carpeta pages
*Declara y exporta los componentes de carpeta Pages
*/

//MODULOS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';

//COMPONENTES
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficalComponent } from './grafical/grafical.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [    
    DashboardComponent,
    GraficalComponent,
    ProgressComponent,
    PagesComponent,
  ],
  exports: [   
    DashboardComponent,
    GraficalComponent,
    ProgressComponent,
    PagesComponent,  
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule,
    ComponentsModule
  ]
})

export class PagesModule { }
