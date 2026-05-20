import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '../../core/site-data';

@Component({
  selector: 'app-services',
  imports: [RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  readonly site = SITE;

  readonly areas = [
    {
      title: 'Derecho civil',
      text: 'Contratos, responsabilidad civil, reclamaciones patrimoniales y asuntos entre particulares.',
      image: 'assets/images/brand/service-civil.jpg',
    },
    {
      title: 'Derecho comercial',
      text: 'Asesoría a empresas y comerciantes en operaciones, acuerdos y conflictos mercantiles.',
      image: 'assets/images/brand/service-litigios.jpg',
    },
    {
      title: 'Derecho laboral',
      text: 'Relaciones laborales, despidos, prestaciones y representación ante autoridades.',
      image: 'assets/images/brand/service-preventiva.jpg',
    },
    {
      title: 'Derecho administrativo',
      text: 'Trámites, recursos y defensa ante entidades públicas y procedimientos administrativos.',
      image: 'assets/images/brand/service-consultas.jpg',
    },
    {
      title: 'Derecho de familia',
      text: 'Divorcios, custodia, alimentos, sucesiones y conflictos familiares con trato humano.',
      image: 'assets/images/brand/about-equipo.jpg',
    },
  ] as const;
}
