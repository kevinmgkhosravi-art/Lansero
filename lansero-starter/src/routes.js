// Every public page. The router, the prerendered HTML, useSeo and the generated
// sitemap.xml all read this list, so a new page only needs to be added here and
// in PAGES in App.jsx.
export const ROUTES = [
  {
    path: '/',
    priority: 1.0,
    title: 'Lansero | Skräddarsydda hemsidor',
    description: 'Lansero i Norrköping designar och bygger skräddarsydda hemsidor från grunden, utan mallar. Design, utveckling, SEO, e-handel, hosting och support.',
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
