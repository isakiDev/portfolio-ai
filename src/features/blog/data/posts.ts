import type { BlogPost } from "../types";

export const featuredPost: BlogPost = {
  title:
    "Estrategias de Backpressure en Sistemas de Alta Disponibilidad",
  description:
    "Una inmersión profunda en cómo evitar el colapso de servicios cuando la demanda supera la capacidad de procesamiento.",
  category: "Sistemas",
  readTime: "12 MIN LECTURA",
  date: "OCT 24, 2024",
  featured: true,
};

export const recentPosts: BlogPost[] = [
  {
    title: "Endurecimiento de Kernel Linux para Producción",
    category: "Seguridad",
    readTime: "5 MIN LECTURA",
  },
  {
    title: "Observabilidad: Del Log al Trace Distribuido",
    category: "Cloud",
    readTime: "8 MIN LECTURA",
  },
  {
    title: "¿Por qué Rust es el futuro del Backend?",
    category: "Rust",
    readTime: "15 MIN LECTURA",
  },
];
