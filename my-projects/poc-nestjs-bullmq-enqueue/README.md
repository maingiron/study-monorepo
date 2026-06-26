# POC NestJS + BullMQ (Redis)

POC mínima de um sistema de fila com **NestJS** e **BullMQ** sobre **Redis**. Um
endpoint dispara uma tarefa assíncrona (simulando processamento pesado de 5–10s)
processada por um consumer.

## Arquitetura / Fluxo

```
POST /gerar-relatorio { usuarioId }
   │
   ▼
Controller (Swagger)  ──►  Service  ──►  [ Fila Redis "relatorio" ]
                                                   │
                                                   ▼
                                          Processor (consumer)
                                              sleep 5–10s
```

- **1 fila** (`relatorio`), **1 endpoint**, **1 consumer**.
- O service enfileira o job direto na fila; o `RelatorioProcessor` o processa de
  forma assíncrona.

### Estrutura de pastas

```
src/
├── main.ts                          # bootstrap + Swagger (/docs) + Bull Board
├── app.module.ts                    # conexão Redis + Bull Board + auth /queues
├── bull-board-auth.middleware.ts    # Basic Auth opcional do /queues
└── relatorio/
    ├── relatorio.constants.ts       # nome da fila
    ├── relatorio.controller.ts      # POST /gerar-relatorio { usuarioId }
    ├── relatorio.service.ts         # enfileira o job
    ├── relatorio.processor.ts       # consumer (sleep 5–10s)
    ├── relatorio.module.ts          # registra fila, controller, service, processor, board
    └── dto/gerar-relatorio.dto.ts   # { usuarioId }
```

## Como rodar

### Opção A — Tudo via Docker (recomendado)

Sobe **app + Redis** juntos com um único comando. Pré-requisito: apenas Docker.

```bash
# Build da imagem da app + sobe app e Redis
npm run docker:up
# (equivale a: docker compose up -d --build)

# Acompanhar os logs da aplicação
npm run docker:logs        # ou: docker compose logs -f app

# Derrubar tudo
npm run docker:down        # ou: docker compose down
```

- API: http://localhost:3000
- Swagger: http://localhost:3000/docs
- Dashboard (Bull Board): http://localhost:3000/queues

O `docker-compose.yml` define dois serviços: `redis` (com healthcheck) e `app`
(buildada pelo `Dockerfile` multi-stage). A app só inicia depois do Redis estar
saudável (`depends_on: condition: service_healthy`) e se conecta nele pela rede
do compose via `REDIS_HOST=redis`.

### Opção B — App local + Redis no Docker

Útil para desenvolvimento com hot-reload (`start:dev`). Pré-requisitos: Node 18+
e Docker.

```bash
# 1. Subir somente o Redis
npm run redis:up

# 2. Instalar dependências
npm install

# 3. Rodar a aplicação (hot-reload)
npm run start:dev
```

Variáveis em `.env`: `PORT`, `REDIS_HOST`, `REDIS_PORT`. Rodando localmente,
`REDIS_HOST=localhost`; no Docker, o compose injeta `REDIS_HOST=redis`.

## Dashboard do BullMQ (Bull Board)

O **Bull Board** é servido pela própria app em **http://localhost:3000/queues**.
Permite acompanhar a fila `relatorio` em tempo real: jobs por estado (waiting,
active, completed, failed, delayed), payload, resultado, erros/stack, além de
retry e remoção manual de jobs.

### Proteção da rota (Basic Auth)

A rota `/queues` é protegida por um middleware de Basic Auth opcional:

- **Sem** `QUEUES_USER`/`QUEUES_PASS` definidos → rota **liberada** (conveniente
  em dev local).
- **Com** as duas variáveis definidas → exige usuário/senha.

```bash
# .env (local) ou variáveis de ambiente (Docker)
QUEUES_USER=admin
QUEUES_PASS=troque-esta-senha
```

> Sempre defina as credenciais antes de expor a app fora do `localhost`. No
> Docker, o `docker-compose.yml` repassa `QUEUES_USER`/`QUEUES_PASS` do ambiente
> do host para o container.

## Testando

```bash
curl -X POST http://localhost:3000/gerar-relatorio \
  -H "Content-Type: application/json" \
  -d '{"usuarioId":"user-42"}'
```

A resposta é **202 Accepted** com o `jobId`. Acompanhe os logs: o controller, o
service e o consumer logam cada etapa. O consumer leva de 5 a 10s para concluir
o job. Veja o andamento também no dashboard em `/queues`.
