export const site = {
  name: "Gaspar Castillo Catrifol",
  shortName: "Gaspar Castillo",
  author: "Gaspar Castillo Catrifol",
  handle: "isakidev",
  url: "https://isakidev.vercel.app",
  locale: "es-CL",
  title: "Portfolio de Gaspar Castillo | Desarrollador de Software",
  description:
    "Hola, soy Gaspar Castillo. Me dedico al desarrollo de software y disfruto crear productos digitales bien pensados, claros y fáciles de mantener.",
  keywords:
    "Portfolio, Ingeniero de Software, Node.js, React, Next.js, NestJS, Tailwind CSS, Docker, Astro, TypeScript, JavaScript",
  ogImage:
    "https://res.cloudinary.com/dzn3nempv/image/upload/v1788131562/portfolio/me.jpg",
  icon: "https://res.cloudinary.com/dzn3nempv/image/upload/c_lfill,h_50,w_50/v1795182896/portfolio/logo-with-glasses_vddas8.png",
  socials: {
    github: {
      label: "GitHub",
      url: "https://github.com/isakiDev",
      username: "isakiDev",
    },
    linkedin: {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/isakidev/",
    },
    tiktok: {
      label: "TikTok",
      url: "https://www.tiktok.com/@isakidev",
    },
    codingChallenges: {
      label: "Coding Challenges",
      url: "https://coding-challenges.dev/profile/isakidev",
    },
  },
  nav: [
    { href: "/#hero", label: "Inicio" },
    { href: "/#projects", label: "Proyectos" },
    { href: "/#experience", label: "Experiencia" },
    { href: "/#activity", label: "Actividad" },
    { href: "/#blog", label: "Blog" },
  ],
  assets: {
    cv: "/cv-gaspar-castillo.pdf",
  },
  images: {
    portrait: {
      light:
        "https://res.cloudinary.com/dzn3nempv/image/upload/v1795182896/portfolio/logo-with-glasses_vddas8.png",
      dark: "https://res.cloudinary.com/dzn3nempv/image/upload/v1787864719/portfolio/me-dark_st06ti.png",
    },
  },
} as const;

export const socialLinks = Object.values(site.socials);
