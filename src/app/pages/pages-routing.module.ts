/* ====================== Modificaciones ======================== -->
* Implementa el ruteo Secundario carpeta pages
* Importa componentes DashboardComponent/GraficalComponent/PagesComponent/ProgressComponent
* ============================================================== */

//MODULOS
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//COMPONENTES
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficalComponent } from './grafical/grafical.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';

const routes: Routes = [
  {
    //path: '', component: PagesComponent,
    path: 'dashboard', component: PagesComponent,
      children: [
       // {path: 'dashboard', component: DashboardComponent},
        {path: '', component: DashboardComponent},
        {path: 'progress', component: ProgressComponent},
        {path: 'grafical', component: GraficalComponent},
      //  {path: '', redirectTo: '/dashboard', pathMatch:'full'},
  ]},

];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class PagesRoutingModule { }
