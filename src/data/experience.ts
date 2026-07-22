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
      "Desarrollo soluciones backend para aplicaciones empresariales, enfocadas en la escalabilidad, mantenibilidad y calidad del software dentro de equipos ágiles.",
    highlights: [],
    dotColor: "bg-primary",
  },
  {
    period: "Sep 2024 - Dic 2025",
    company: "Zurich Santander Chile",
    role: "Data Governance Trainee",
    tag: "Data Engineering",
    tagVariant: "secondary",
    description:
      "Implementé soluciones orientadas a mejorar la calidad y confiabilidad de los datos mediante procesos ETL, validaciones automatizadas y monitoreo sobre Azure Databricks.",
    highlights: [
      "Desarrollo de pipelines ETL para integración y transformación de datos provenientes de APIs.",
      "Implementación de validaciones automatizadas con Great Expectations para asegurar la integridad de la información.",
      "Creación de dashboards para monitorear métricas e indicadores de calidad de datos.",
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
      "Participé en el desarrollo de productos digitales colaborando con equipos internacionales bajo metodologías ágiles, integrando soluciones frontend y backend.",
    highlights: [
      "Desarrollo de funcionalidades y APIs para distintos productos, incluyendo BarberHub.",
      "Implementación de pruebas, documentación técnica y revisión de código para mantener la calidad del software.",
      "Trabajo colaborativo con desarrolladores, diseñadores y QA en equipos remotos multidisciplinarios.",
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
      "Desarrollé soluciones empresariales orientadas a optimizar procesos operativos mediante sistemas POS, plataformas de autoatención y herramientas internas.",
    highlights: [
      "Desarrollo de módulos en PHP para sistemas POS y soluciones de autoatención.",
      "Integración con impresoras y dispositivos utilizados en entornos comerciales.",
      "Implementación de funcionalidades para sistemas de gestión interna y recursos humanos.",
    ],
    dotColor: "bg-emerald-500",
  },
];
