import { Proyecto } from 'src/app/modelos_de_datos/proyects';
import { Component, OnInit } from '@angular/core';
import { ProyectosService } from '../../services/proyectos.service';

@Component({
  selector: 'app-miniproyectos',
  templateUrl: './miniproyectos.component.html',
  styleUrls: ['./miniproyectos.component.css']
})
export class MiniproyectosComponent implements OnInit {

  proyectos: Array<Proyecto> = [];

  constructor(private proyectosService:ProyectosService) { }

  ngOnInit(): void {
    this.obtenerProyectos();
  }

  obtenerProyectos():void {
    this.proyectos = this.proyectosService.getProyectos3();
  }

}
