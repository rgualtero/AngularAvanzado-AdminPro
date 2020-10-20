/* ====================== Modificaciones ======================== -->
* Implementa el ruteo Secundario carpeta auth
* Importa componentes LoginComponent/RegisterComponent
* ============================================================== */

//MODULOS DEFAULT
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//COMPONENTES
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

  const routes:Routes=[
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
  ];

  @NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
  })
  
  export class AuthRoutingModule { }





