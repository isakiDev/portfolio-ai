---
title: "Shop API"
description: "API REST para e-commerce con catálogo, carrito, pagos simulados y documentación OpenAPI."
date: "2025-11-08"
repoURL: "https://github.com/isakidev/shop-api"
technologies: ["Node.js", "NestJS", "PostgreSQL", "Docker", "Swagger"]
cover: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=675&fit=crop"
coverAlt: "Concepto de tienda online y pagos"
---

## Resumen

Shop API es un backend de e-commerce diseñado para practicar arquitectura modular, validación de datos y documentación de endpoints.

## Arquitectura

Implementé módulos separados para productos, usuarios, carrito y órdenes. NestJS permitió mantener una estructura clara y testeable.

## Retos

El diseño del flujo de carrito y órdenes requirió definir bien los estados de compra y evitar inconsistencias en el inventario.
