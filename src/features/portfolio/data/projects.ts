import type { ProjectEntry } from "../types";

export const projects: ProjectEntry[] = [
  {
    title: "Fashion Like",
    description:
      "Red social dedicada al mundo de la moda, donde los usuarios pueden exhibir sus estilos más destacados.",
    image:
      "https://res.cloudinary.com/dzn3nempv/image/upload/v1722641869/portfolio/bhppoums61vaagcohi1f.png",
    status: {
      label: "Completed",
      variant: "primary",
    },
    tech: ["NestJS", "React", "TypeScript"],
    url: "https://isakidev-fashion-like.netlify.app",
  },
  {
    title: "Calendar",
    description:
      "Aplicación web para agendar notas en un calendario atractivo, permitiendo a los usuarios visualizar el flujo y las fechas establecidas.",
    image:
      "https://res.cloudinary.com/dzn3nempv/image/upload/v1722633286/portfolio/nusbxa2suly7h1n0ctay.png",
    status: {
      label: "Completed",
      variant: "primary",
    },
    tech: ["Node.js", "React", "TypeScript"],
    url: "https://isakidev-calendar.netlify.app/",
  },
  {
    title: "Todo List",
    description:
      "Gestor de tareas diarias diseñado para mejorar la eficiencia de los usuarios. Facilita la organización y priorización de actividades.",
    image:
      "https://res.cloudinary.com/dzn3nempv/image/upload/v1722633570/portfolio/dn8fqcnuhagjkqpbmrhb.png",
    status: {
      label: "Completed",
      variant: "primary",
    },
    tech: ["React", "TypeScript"],
    url: "https://isakidev-todo.netlify.app/",
  },
  {
    title: "Task Tracker",
    description:
      "CLI para gestionar tareas pendientes con soporte para crear, actualizar y eliminar, utilizando almacenamiento local en JSON y pruebas con Jest.",
    image:
      "https://res.cloudinary.com/dzn3nempv/image/upload/v1758264381/portfolio/test_image_1_wytt1v.png",
    status: {
      label: "Completed",
      variant: "primary",
    },
    tech: ["JavaScript", "Jest"],
    repoUrl: "https://github.com/isakiDev/task-tracker",
  },
];
