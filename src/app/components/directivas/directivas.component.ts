import { Component } from '@angular/core';
import { Alumnos } from '../../Models/alumnos';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css'],
})
export class DirectivasComponent {
  tema: string = 'Directivas';

  //listaEstudiantes: Array<Estudiante> = [
  lista: Alumnos[] = [
    {
      nombre: 'Juan Fernando Pérez del Corral',
      carrera: 'Ingeniería en Mecatrónica',
      descripcion:
        'El ingeniero mecatrónico trabaja tanto en el sector público como en el privado, de producción y de servicios, diseñando, controlando e implantando sistemas de control electrónicos y sistemas de información computarizados',
      inscrito: false,
      promedio: 7.5,
    },
    {
      nombre: 'Valentina Laverde de la Rosa',
      carrera: 'Licenciatura en Enfermería',
      descripcion:
        'En el programa de Licenciatura en Enfermería (LEN) obtendrás las herramientas para ser un profesionista capaz de ejercer diferentes roles —como prestador de cuidados, educador, administrador o investigador— y de colaborar con el equipo de salud en los diferentes niveles de atención.',
      inscrito: true,
      promedio: 8,
    },
    {
      nombre: 'Sara Teresa Sánchez del Pinar',
      carrera: 'Ingeniería en Nanotecnología',
      descripcion:
        'Diseña métodos químicos y físicos en la producción de una sustancia, nanomaterial o nanoestructura con las propiedades más adecuadas para una aplicación específica. Desarrolla productos nanotecnológicos en un mercado específico, aplicando principios fundamentales de la química, la nanociencia y la ingeniería.',
      inscrito: true,
      promedio: 10,
    },
    {
      nombre: 'Efraín de las Casas Mejía',
      carrera: 'Ingeniería en Fotónica',
      descripcion:
        'Ingeniería Fotónica es la carrera en donde los profesionistas son capacitados para el diseño, desarrollo, implementación y evaluación de dispositivos y sistemas fotónicos aplicables en los campos de las telecomunicaciones, iluminación y conversión de energía solar, por mencionar algunos.',
      inscrito: true,
      promedio: 7,
    },
  ];
}
