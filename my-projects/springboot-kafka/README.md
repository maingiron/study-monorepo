# springboot-kafka

Projeto de exemplo utilizando Spring Boot com Apache Kafka, Docker e Docker Compose.

## Como subir o ambiente completo

Execute o comando abaixo na raiz do projeto:

```
docker-compose up --build
```

Isso irá:
- Construir as imagens do producer e consumer
- Subir os containers do Zookeeper, Kafka, Kafka UI, producer e consumer

## Acessando o Kafka UI

Após subir o ambiente, acesse a interface web do Kafka UI em:

```
http://localhost:8080
```

## cURL para enviar mensagem

```
curl --location 'http://localhost:8081/v1/produce' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Optimus Prime",
    "age": 81
}'
```

## Configurações importantes

- O Kafka é acessível pelos serviços via o nome `kafka:9092` (dentro do Docker).
- O consumer e o producer usam as configurações do arquivo `application.yml` de cada módulo.
- O projeto utiliza Kotlin como linguagem principal.

## Estrutura do projeto

- `app-consumer/`: Serviço consumidor de mensagens Kafka
- `app-producer/`: Serviço produtor de mensagens Kafka
- `docker-compose.yml`: Orquestração dos serviços com Docker Compose

## Observações

- Certifique-se de que as portas 2181, 9092 e 8080 estejam livres na sua máquina.
- Para limpar todos os containers, redes e volumes criados:

```
docker-compose down --volumes
```

- Para reiniciar o ambiente do zero, use:

```
docker-compose down --volumes && docker-compose up --build
```
