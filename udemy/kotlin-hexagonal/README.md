
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

---

## 🔍 Verificando os dados no MongoDB

Acesse novamente o container do MongoDB (como descrito acima) e, no shell do Mongo, execute:

```mongodb
use kotlin-hexagonal
db.customers.find();
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

---

## 🧪 Tecnologias utilizadas

- Kotlin
- MongoDB
- Docker / Docker Compose
- Arquitetura Hexagonal
- REST API
