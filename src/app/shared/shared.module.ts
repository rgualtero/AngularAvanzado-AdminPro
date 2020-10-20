/*
*SE CREA MODULO PARA ORGANIZAR LOS COMPONENTES DE LA CARPETA SHARED
*Importa los modulos y componentes de carpeta Shared
*Declara y exporta los componentes de carpeta Shared
*/

//MODULOS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//COMPONENTES
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    BreadcrumbComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  exports:[    
    BreadcrumbComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
