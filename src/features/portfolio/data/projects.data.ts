import type { ProjectEntry } from "../types";

export const projects: ProjectEntry[] = [
  {
    title: "Fashion Like",
    description:
      "Red social dedicada al mundo de la moda, donde los usuarios pueden exhibir sus estilos más destacados.",
    tech: ["NestJS", "React", "Docker", "Cloudinary", "PostgreSQL", "Zustand"],
    imageUrl:
      "https://res.cloudinary.com/dzn3nempv/image/upload/v1722641869/portfolio/bhppoums61vaagcohi1f.png",
    repoUrl: "https://github.com/isakiDev/nest-fashion-like",
    deployUrl: "https://isakidev-fashion-like.netlify.app",
  },
  {
    title: "Calendar",
    description:
      "Aplicación web para agendar notas en un calendario atractivo, permitiendo a los usuarios visualizar el flujo y las fechas establecidas.",
    imageUrl:
      "https://res.cloudinary.com/dzn3nempv/image/upload/v1722633286/portfolio/nusbxa2suly7h1n0ctay.png",
    tech: [
      "Node.js",
      "TypeScript",
      "React",
      "Redux",
      "TailwindCSS",
      "MongoDB",
      "Clean Architecture",
    ],
    repoUrl: "https://github.com/isakiDev/node-calendar-ts",
    deployUrl: "https://isakidev-calendar.netlify.app/",
  },
  {
    title: "Todo List",
    imageUrl:
      "https://res.cloudinary.com/dzn3nempv/image/upload/v1722633570/portfolio/dn8fqcnuhagjkqpbmrhb.png",
    description:
      "Gestor de tareas diarias diseñado para mejorar la eficiencia de los usuarios. Facilita la organización y priorización de actividades.",
    tech: ["React", "TypeScript", "TailwindCSS"],
    repoUrl: "https://github.com/isakiDev/react-todo-ts",
    deployUrl: "https://isakidev-todo.netlify.app/",
  },
  {
    title: "Task Tracker",
    imageUrl:
      "https://res.cloudinary.com/dzn3nempv/image/upload/v1758264381/portfolio/test_image_1_wytt1v.png",
    description:
      "CLI para gestionar tareas pendientes con soporte para crear, actualizar y eliminar, utilizando almacenamiento local en JSON y pruebas con Jest.",
    tech: ["JavaScript", "Yargs", "Jest"],
    repoUrl: "https://github.com/isakiDev/task-tracker",
  },
];
