import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  REAL_ESTATE_INTRO,
  RENTAL_PROPERTIES,
  type RentalProperty,
} from '../../core/real-estate-data';
import { SITE } from '../../core/site-data';

@Component({
  selector: 'app-real-estate',
  imports: [RouterLink],
  templateUrl: './real-estate.component.html',
  styleUrl: './real-estate.component.scss',
})
export class RealEstateComponent {
  readonly site = SITE;
  readonly intro = REAL_ESTATE_INTRO;
  readonly properties = RENTAL_PROPERTIES;
  readonly selected = signal<RentalProperty | null>(null);

  openDetails(property: RentalProperty): void {
    this.selected.set(property);
    document.body.style.overflow = 'hidden';
  }

  closeDetails(): void {
    this.selected.set(null);
    document.body.style.overflow = '';
  }

  onDialogBackdrop(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal')) {
      this.closeDetails();
    }
  }
}
