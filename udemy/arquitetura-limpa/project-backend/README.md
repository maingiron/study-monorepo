# 📌 Projeto do Curso de Arquitetura Hexagonal

Este repositório contém um projeto de exemplo desenvolvido para fins educacionais, com foco na aplicação dos princípios da Arquitetura Hexagonal (Ports and Adapters).

## ▶️ Executando o Projeto

Para rodar a aplicação em ambiente de desenvolvimento, utilize o comando abaixo:

```
npm run dev
```

## 🧩 Conceitos principais da Arquitetura Hexagonal

A essência da Arquitetura Hexagonal, também chamada de Ports and Adapters, é isolar o core da aplicação (regras de negócio) das dependências externas, como banco de dados, frameworks e interfaces de usuário.

O núcleo não conhece nada do mundo exterior. Já os adaptadores e portas servem como ponte entre o núcleo e o mundo externo.

- A "porta" é a tomada da sua aplicação.
- O "adaptador" é o plugue que conecta sua aplicação ao mundo.

### ✅ Domínio / Core / Núcleo

É o coração da aplicação. Aqui ficam as regras de negócio puras, que não conhecem banco de dados, web, frameworks, etc.

- Exemplos:
  - Entidades (Entities)
  - Casos de uso (Use Cases ou Application Services)
  - Regras de negócio
  - Validações específicas do domínio

### 🔌 Portas (Ports)

São interfaces que representam o que o núcleo da aplicação precisa ou oferece. Dividem-se em:

- Portas de entrada (Driving Ports / Inbound Ports):

  - Interfaces que representam ações que o mundo externo pode realizar no sistema.
  - Ex: CriarPedidoInputPort, BuscarClienteUseCase

- Portas de saída (Driven Ports / Outbound Ports):
  - Interfaces que representam o que o núcleo precisa de fora, como acesso a banco, envio de e-mails etc.
  - Ex: ClienteRepository, EmailSender

### 🧲 Adaptadores (Adapters)

São implementações concretas das portas. Conectam o mundo externo ao núcleo e sabem de frameworks e tecnologias.

- Adaptadores de entrada (Driving Adapters):

  - Responsáveis por receber requisições externas (HTTP, CLI, Kafka…)
  - Ex: Controllers REST, CLI Handlers, Event Listeners

- Adaptadores de saída (Driven Adapters):
  - Implementações das interfaces do núcleo que acessam banco de dados, serviços externos, etc.
  - Ex: Repositórios que usam JPA, serviços que usam REST, mensageria, etc.

## ⚠️ Observação Importante

Este projeto foi construído de forma simplificada e utiliza um banco de dados em memória.

Isso significa que todos os dados são perdidos ao reiniciar a aplicação.
Será necessário realizar novamente as requisições para popular a memória com novos dados.

## 🚀 Payload APIs

### 📢 Criar Usuário – POST /api/user

```
curl --location 'http://localhost:3000/api/user' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Giron",
    "email": "giron@email.com",
    "password": "abc123"
}'
```

### 📢 Login do Usuário – POST /api/login

```
curl --location 'http://localhost:3000/api/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "giron@email.com",
    "password": "abc123"
}'
```

### 📢 Acesso a Produto (com middleware) – POST /api/products/1

```
curl --location 'http://localhost:3000/api/products/1' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgwY2YxYmRjLWM2NzQtNDc1OC1hOGYzLWM2ZjNlMjdhMDMyYSIsIm5hbWUiOiJSYXBoYWVsIiwiZW1haWwiOiJyYXBoYWVsQGVtYWlsLmNvbSIsImlhdCI6MTc0Mzk2OTAxNiwiZXhwIjoxNzQzOTcyNjE2fQ.X-4UKCbqhQBe2kcxLjOWw1epkI9mx7nSvax8W7ypdao'
```

Atenção: O token JWT deve ser obtido na rota de login e atualizado sempre que necessário.
