import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '../../core/site-data';

@Component({
  selector: 'app-contact',
  imports: [RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  readonly site = SITE;
}
