---
title: "STUPID - S: Amor y odio por los Singletons"
description: "Descubre por qué los Singletons, aunque parecen una buena idea, son considerados una mala práctica en el código limpio"
date: 2026-02-01
tags:
  [
    "patrones-de-diseño",
    "code-smell",
    "arquitectura",
    "typescript",
    "inversion-de-dependencias",
    "clean-code",
    "singleton",
  ]
draft: false
---

## 🤔 ¿Qué es eso de STUPID?

STUPID es un acrónimo que enumera malas prácticas, comúnmente llamadas "code smells", en el desarrollo de software. Hoy voy a hablar de la **S**: **Singletons**.

## 🎭 ¿Qué es un Singleton?

Un Singleton es una clase que solo puede tener una única instancia en toda tu aplicación. Siempre que pides una instancia, te devuelve la misma.

```ts title="logger.ts"
class Logger {
  private static instance: Logger;

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }
}
```

## 💔 Desventajas principales

### 1. Dependencias ocultas

```ts title="user.service.ts"
class UserService {
  createUser(name: string) {
    Logger.getInstance().log(`Creating user: ${name}`); // Where does Logger come from?
  }
}
```

No puedes ver las dependencias en el constructor. Tienes que leer todo el código para saber qué necesita la clase.

### 2. Acoplamiento global

```ts title="main.ts"
// Module A
Logger.getInstance().setLevel("debug");

// Module B (affected)
Logger.getInstance().log("This message changes depending on Module A");
```

Un cambio en un lugar afecta a toda la aplicación.

### 3. Pruebas imposibles

```ts title="user.service.test.ts"
test("UserService create user", () => {
  const service = new UserService();

  // ❌ You cannot mock the Logger
  // ❌ You cannot reset the state between tests
  // ❌ One test affects other tests

  service.createUser("John Doe");

  // How do you verify that the log was called?
  expect(Logger.getInstance().getLogs()).toContain("Creating user: John Doe");
});

test("Another test", () => {
  // ❌ The logs from previous test are still here
  const service = new UserService();
  service.createUser("Jane Doe");
});
```

### 4. Concurrencia y estado compartido

```ts
// Thread 1
Logger.getInstance().log("User 1 created");

// Thread 2
Logger.getInstance().log("User 2 created");

// Unpredictable outcome
console.log(Logger.getInstance().getLogs());
// ["User 1 created", "User 2 created"] or in reverse order
```

### 5. Configuración difícil

- ¿Cómo configuro diferentes instancias en development vs production?
- ¿Cómo uso una base de datos de pruebas?
- ¿Cómo cambio el logger para un componente específico?

Con Singleton, esto se vuelve complicado.

### 6. Violación de principios SOLID

- **S**ingle Responsibility: mezcla creación y uso de la dependencia
- **D**ependency Inversion: Depende de la implementación, no de abstracciones

## 💡 La solución: Inyección de Dependencias

```ts title="user.service.test.ts"
interface Logger {
  log(message: string): void;
}

class UserService {
  constructor(private logger: Logger) {} // ✅ Explicit dependency

  createUser(name: string) {
    this.logger.log(`Creating user: ${name}`);
  }
}

// Easy testing
test("UserService create user", () => {
  const mockLogger = { log: jest.fn() };
  const service = new UserService(mockLogger);

  service.createUser("John Doe");

  expect(mockLogger.log).toHaveBeenCalledWith("Creating user: John Doe");
});
```

## 🤏 Aclaración importante

Un Singleton garantiza que solo exista una única instancia de una clase, lo que en muchos casos es útil:

- Conexión a base de datos
- Logger avanzado
- Caché
- Inventario o managers en videojuegos

El patrón Singleton no es malo por sí mismo. El problema aparece cuando cualquier clase puede agarrar la instancia sin avisar, creando acoplamiento global y dolores de cabeza al testear o mantener el código.

---

## Conclusión

El uso de Singleton puede generar problemas debido al **acceso global**, lo que provoca dependencias ocultas y un acoplamiento excesivo del código.

La solución es sencilla:

- Evita que las clases busquen sus dependencias por sí mismas.
- Pásalas explícitamente a través del constructor, preferiblemente creando las instancias en un punto central de la aplicación (el root).

> **Deja que las clases reciban lo que necesitan, en lugar de ir a buscarlas por sí mismas.**
