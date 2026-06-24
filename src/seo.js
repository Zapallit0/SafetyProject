// Central SEO configuration for Safety Advisors (Lima, Perú).
// Used by the <Seo> component to emit per-route meta tags and JSON-LD.

export const SITE_URL = 'https://safetyadvisors.io'
export const OG_IMAGE = `${SITE_URL}/og-image.png`

// Single source of truth for the business (NAP + profiles).
export const BUSINESS = {
  name: 'Safety Advisors',
  legalName: 'Safety Advisors',
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/LogoHome.svg`,
  image: OG_IMAGE,
  telephone: '+51964197982',
  email: 'contacto@safetyadvisors.io',
  address: {
    street: 'Jr. Brigadier Mateo Pumacahua 2550',
    locality: 'Lince',
    region: 'Lima',
    postalCode: '15073',
    country: 'PE',
  },
  geo: { lat: -12.0875624, lng: -77.0429751 },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61557920314806',
    'https://www.linkedin.com/company/safety-advisors24/about/',
    'https://www.instagram.com/safety__advisors/',
  ],
}

const SERVICES = [
  'Sistema de Gestión de Seguridad',
  'Salud Ocupacional',
  'Prevención de Riesgos',
  'Homologaciones',
  'Capacitaciones en Seguridad',
]

// LocalBusiness / ProfessionalService — the primary entity for local SEO.
export const professionalServiceLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#business`,
  name: BUSINESS.name,
  legalName: BUSINESS.legalName,
  url: BUSINESS.url,
  logo: BUSINESS.logo,
  image: BUSINESS.image,
  telephone: BUSINESS.telephone,
  email: BUSINESS.email,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.locality,
    addressRegion: BUSINESS.address.region,
    postalCode: BUSINESS.address.postalCode,
    addressCountry: BUSINESS.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: BUSINESS.geo.lat,
    longitude: BUSINESS.geo.lng,
  },
  areaServed: { '@type': 'Country', name: 'Perú' },
  sameAs: BUSINESS.sameAs,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de seguridad y salud ocupacional',
    itemListElement: SERVICES.map((service) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: service },
    })),
  },
}

export const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: BUSINESS.url,
  name: BUSINESS.name,
  inLanguage: 'es-PE',
  publisher: { '@id': `${SITE_URL}/#business` },
}

// BreadcrumbList for a route. `crumbs` = [{ name, path }] from Home to current page.
export const breadcrumbLd = (crumbs) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((crumb, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: crumb.name,
    item: `${SITE_URL}${crumb.path}`,
  })),
})
