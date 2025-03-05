export const COMPANY_NAME = 'Nuevo Parket';
export const BRAND_COLORS = {
  primary: '#ef7f1a',
  background: '#0a0a0a',
  text: '#f5f5f5',
} as const;

export const BRANCHES = [
  {
    name: 'Sucursal La Plata',
    image: 'laplata.jpg',
    mapUrl: 'https://maps.app.goo.gl/dnawk5p1RQQyMnoJ9',
    whatsappUrl: 'https://w.app/nuevoparketlaplata',
  },
  {
    name: 'Sucursal Gonnet',
    image: 'gonnet.jpg',
    mapUrl: 'https://maps.app.goo.gl/fkA29KJ6mSNY1nu96',
    whatsappUrl: 'https://w.app/nuevoparketgonnet',
  },
  {
    name: 'Sucursal Quilmes',
    image: 'quilmes.jpg',
    mapUrl: 'https://maps.app.goo.gl/kmheZu61GLdVik727',
    whatsappUrl: 'https://w.app/nuevoparketquilmes',
  },
] as const;

export const SERVICES = [
  {
    title: "Piso vinílico SPC",
    description: "Pisos vinílicos de alta resistencia, impermeables y fáciles de instalar.",
    image: "spc-flooring.jpg",
  },
  {
    title: "Piso laminado",
    description: "Elegancia y durabilidad con nuestros pisos laminados de alta calidad.",
    image: "laminated.jpg",
  },
  {
    title: "Deck WPC",
    description: "Decks resistentes a la intemperie, ideales para exteriores.",
    image: "wpc-deck.jpg",
  },
  {
    title: "Piso de madera",
    description: "La calidez y elegancia natural de los pisos de madera maciza.",
    image: "wood-floor.jpg",
  },
  {
    title: "Revestimientos",
    description: "Soluciones para interior y exterior que transforman tus espacios.",
    image: "wpc-exterior.jpg",
  },
  {
    title: "Restauración",
    description: "Restauración y reparaciones profesionales de pisos de madera.",
    image: "pulido.jpg",
  },
] as const;
