/** Datos públicos del despacho (fuente: aglitigioscol.godaddysites.com) */

export interface SiteSocial {
  facebook: string;
  instagram: string;
  youtube: string;
}

/** Contacto secundario: ingeniería de sistemas (independiente del despacho) */
export interface SiteProfessional {
  name: string;
  service: string;
  note: string;
  phone: string;
  phoneTel: string;
  whatsappUrl: string;
  license: string;
}

export interface SiteData {
  name: string;
  shortName: string;
  tagline: string;
  subtitle: string;
  city: string;
  promo: string;
  phone: string;
  phoneTel: string;
  whatsappUrl: string;
  address: string;
  addressFull: string;
  hours: string;
  social: SiteSocial;
  professional: SiteProfessional;
}

export const SITE: SiteData = {
  name: 'AG Litigios COL',
  shortName: 'AG Litigios',
  tagline: 'Expertos en derecho, comprometidos con usted',
  subtitle: 'Soluciones legales efectivas para su caso.',
  city: 'Medellín, Antioquia',
  promo: '20 % de descuento este mes en su primer servicio',
  phone: '+57 304 644 9331',
  phoneTel: '+573046449331',
  whatsappUrl: 'https://wa.me/573046449331',
  address: 'Calle 41 # 63C-76, Conquistadores',
  addressFull: 'Calle 41 # 63C-76, Conquistadores, Medellín, Antioquia 050030',
  hours: 'Lunes a viernes, 9:00 a. m. – 5:00 p. m.',
  social: {
    facebook: 'https://www.facebook.com/824148470777175',
    instagram:
      'https://www.instagram.com/aglitigios_col?igsh=enI5a2Y5aG11NTB3&utm_source=qr',
    youtube: 'https://www.youtube.com/@InfoagLitigios',
  },
  professional: {
    name: 'Ingeniero Álvaro Araujo Arrieta',
    service: 'Ingeniería de sistemas',
    note:
      'Para consultoría o proyectos de ingeniería de sistemas, puede contactarme directamente.',
    phone: '+57 301 245 5994',
    phoneTel: '+573012455994',
    whatsappUrl: 'https://wa.me/573012455994',
    license: 'TP: 08255-203610 ATL',
  },
};
