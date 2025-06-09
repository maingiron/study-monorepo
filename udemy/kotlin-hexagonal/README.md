
# Estudo - Kotlin (com arq. hexagonal)

Este repositório é um projeto de estudos com Kotlin utilizando arquitetura hexagonal. O objetivo é praticar boas práticas de estrutura de software, integração com banco de dados MongoDB, e exposição de APIs REST.

## 🚀 Como iniciar a aplicação

Certifique-se de que o Docker Desktop esteja rodando antes de continuar.

### 1. Subindo os containers

```bash
docker-compose up -d
```

Isso irá levantar os serviços do MongoDB e Mongo Express.

### 2. Parando os containers

```bash
docker-compose down
```

---

## 🛠️ Criando o banco de dados no MongoDB

1. **Pegue o ID do container do MongoDB** (não use o ID do Mongo Express):

```bash
docker ps
```

2. **Acesse o container do MongoDB** (substitua `SEU_ID_AQUI` pelo ID correto):

```bash
docker exec -it SEU_ID_AQUI /bin/bash
```
Dica: utilize o cmd do Windows.

3. **Abra o shell do MongoDB**:

```bash
mongosh -u root -p
```

4. **Crie o banco**:

```mongodb
use kotlin-hexagonal
show collections;
```

Lembrar de criar um customer para criar a collection `customers` (utilizar o `curl` abaixo).

---

## 🔍 Verificando os dados no MongoDB

Acesse novamente o container do MongoDB (como descrito acima) e, no shell do Mongo, execute:

```mongodb
use kotlin-hexagonal
db.customers.find();
```

---

## 📒 Utilizando WireMock

Foi utilizado o WireMock para realizar o mock de CEPs (zipCode). O mock default pode ser encontrado no arquivo `mappings/addresses.json`.

Para criar um novo mock, podemos utilizar o `curl` abaixo:

```
curl --location 'http://localhost:8082/__admin/mappings' \
--header 'Content-Type: application/json' \
--data '{
  "request": {
    "method": "GET",
    "url": "/addresses/38400001"
  },
  "response": {
    "status": 200,
    "headers": {
      "Content-Type": "application/json"
    },
    "jsonBody": {
      "street": "Rua Hexagonal Teste",
      "city": "Uberlândia Teste",
      "state": "Minas Gerais Teste"
    }
  }
}'
```

Para consultar todos os mocks diponíveis, podemos utilizar o `curl` abaixo:

```
curl --location 'http://localhost:8082/__admin/mappings'
```

---

## 📬 Testando a API

### Criar um novo cliente

Use o `curl` abaixo para criar um novo cliente na aplicação:

```bash
curl --location 'http://localhost:8080/api/v1/customers' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Raphael Giron",
    "cpf": "11122233344",
    "zipCode": "38400000"
}'
```

### Buscar um cliente

Use o `curl` abaixo para buscar um cliente na aplicação, passando o seu ID:

```bash
curl --location 'http://localhost:8080/api/v1/customers/6845db3c905eba2ee4acd02a'
```

### Alterar um cliente

Use o `curl` abaixo para alterar um cliente na aplicação, passando o seu ID:

```bash
curl --location --request PUT 'http://localhost:8080/api/v1/customers/6847063aad78d753e248449b' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Giron Giron",
    "cpf": "99922233344",
    "zipCode": "38400001"
}'
```

### Deletar um cliente

Use o `curl` abaixo para deletar um cliente na aplicação, passando o seu ID:

```bash
curl --location --request DELETE 'http://localhost:8080/api/v1/customers/6847063aad78d753e248449b'
```

---

## 🧪 Tecnologias utilizadas

- Kotlin
- MongoDB
- Docker / Docker Compose
- Arquitetura Hexagonal
- REST API
- WireMock
