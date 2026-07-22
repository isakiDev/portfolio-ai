export interface EducationEntry {
  period: string;
  title: string;
  institution: string;
  description: string;
}

export const education: EducationEntry[] = [
  {
    period: "2016 — 2021",
    title: "Ingeniería Civil Informática",
    institution: "Universidad Técnica Federico Santa María",
    description:
      "Especialización en Sistemas Distribuidos y Arquitectura de Software. Tesis enfocada en la optimización de kernels Linux para entornos de alta concurrencia.",
  },
  {
    period: "2022",
    title: "Certificación Kubernetes (CKA)",
    institution: "Cloud Native Computing Foundation",
    description:
      "Administración avanzada de clusters, seguridad de red y orquestación de contenedores a escala productiva.",
  },
];
