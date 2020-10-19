/* ====================== Modificaciones ======================== -->
* Implementa el ruteo Principal navegar paginas (login, register)
* Implementa el ruteo Secundario navegar paginas atributo children
* ============================================================== */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GraficalComponent } from './pages/grafical/grafical.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { ProgressComponent } from './pages/progress/progress.component';

const routes:Routes=[
{path: '', component: PagesComponent,
children: [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'progress', component: ProgressComponent},
  {path: 'grafical', component: GraficalComponent},
  {path: '', redirectTo: '/dashboard', pathMatch:'full'},
]},


{path: 'login', component: LoginComponent},
{path: 'register', component: RegisterComponent},
{path: '**', component: NopagefoundComponent},
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})


export class AppRoutingModule { }
