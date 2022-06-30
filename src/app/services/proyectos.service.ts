import { Injectable } from '@angular/core';
import { Proyecto } from '../modelos_de_datos/proyects';


@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  etiquetas:Array<String> = ["HTML", "CSS", "JavaScript", "React"];

  proyectos: Array<Proyecto> = [
    {nombre: "Lista de Tareas", imagen: "../../assets/ListaTareas.png", lenguajes: ["HTML", "CSS", "JavaScript", "React"], url: "https://rafaxweb.github.io/lista-tareas-react/", github: 'https://github.com/rafaxweb/lista-tareas-react'},

    {nombre: "Calculadora", imagen: "../../assets/Calculadora_React.png", lenguajes: ["HTML", "CSS", "JavaScript", "React"], url: "https://rafaxweb.github.io/calculadora-react/", github: 'https://github.com/rafaxweb/calculadora-react'},
    {nombre: "Lanzamiento de producto", imagen: "../../assets/Lanzamiento_producto.png", lenguajes: ["HTML", "CSS"], url: "https://rafaxweb.github.io/lanzamiento-producto/", github: 'https://github.com/rafaxweb/lanzamiento-producto'},
    {nombre: "Formulario de encuestas", imagen: "../../assets/Encuestas.png", lenguajes: ["HTML", "CSS"], url: "https://rafaxweb.github.io/formulario_encuestas/", github: 'https://github.com/rafaxweb/formulario_encuestas'},
    {nombre: "Documentación técnica", imagen: "../../assets/Documentacion_tecnica.png", lenguajes: ["HTML", "CSS"], url: "https://codepen.io/rafaxweb/full/VwQLMxL", github: ''}

  ]

  constructor() { }

  getProyectos(): Array<Proyecto> {
    return this.proyectos;
  }

  getProyectos3(): Array<Proyecto> {
    const miniProyrctos: Array<Proyecto> = []
    for(let i=0; i<=2; i++) {
      miniProyrctos.push(this.proyectos[i])
    }

    return miniProyrctos;
  }

  getEtiquetas(): Array<String> {
    return this.etiquetas;
  }
}
