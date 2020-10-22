/* ====================== Modificaciones ======================== -->
* Implementa el ruteo Principal navegar paginas
* Importa el ruteo Secundario navegar paginas hijas PagesRoutingModule/AuthRoutingModule
* Importa el componente NopagefoundComponent pagina 404
* ============================================================== */

//MODULOS
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { PagesRoutingModule } from './pages/pages-routing.module';

//COMPONENTES
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes:Routes=[
  {path: '', redirectTo: '/dashboard', pathMatch:'full'},
  {path: '**', component: NopagefoundComponent},
];

@NgModule({
  declarations: [],
  imports:[
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
