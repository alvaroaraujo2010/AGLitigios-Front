import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SITE, type SiteData } from '../core/site-data';

@Component({
  selector: 'app-shell',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
})
export class ShellComponent {
  readonly currentYear = new Date().getFullYear();
  readonly site: SiteData = SITE;

  /** Pie de página: ingeniería de sistemas (contacto secundario) */
  readonly engineerService = SITE.professional.service;
  readonly engineerName = SITE.professional.name;
  readonly engineerLicense = SITE.professional.license;
  readonly engineerPhone = SITE.professional.phone;
  readonly engineerPhoneTel = SITE.professional.phoneTel;
}
