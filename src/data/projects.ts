export interface ProjectEntry {
  title: string;
  description: string;
  image: string;
  status: {
    label: string;
    variant: "primary" | "accent" | "secondary";
  };
  tech: string;
  url?: string;
}

export const projects: ProjectEntry[] = [
  {
    title: "NestJS Boilerplate",
    description:
      "Arquitectura limpia para microservicios con soporte nativo para CQRS y Event Sourcing.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBcbOAFwpVJh4Ka0omUYMuq7uzvNy0gcA7AHctTeyknsfVJAw2zadaKB4iIw73xAHbcPHVdJy9Zi6a8ns_0AHRzgndiNbCZqO1ElYYj_saHMFmq0bXAR5cQwMXeamZQBS7eekpXqGVQLq_hhyja9SgHGBX7g-GPil4FuylkvCJDFsbdZg1Tr4anWlLScL8UazroneWxrB0HA9STGk3feeINMyGLWXvSNilMvhKUlNrRW8H-JjkYo_wt",
    status: { label: "Stable", variant: "primary" },
    tech: "TypeScript",
  },
  {
    title: "AI Voice Assistant",
    description:
      "Procesamiento de lenguaje natural local utilizando Whisper.cpp para control de sistemas críticos.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAMW-PuL-yIktJUDXws9k5YFTApRTz-NRyIK3xefbdJ7fJmSY9zPpiLZlXc7Au8ZK_Vb1GkGya4VDqznhx26n0Sh9yOgcSALmxsl2x-UBOCALNHTnR8SojJuMx2pfjFR9pww4grxzyr6_t_MHiDiF4pO86iY7HcdLX4VgfB15CxZ2iD0jOB4xff03OWyjW_jsScMo_zzWsk8x1eDGW7TQiBXbxdxYLo9v4ynPyDhNaTWvhwOU6zBxXS",
    status: { label: "Experimental", variant: "accent" },
    tech: "Go / C++",
  },
];
