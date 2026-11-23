---
title: "TaskFlow"
description: "Aplicación de gestión de tareas con tableros Kanban, colaboración en tiempo real y autenticación por equipos."
date: "2026-03-14"
repoURL: "https://github.com/isakidev/taskflow"
websiteURL: "https://taskflow-demo.vercel.app"
technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"]
cover: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=675&fit=crop"
coverAlt: "Tablero de tareas en pantalla"
---

## Resumen

TaskFlow es una aplicación para organizar trabajo en equipos pequeños. Permite crear tableros, mover tareas entre columnas y asignar responsables.

## Arquitectura

La aplicación usa Next.js con App Router. Prisma gestiona el acceso a PostgreSQL y la autenticación se resuelve con sesiones seguras por equipo.

## Retos

El principal reto fue mantener la UI sincronizada cuando varios usuarios movían tareas al mismo tiempo. Resolví esto con actualizaciones optimistas y revalidación del estado del tablero.
