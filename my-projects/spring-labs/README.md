# 🌱 Spring Labs

<p align="center">
  <img src="https://img.shields.io/badge/Java-17-007396?logo=openjdk&logoColor=white" alt="Java">
  <img src="https://img.shields.io/badge/Spring%20Boot-3.5.7-6DB33F?logo=springboot&logoColor=white" alt="Spring Boot">
  <img src="https://img.shields.io/badge/Kotlin-2.x-7F52FF?logo=kotlin&logoColor=white" alt="Kotlin">
  <img src="https://img.shields.io/badge/Maven-Build-13ce0f?logo=apachemaven&logoColor=white" alt="Maven">
  <img src="https://img.shields.io/badge/OpenAPI%2FSwagger-Docs-85EA2D?logo=swagger&logoColor=black" alt="Swagger">
  <img src="https://img.shields.io/badge/Feign-Client-FF6F00?logo=feign&logoColor=white" alt="Feign">
  <img src="https://img.shields.io/badge/Docker-Tem também kkkk-2496ED?logo=docker&logoColor=white" alt="Docker">
</p>


Bem-vindo ao **Spring Labs**, um repositório para se divertir e aprender coisas novas, mesmo que isso esteja fora do padrão de mercado. Aqui a regra é simples: **experimente, quebre, aprenda e repita**.  Nada aqui deve ser levado a sério.

## 🚀 Como executar

#### Modo Dev
```bash
mvn spring-boot:run
```

#### Modo Docker
```bash
docker-compose up -d
```

## 📜 Documentação da API

- UI do Swagger: http://localhost:8080/swagger-ui/index.html

# 🧩 Requisitos

- Java (JDK) instalado
- Maven (para executar localmente)
- Docker e Docker Compose (opcional, para rodar via container)

# 🔥 Labs realizados

### Lab 001 - Hello world

```bash
GET /hello
```

Tá gostando do rolé!? Carro nervoso, né? É o clássico, das antigas... Dojão americano!

### Lab 002 - Feign Client no ViaCep + Extension

```bash
GET /v1/cep/{cep}
```

Testezin usando o Feign Client + extension no retorno do response!

### Lab 003 - String Builder

```bash
GET /v1/string-builder/yes-baby
GET /v1/string-builder/no
```

Teste com String Builder para ver a diferença de performance!

Em 100.000, deu:

- Com SB: 13ms
- Sem SB: 6126ms -> loucura, loucura, loucura!
