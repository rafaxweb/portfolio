import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { MiniproyectosComponent } from './components/miniproyectos/miniproyectos.component';
import { TextoComponent } from './components/acerca-de/texto/texto.component';
import { ContactoComponent } from './components/contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AcercaDeComponent,
    ProyectosComponent,
    MiniproyectosComponent,
    TextoComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
