/*
*SE CREA MODULO AUTH
*Importa componentes de carpeta auth/login.component.html y register.component.html
*Declara y exporta los componentes de carpeta auth 
*/

//MODULOS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//COMPONENTES
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [    
    LoginComponent,
    RegisterComponent,
  ],
  exports:[
    LoginComponent,
    RegisterComponent,],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
