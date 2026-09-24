// Every public page. The router, the prerendered HTML, useSeo and the generated
// sitemap.xml all read this list, so a new page only needs to be added here and
// in PAGES in App.jsx.
export const ROUTES = [
  {
    path: '/',
    priority: 1.0,
    title: 'Lansero | Skräddarsydda hemsidor',
    description: 'Lansero i Norrköping skräddarsyr hemsidor efter ditt företag, utan mallar. Från 4 900 kr. Lägg till hosting, support, SEO eller e-handel efter behov.',
  },
  {
    path: '/tjanster',
    priority: 0.9,
    title: 'Tjänster | Lansero',
    description: 'Skräddarsydda hemsidor från 4 900 kr, hosting och support för 499 kr/mån, SEO och e-handel. Så går det till när Lansero bygger din hemsida.',
  },
  {
    path: '/pris',
    priority: 0.9,
    title: 'Pris | Lansero',
    description: 'Hemsida från 4 900 kr som engångskostnad. Hosting och support för 499 kr/mån utan bindningstid. Inga fasta paket.',
  },
  {
    path: '/om-oss',
    priority: 0.7,
    title: 'Om oss | Lansero',
    description: 'Lansero är en webbyrå som bygger varje hemsida för hand, utan mallar. Grundad av Kevin Khosravi.',
  },
  {
    path: '/kontakt',
    priority: 0.8,
    title: 'Kontakt | Lansero',
    description: 'Berätta om ditt projekt så hör vi av oss med ett gratis prisförslag. Mejla, ring eller lägg till Lansero på Discord.',
  },
  {
    path: '/villkor',
    priority: 0.3,
    title: 'Allmänna villkor | Lansero',
    description: 'Villkoren som gäller när du anlitar Lansero för design, utveckling, SEO, hosting och support.',
  },
  {
    path: '/integritetspolicy',
    priority: 0.3,
    title: 'Integritetspolicy | Lansero',
    description: 'Så hanterar Lansero dina personuppgifter när du kontaktar oss eller blir kund hos oss.',
  },
]

export const NOT_FOUND = {
  path: '/404',
  title: 'Sidan finns inte | Lansero',
  description: 'Sidan du letar efter finns inte.',
  noindex: true,
}

export function routeMeta(path) {
  return ROUTES.find((r) => r.path === path) ?? NOT_FOUND
}
