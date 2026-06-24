/** Inmuebles en arriendo — datos de Inmuebles Casa en Casa.docx y videos en VIDEOS/ */

export type RentalVideoSource = 'file' | 'youtube';

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
  posterImage?: string;
  videoUrl: string;
  videoType?: RentalVideoSource;
  contactPhone: string;
  contactPhoneTel: string;
  whatsappUrl: string;
  status: 'disponible' | 'arrendado';
}

const CONTACT_PHONE = '+57 311 224 4412';
const CONTACT_PHONE_TEL = '+573112244412';

function whatsappFor(propertyTitle: string): string {
  const text = `Hola, me interesa el inmueble: ${propertyTitle}. ¿Sigue disponible?`;
  return `https://wa.me/573112244412?text=${encodeURIComponent(text)}`;
}

function media(id: string): { image: string; videoUrl: string } {
  return {
    image: `assets/images/real-estate/${id}.jpg`,
    videoUrl: `assets/videos/rentals/${id}.mp4`,
  };
}

export const REAL_ESTATE_INTRO =
  'Apartamentos y apartaestudios en arriendo en San Javier y sector Estadio, Medellín. Cada inmueble incluye recorrido en video. Disponibilidad sujeta a confirmación.';

export const RENTAL_REQUIREMENTS_TITLE = 'Requisitos para arrendar';

export const RENTAL_REQUIREMENTS: readonly string[] = [
  'Codeudor con finca raíz',
  'Codeudor con salario igual al doble del canon de arrendamiento',
  'Arrendatario del contrato con capacidad de pago (igual al doble del canon de arrendamiento)',
];

export const RENTAL_PROPERTIES: readonly RentalProperty[] = [
  {
    id: 'apartamento-san-javier-piso-2',
    title: 'Apartamento — San Javier, piso 2',
    type: 'Apartamento',
    location: 'San Javier, Medellín',
    priceLabel: '$1.700.000 / mes',
    bedrooms: 2,
    bathrooms: 1,
    area: 'Sala-comedor integrada',
    parking: 'Parqueadero para motos (exterior del edificio)',
    features: [
      '2 habitaciones',
      '1 baño',
      'Cocina',
      'Sala-comedor',
      'Parqueadero para motos en la parte exterior del edificio',
    ],
    summary:
      'Apartamento en segundo piso en San Javier, con espacios bien distribuidos y parqueadero para motos en el exterior del edificio.',
    ...media('apartamento-san-javier-piso-2'),
    contactPhone: CONTACT_PHONE,
    contactPhoneTel: CONTACT_PHONE_TEL,
    whatsappUrl: whatsappFor('Apartamento San Javier piso 2'),
    status: 'disponible',
  },
  {
    id: 'apartamento-san-javier-piso-3',
    title: 'Apartamento — San Javier, piso 3',
    type: 'Apartamento',
    location: 'San Javier, Medellín',
    priceLabel: '$1.800.000 / mes',
    bedrooms: 2,
    bathrooms: 1,
    area: 'Sala-comedor integrada',
    parking: 'Parqueadero para motos (exterior del edificio)',
    features: [
      '2 habitaciones',
      '1 baño',
      'Cocina',
      'Sala-comedor',
      'Parqueadero para motos en la parte exterior del edificio',
    ],
    summary:
      'Apartamento en tercer piso en San Javier. Ideal para quien busca buena ubicación y parqueadero para moto en el exterior del edificio.',
    ...media('apartamento-san-javier-piso-3'),
    contactPhone: CONTACT_PHONE,
    contactPhoneTel: CONTACT_PHONE_TEL,
    whatsappUrl: whatsappFor('Apartamento San Javier piso 3'),
    status: 'disponible',
  },
  {
    id: 'apartaestudio-san-javier-piso-1',
    title: 'Apartaestudio — San Javier, piso 1',
    type: 'Apartaestudio',
    location: 'San Javier, Medellín',
    priceLabel: '$1.200.000 / mes',
    bedrooms: 1,
    bathrooms: 1,
    area: 'Espacio integrado',
    parking: 'Consultar disponibilidad',
    features: ['1 habitación', '1 baño', 'Cocina', 'Sala-comedor'],
    summary:
      'Apartaestudio en primer piso en San Javier, práctico y funcional para una o dos personas.',
    ...media('apartaestudio-san-javier-piso-1'),
    contactPhone: CONTACT_PHONE,
    contactPhoneTel: CONTACT_PHONE_TEL,
    whatsappUrl: whatsappFor('Apartaestudio San Javier piso 1'),
    status: 'disponible',
  },
  {
    id: 'apartaestudio-san-javier-piso-2',
    title: 'Apartaestudio — San Javier, piso 2',
    type: 'Apartaestudio',
    location: 'San Javier, Medellín',
    priceLabel: '$1.200.000 / mes',
    bedrooms: 1,
    bathrooms: 1,
    area: 'Espacio integrado',
    parking: 'Consultar disponibilidad',
    features: ['1 habitación', '1 baño', 'Cocina', 'Sala-comedor'],
    summary:
      'Apartaestudio en segundo piso en San Javier, ambiente amplio y luminoso para arrendamiento mensual.',
    ...media('apartaestudio-san-javier-piso-2'),
    contactPhone: CONTACT_PHONE,
    contactPhoneTel: CONTACT_PHONE_TEL,
    whatsappUrl: whatsappFor('Apartaestudio San Javier piso 2'),
    status: 'disponible',
  },
  {
    id: 'apartamento-estadio-piso-2',
    title: 'Apartamento — sector Estadio, piso 2',
    type: 'Apartamento',
    location: 'Sector Estadio, Medellín',
    priceLabel: '$3.500.000 / mes',
    bedrooms: 3,
    bathrooms: 3,
    area: 'Sala-comedor y zona de ropa',
    parking: 'Parqueadero privado',
    features: [
      '3 habitaciones con clóset',
      '2 baños privados',
      '1 baño común',
      'Cocina',
      'Sala-comedor',
      'Parqueadero privado',
      'Zona de ropa',
    ],
    summary:
      'Apartamento amplio en el sector Estadio, segundo piso, con parqueadero privado y excelente distribución para familia.',
    ...media('apartamento-estadio-piso-2'),
    contactPhone: CONTACT_PHONE,
    contactPhoneTel: CONTACT_PHONE_TEL,
    whatsappUrl: whatsappFor('Apartamento sector Estadio piso 2'),
    status: 'disponible',
  },
];
