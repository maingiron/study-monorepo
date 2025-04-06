# Arq. Hexagonal

Para rodar o projeto:

```
npm run dev
```

## Anotações

Arquitetura Hexagonal === Porta e adaptadores

Nome Design: Porta e adaptadores
Nome Comercial: Arquitetura Hexagonal

## Payload APIs

Banco em memória

POST /api/user (create user)
{
"name": "Raphael 4",
"email": "raphael4@email.com",
"password": "abc123"
}

POST /api/login (login user)
{
"email": "raphael4@email.com",
"password": "abc123"
}
