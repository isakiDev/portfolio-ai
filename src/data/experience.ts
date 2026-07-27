export interface ExperienceEntry {
  period: string;
  company: string;
  role: string;
  tag: string;
  tagVariant: "primary" | "secondary";
  description: string;
  highlights: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  dotColor: string;
}

export const experience: ExperienceEntry[] = [
  {
    period: "Mar 2026 - Actualidad",
    company: "Accenture",
    role: "Custom Software Engineering Associate",
    tag: "Backend Engineering",
    tagVariant: "primary",
    description:
      "Desarrollo de soluciones backend para aplicaciones empresariales, diseñando componentes escalables y mantenibles bajo buenas prácticas de ingeniería.",
    highlights: [
      "APIs y servicios backend.",
      "Arquitectura escalable.",
      "Clean Code y buenas prácticas.",
    ],
    dotColor: "bg-primary",
  },
  {
    period: "Sep 2024 - Dic 2025",
    company: "Zurich Santander Chile",
    role: "Data Governance Trainee",
    tag: "Data Engineering",
    tagVariant: "secondary",
    description:
      "Implementación de procesos ETL para mejorar la calidad, confiabilidad y monitoreo de datos sobre Azure Databricks.",
    highlights: [
      "Pipelines ETL desde APIs.",
      "Validaciones con Great Expectations.",
      "Dashboards de calidad de datos.",
    ],
    dotColor: "bg-sky-500",
  },
  {
    period: "May 2024 - Mar 2025",
    company: "No Country",
    role: "FullStack Developer",
    tag: "Full Stack Development",
    tagVariant: "secondary",
    description:
      "Desarrollo de productos digitales en equipos internacionales, colaborando durante todo el ciclo de desarrollo bajo metodologías ágiles.",
    highlights: [
      "Desarrollo frontend y backend.",
      "APIs REST e integraciones.",
      "Code reviews y documentación.",
    ],
    dotColor: "bg-violet-500",
  },
  {
    period: "Ene 2023 - Jul 2023",
    company: "ColTec Spa",
    role: "FullStack Developer",
    tag: "Full Stack Development",
    tagVariant: "secondary",
    description:
      "Creación de soluciones empresariales para optimizar procesos operativos y herramientas de uso interno.",
    highlights: [
      "Módulos PHP para sistemas POS.",
      "Integración de dispositivos comerciales.",
      "Sistemas internos de gestión.",
    ],
    dotColor: "bg-emerald-500",
  },
];
