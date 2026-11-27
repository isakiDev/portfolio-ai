---
title: "Patrón Repository"
description: "Aprende a desacoplar tu lógica de negocio de la persistencia de datos utilizando el patrón Repository."
date: 2026-01-24
tags: ["patrones-de-diseno", "arquitectura", "typescript"]
draft: false
---

## Introducción al Patrón Repository

El patrón **Repository** es uno de los pilares de la arquitectura de software limpia. Su finalidad es abstraer el acceso a los datos, funcionando como un mediador entre la **lógica de negocio** y la **capa de persistencia** (bases de datos, APIs, archivos).

### ¿Por qué utilizarlo?

1.  **Desacoplamiento:** La lógica de negocio no conoce los detalles técnicos de la base de datos.
2.  **Facilidad de Testing:** Permite sustituir la base de datos real por un repositorio en memoria (Mock) para pruebas unitarias.
3.  **Flexibilidad:** Facilita el cambio de proveedor de persistencia (por ejemplo, de MySQL a MongoDB o de TypeORM a Prisma) sin afectar el resto del código.

---

### 1. Definir el Contrato (Interfaz)

Para implementar este patrón, primero debemos definir una **interfaz** o **clase abstracta**. Este será el "contrato" que garantiza que cualquier implementación del repositorio tendrá los mismos métodos.

```ts title="user.repository.ts"
// Data model definition
export interface User {
  id: string;
  name: string;
  email: string;
}

// DTO for user creation (without id)
export interface CreateUserDto {
  name: string;
  email: string;
}

// Full repository contract
export interface UserRepository {
  create(userData: CreateUserDto): Promise<User>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
}
```

### 2. Implementación Concreta

Una vez definido el contrato, creamos la implementación específica. En este ejemplo, utilizaremos Prisma como ORM.

Si en el futuro decides cambiar de herramienta, solo tendrías que crear una nueva clase que implemente la interfaz UserRepository.

```ts title="prisma-user.repository.ts"
import { PrismaClient } from "@prisma/client";
import { UserRepository, User, CreateUserDto } from "./user.repository";

const prisma = new PrismaClient();

export class PrismaUserRepository implements UserRepository {
  async create(userData: CreateUserDto): Promise<User> {
    return await prisma.user.create({
      data: userData,
    });
  }

  async findById(id: string): Promise<User | null> {
    return await prisma.user.findUnique({
      where: { id },
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return await prisma.user.findUnique({
      where: { email },
    });
  }
}
```

### 3. Ejemplo de Uso en la Lógica de Negocio

La verdadera ventaja se observa cuando inyectamos el repositorio en un servicio. El servicio no sabe que se está usando Prisma, solo sabe que el repositorio cumple con el contrato definido.

```ts title="user.service.ts"
import { UserRepository, User, CreateUserDto } from "./user.repository";

export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(userData: CreateUserDto): Promise<User> {
    // Business validations...

    const existingUser = await this.userRepository.findByEmail(userData.email);

    if (existingUser) throw new Error("The email is already registered");

    // Business logic...

    return await this.userRepository.create(userData);
  }

  async getUserById(id: string): Promise<User> {
    const user = await this.userRepository.findById(id);

    if (!user) throw new Error("User not found");

    return user;
  }
}
```

### 4. Inyección de Dependencias

Para que el patrón funcione correctamente, necesitamos hacer configuración de nuestras dependencias:

```ts title="main.ts"
import { PrismaUserRepository } from "./prisma-user.repository";
import { UserService } from "./user.service";

async function main() {
  // Dependency configuration
  const userRepository = new PrismaUserRepository();
  const userService = new UserService(userRepository);

  try {
    // Create a new user
    const newUser = await userService.createUser({
      name: "John Doe",
      email: "john@example.com",
    });

    console.log("User created:", newUser);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

main();
```

## Testing con Repositorios Mock

Una de las mayores ventajas del patrón Repository es que facilita enormemente las pruebas unitarias. Podemos crear implementaciones falsas (mocks) para probar nuestra lógica de negocio sin necesidad de una base de datos real.

### 5. Implementación Mock para Testing

```ts title="mock-user.repository.ts"
import { UserRepository, User, CreateUserDto } from "./user.repository";

export class MockUserRepository implements UserRepository {
  private users: User[] = [];
  private nextId = 1;

  async create(userData: CreateUserDto): Promise<User> {
    const newUser: User = {
      id: this.nextId.toString(),
      ...userData,
    };

    this.users.push(newUser);
    this.nextId++;

    return newUser;
  }

  async findById(id: string): Promise<User | null> {
    return this.users.find((user) => user.id === id) || null;
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.users.find((user) => user.email === email) || null;
  }

  // Auxiliary method for testing
  clear(): void {
    this.users = [];
    this.nextId = 1;
  }
}
```

### 6. Pruebas Unitarias

```ts title="user.service.test.ts"
import { UserService } from "./user.service";
import { MockUserRepository } from "./mock-user.repository";

describe("UserService", () => {
  let userService: UserService;
  let mockRepository: MockUserRepository;

  beforeEach(() => {
    mockRepository = new MockUserRepository();
    userService = new UserService(mockRepository);
    mockRepository.clear();
  });

  describe("createUser", () => {
    it("should create a user successfully", async () => {
      const userData = {
        name: "Test User",
        email: "test@example.com",
      };

      const result = await userService.createUser(userData);

      expect(result).toEqual({
        id: "1",
        ...userData,
      });
    });

    it("should throw an error if the email already exists", async () => {
      const userData = {
        name: "Test User",
        email: "test@example.com",
      };

      // Create the first user
      await userService.createUser(userData);

      // Try creating another one with the same email
      await expect(userService.createUser(userData)).rejects.toThrow(
        "The email is already registered",
      );
    });
  });

  describe("getUserById", () => {
    it("should return the user if it exists", async () => {
      const userData = {
        name: "Test User",
        email: "test@example.com",
      };
      const createdUser = await userService.createUser(userData);

      const foundUser = await userService.getUserById(createdUser.id);

      expect(foundUser).toEqual(createdUser);
    });

    it("should throw an error if the user does not exist", async () => {
      await expect(userService.getUserById("999")).rejects.toThrow(
        "User not found",
      );
    });
  });
});
```

## Ventajas Adicionales y Consideraciones Prácticas

### Ventajas del Patrón Repository

1. **Separación de Responsabilidades**: Cada clase tiene una única responsabilidad clara.
2. **Testabilidad Drásticamente Mejorada**: Las pruebas son más rápidas y predecibles.
3. **Flexibilidad de Infraestructura**: Cambiar entre bases de datos es trivial.
4. **Código más Mantenible**: La lógica de negocio está desacoplada de detalles técnicos.
5. **Reutilización**: Los mismos repositorios pueden ser utilizados por diferentes servicios.

### Consideraciones y Buenas Prácticas

#### ⚠️ No crear **interfaces de repositorio** genéricas

Evita crear interfaces de repositorio demasiado genéricas como:

```ts
// ❌ BAD
interface BaseRepository<T> {
  create(data: Partial<T>): Promise<T>;
  findById(id: string): Promise<T | null>;
  findAll(): Promise<T[]>;
  update(id: string, data: Partial<T>): Promise<T>;
  delete(id: string): Promise<void>;
}
```

Esto puede llevar a abstracciones que no se ajustan a las necesidades específicas de cada entidad.

#### ✅ Repositorios específicos del dominio

Mejor crear interfaces específicas para cada repositorio que reflejen las operaciones del negocio:

```ts
// ✅ CORRECT
interface CreateUserDto {
  name: string;
  email: string;
}

interface UserRepository {
  create(userData: CreateUserDto): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
  findActiveUsers(): Promise<User[]>;
  softDelete(id: string): Promise<void>;
}

interface Product {
  id: string;
  name: string;
  price: number;
  categoryId: string;
  stock: number;
}

interface CreateProductDto {
  name: string;
  price: number;
  categoryId: string;
}

interface ProductRepository {
  create(productData: CreateProductDto): Promise<Product>;
  findByCategory(categoryId: string): Promise<Product[]>;
  findInStock(): Promise<Product[]>;
  updateStock(id: string, quantity: number): Promise<Product>;
}
```

### Cuándo NO usar el Patrón Repository

- **Proyectos muy pequeños**: Si tienes una aplicación simple con pocas operaciones CRUD, puede ser overengineering.
- **Microservicios simples**: Si tu servicio solo expone endpoints CRUD básicos, la capa extra puede no justificarse.
- **Prototipos rápidos**: Para MVPs o prototipos donde la velocidad de desarrollo es más importante que la arquitectura.

## Conclusión

El patrón Repository es una herramienta fundamental en la arquitectura de software limpia que proporciona:

- **Desacoplamiento** entre la lógica de negocio y la persistencia
- **Testabilidad** mejorada mediante mocks
- **Flexibilidad** para cambiar la infraestructura
- **Mantenibilidad** a largo plazo

Cuando se implementa correctamente, siguiendo las buenas prácticas mencionadas, transforma tu código en una base sólida y escalable para tus aplicaciones.
