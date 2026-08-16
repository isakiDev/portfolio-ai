---
title: "STUPID – T: Tight Coupling, el verdadero enemigo del código mantenible"
description: "Explora cómo el acoplamiento excesivo convierte tu software en una pesadilla de mantenimiento y aprende a liberarlo"
date: 2026-03-03
tags:
  [
    "acoplamiento",
    "code-smell",
    "arquitectura",
    "typescript",
    "clean-code",
    "tight-coupling",
    "dependencias",
  ]
draft: false
---

## 🤔 ¿Qué es eso de STUPID?

STUPID es un acrónimo que enumera malas prácticas, comúnmente llamadas "code smells", en el desarrollo de software. Hoy voy a hablar de la **T**: **Tight Coupling** (Acoplamiento Estrecho).

## 🔗 ¿Qué es el Tight Coupling?

El Tight Coupling describe un alto grado de interdependencia donde un componente (clase, función, módulo o servicio) requiere conocimiento detallado de la implementación interna de otro para funcionar.

Esta relación crea una estructura rígida donde los componentes están "soldados" entre sí, provocando que cualquier modificación en un elemento genere un efecto dominó de errores o cambios obligatorios en el resto del sistema.

```ts title="tight-coupling-example.ts"
class UserService {
  constructor(private database: MySQLDatabase) {} // 👎 Coupled to MySQL
}

class MySQLDatabase {
  connect(): void {
    // MySQL specific connection logic
  }
}
```

## 💥 Problemas del Tight Coupling

### 1. Código frágil

```ts title="fragile.ts"
class PaymentProcessor {
  constructor(private paypalAPI: PayPalAPI) {} // 👎 Only works with PayPal
}

// If we want to switch to Stripe... we have to change everything!
```

### 2. Dificultad para testear

```ts title="testing-hard.ts"
class EmailService {
  constructor(private smtpClient: SMTPClient): void {}

  sendWelcomeEmail(user: User): void {
    this.smtpClient.connect();
    this.smtpClient.send(user.email);
  }
}

test("should send welcome email", (): void => {
  // ❌ Test depends on real SMTP implementation
  // ❌ Hard to isolate behavior
  // ❌ Requires setup or heavy mocking
  const emailService = new EmailService(new SMTPClient()); // 👎 Real dependency
});
```

### 3. Violación del Dependency Inversion Principle (DIP)

```ts title="solid-violation.ts"
// ❌ Violates Dependency Inversion Principle (depends on concrete implementations)
class OrderManager {
  constructor(
    private database: MySQLDatabase,
    private emailSender: GmailSender,
    private paymentGateway: StripeGateway,
  ) {}
}
```

## 💡 La solución: Loose Coupling

### 1. Interfaces y abstracciones

```ts title="interfaces.ts"
interface PaymentGateway {
  process(amount: number): Promise<boolean>;
}

interface EmailService {
  send(to: string, subject: string, body: string): Promise<void>;
}
```

### 2. Inyección de dependencias

```ts title="dependency-injection.ts"
class OrderManager {
  constructor(
    private paymentGateway: PaymentGateway,
    private emailService: EmailService,
  ): void {} // ✅ Depends on abstractions, not implementations
}
```

### 3. Fácil de testear

```ts title="testable.ts"
test("OrderManager should process order", (): void => {
  const mockPaymentGateway = { process: jest.fn().mockResolvedValue(true) };
  const mockEmailService = { send: jest.fn().mockResolvedValue() };

  const orderManager = new OrderManager(mockPaymentGateway, mockEmailService);

  // ✅ Easy and isolated testing
});
```

## 🎯 Ejemplos concretos

### Antes: Acoplado

```ts title="before.ts"
class WeatherService {
  getCurrentWeather(city: string): string {
    const weatherAPI = new OpenWeatherAPI(); // 👎 Creation inside
    return weatherAPI.getWeather(city); // 👎 Coupled to OpenWeather
  }
}
```

### Después: Desacoplado

```ts title="after.ts"
interface WeatherAPI {
  getWeather(city: string): string;
}

class WeatherService {
  constructor(private weatherAPI: WeatherAPI): void {} // ✅ Injected

  getCurrentWeather(city: string): string {
    return this.weatherAPI.getWeather(city); // ✅ Only uses the interface
  }
}
```

## 🔄 Patrones para reducir acoplamiento

### 1. Observer Pattern

Permite que los componentes se comuniquen sin conocerse directamente. Un objeto emite eventos y otros pueden suscribirse sin estar acoplados entre sí.

```ts title="observer.ts"
class EventEmitter {
  private listeners: Map<string, Function[]> = new Map();

  on(event: string, callback: Function): void {
    // Implementation
  }

  emit(event: string, data: any): void {
    // Implementation
  }
}
```

### 2. Factory Pattern

Centraliza la creación de objetos, permitiendo cambiar implementaciones sin que el código cliente se entere. Solo necesita saber qué tipo de objeto necesita, no cómo se crea.

```ts title="factory.ts"
class DatabaseFactory {
  static create(type: "mysql" | "postgres" | "mongodb"): Database {
    switch (type) {
      case "mysql":
        return new MySQLDatabase();
      case "postgres":
        return new PostgresDatabase();
      case "mongodb":
        return new MongoDB();
    }
  }
}
```

## 🚨 Señales de alerta

- No puedes cambiar una clase sin afectar a otras
- Las clases saben demasiado sobre la implementación interna de otras
- Los tests necesitan muchas configuraciones externas
- Cambiar una base de datos o API requiere refactorización masiva
- Las clases crean sus propias dependencias

## 📏 Cómo medir el acoplamiento

### Cuestiona tu código:

1. ¿Qué pasaría si cambio esta dependencia por otra?
2. ¿Puedo probar esta clase sin la dependencia real?
3. ¿Cuántas clases necesito cambiar para una modificación simple?
4. ¿Mi clase sabe demasiados detalles de sus dependencias?

---

## Conclusión

El Tight Coupling genera código **frágil, difícil de mantener y casi imposible de probar**. Las dependencias fuertes hacen que tu sistema se comporte como una cadena: si un eslabón falla, todo se rompe.

La solución es simple:

- **Usa interfaces** en lugar de implementaciones concretas
- **Inyecta dependencias** en lugar de crearlas dentro
- **Separa responsabilidades** para que cada clase haga solo una cosa
- **Piensa en modularidad** antes que en funcionalidad rápida

> **Escribe código que se adapte al cambio, no que resista el cambio.**
