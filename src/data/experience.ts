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
    tag: "Backend",
    tagVariant: "primary",
    description:
      "Desarrollo soluciones backend para aplicaciones empresariales, enfocándome en la escalabilidad, la mantenibilidad y la entrega continua dentro de equipos ágiles.",
    highlights: [
      "Implementación de servicios y APIs con TypeScript y NestJS.",
      "Aplicación de buenas prácticas de arquitectura, testing y calidad de código.",
      "Colaboración con equipos multidisciplinarios durante todo el ciclo de desarrollo.",
    ],
    dotColor: "bg-primary",
  },
  {
    period: "Sep 2024 - Dic 2025",
    company: "Zurich Santander Chile",
    role: "Data Governance Trainee",
    tag: "Data",
    tagVariant: "secondary",
    description:
      "Contribuí a mejorar la calidad y confiabilidad de los datos mediante el desarrollo de procesos ETL, validaciones automatizadas y herramientas de monitoreo en Azure Databricks.",
    highlights: [
      "Desarrollo de pipelines ETL con integración de datos desde APIs.",
      "Validación de datos utilizando Great Expectations para garantizar su integridad.",
      "Creación de dashboards para el seguimiento de indicadores de calidad de datos.",
    ],
    dotColor: "bg-sky-500",
  },
  {
    period: "May 2024 - Mar 2025",
    company: "No Country",
    role: "FullStack Developer",
    tag: "Full Stack",
    tagVariant: "secondary",
    description:
      "Participé en el desarrollo de múltiples proyectos para clientes, colaborando con equipos internacionales bajo metodologías ágiles y contribuyendo tanto al frontend como al backend.",
    highlights: [
      "Desarrollo de funcionalidades y APIs para diferentes productos, incluyendo BarberHub.",
      "Documentación técnica, testing y revisión de código para asegurar la calidad del software.",
      "Trabajo colaborativo con desarrolladores, diseñadores y QA en un entorno remoto.",
    ],
    dotColor: "bg-violet-500",
  },
  {
    period: "Ene 2023 - Jul 2023",
    company: "ColTec Spa",
    role: "FullStack Developer",
    tag: "Full Stack",
    tagVariant: "secondary",
    description:
      "Desarrollé funcionalidades para sistemas de gestión empresarial, optimizando procesos operativos en soluciones de punto de venta y autoatención.",
    highlights: [
      "Desarrollo de módulos en PHP para sistemas POS y plataformas de autoatención.",
      "Integración con impresoras y otros dispositivos utilizados en entornos comerciales.",
      "Implementación de funcionalidades orientadas a la gestión de recursos humanos.",
    ],
    dotColor: "bg-emerald-500",
  },
];
