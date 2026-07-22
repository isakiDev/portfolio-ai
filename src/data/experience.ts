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
    period: "2022 — PRESENTE",
    company: "Accenture",
    role: "Backend & Automation Lead",
    tag: "Transición a arquitecturas distribuidas",
    tagVariant: "primary",
    dotColor: "bg-primary",
    description:
      "Liderazgo técnico en la modernización de infraestructura para servicios financieros críticos, implementando patrones de alta disponibilidad y observabilidad avanzada.",
    highlights: [
      "Orquestación de microservicios en Go bajo entornos Kubernetes multi-region.",
      "Infraestructura como código (Terraform) para despliegues automatizados de cumplimiento bancario.",
    ],
    metrics: [
      { label: "Impacto", value: "Despliegues 40% más rápidos" },
      { label: "Escalabilidad", value: "1M+ Transacciones diarias" },
    ],
  },
  {
    period: "2020 — 2022",
    company: "Zurich Santander",
    role: "Analista de Sistemas",
    tag: "Migración Cloud-Native",
    tagVariant: "secondary",
    dotColor: "bg-secondary-container",
    description:
      "Integración de sistemas legacy con arquitecturas de nube AWS, asegurando la integridad de datos en procesos de migración masiva.",
    highlights: [
      "Desarrollo de pipelines ETL automatizados con Python y AWS Lambda.",
      "Optimización de APIs REST para servicios de seguros digitales.",
    ],
    metrics: [
      {
        label: "Milestone Técnico",
        value: "99.99% Uptime mantenido en migración core",
      },
    ],
  },
];
