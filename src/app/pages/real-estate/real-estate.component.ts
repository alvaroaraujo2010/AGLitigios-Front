import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  REAL_ESTATE_INTRO,
  RENTAL_CONTACTS,
  RENTAL_PROPERTIES,
  RENTAL_REQUIREMENTS,
  RENTAL_REQUIREMENTS_TITLE,
  rentalWhatsappUrl,
  type RentalContact,
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
  readonly requirementsTitle = RENTAL_REQUIREMENTS_TITLE;
  readonly requirements = RENTAL_REQUIREMENTS;
  readonly contacts = RENTAL_CONTACTS;
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

  posterFor(property: RentalProperty): string {
    return property.posterImage ?? property.image;
  }

  isYoutube(property: RentalProperty): boolean {
    return property.videoType === 'youtube' && !!property.videoUrl;
  }

  youtubeEmbedUrl(property: RentalProperty): string {
    return `https://www.youtube.com/embed/${property.videoUrl}?rel=0`;
  }

  hasVideo(property: RentalProperty): boolean {
    return !!property.videoUrl;
  }

  whatsappFor(property: RentalProperty, contact: RentalContact): string {
    return rentalWhatsappUrl(property.title, contact);
  }

  onDialogBackdrop(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal')) {
      this.closeDetails();
    }
  }
}
