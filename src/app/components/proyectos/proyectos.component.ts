import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/modelos_de_datos/proyects';
import { ProyectosService } from '../../services/proyectos.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: Array<Proyecto> = [];

  etiquetas: Array<String> = [];

  constructor(private proyectosService:ProyectosService) { }

  ngOnInit(): void {
    this.obtenerProyectos();
    this.obtenerEtiquetas();
  }

  obtenerProyectos() {
    this.proyectos = this.proyectosService.getProyectos();
  }

  obtenerEtiquetas() {
    this.etiquetas = this.proyectosService.getEtiquetas();
  }

  filtrarEtiquetas(etiqueta: String) {
    this.obtenerProyectos()
    const proyectosTemp: Array<Proyecto> = [];
    for (let proyecto of this.proyectos) {
      if (proyecto.lenguajes.includes(etiqueta)) {
        proyectosTemp.push(proyecto)
      }
    }

    this.proyectos = proyectosTemp;
  }
}
