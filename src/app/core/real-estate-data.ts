/** Inmuebles en arriendo — actualizar imágenes en assets/images/real-estate/ y videos en assets/videos/ */

export interface RentalProperty {
  id: string;
  title: string;
  type: string;
  location: string;
  priceLabel: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  parking: string;
  features: readonly string[];
  summary: string;
  image: string;
  /** Ruta en assets (mp4 recomendado para web). Vacío = tour por WhatsApp. */
  videoUrl: string;
  contactPhone: string;
  contactPhoneTel: string;
  whatsappUrl: string;
  status: 'disponible' | 'arrendado';
}

export const REAL_ESTATE_INTRO =
  'Apartamentos y viviendas en arriendo en Medellín. Información orientativa; disponibilidad sujeta a confirmación.';

export const RENTAL_PROPERTIES: readonly RentalProperty[] = [
  {
    id: 'apartamento-moderno-medellin',
    title: 'Apartamento en arriendo',
    type: 'Apartamento',
    location: 'Medellín, Antioquia',
    priceLabel: 'Consultar valor del canon',
    bedrooms: 3,
    bathrooms: 2,
    area: 'Consultar metros cuadrados',
    parking: 'Garaje / parqueadero',
    features: [
      'Edificio moderno de varios pisos con balcones',
      'Cocina con acabados en ladrillo y ventana al exterior',
      'Habitaciones amplias, paredes blancas y buena iluminación',
      'Zona social y acceso independiente',
      'Cartel de arriendo — disponible para visita',
    ],
    summary:
      'Vivienda en excelente estado, ideal para familia o pareja. Recorrido en video disponible con todos los espacios: fachada, cocina, habitaciones y zonas comunes.',
    image: 'assets/images/real-estate/apartamento-arriendo.svg',
    videoUrl: '',
    contactPhone: '+57 311 224 4412',
    contactPhoneTel: '+573112244412',
    whatsappUrl: 'https://wa.me/573112244412?text=Hola%2C%20me%20interesa%20el%20apartamento%20en%20arriendo.',
    status: 'disponible',
  },
];
