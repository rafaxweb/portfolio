import { ContactoComponent } from './components/contacto/contacto.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AcercaDeComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'contacto', component: ContactoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
