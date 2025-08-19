package com.example.app_producer.src.controller

import com.example.app_producer.src.model.Person
import com.example.app_producer.src.service.KafkaProducerService
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.http.ResponseEntity
import org.slf4j.LoggerFactory

@RestController
@RequestMapping("/v1")
class ProducerController(
    private val producerService: KafkaProducerService
) {
    private val logger = LoggerFactory.getLogger(ProducerController::class.java)

    @PostMapping("/produce")
    fun produce(@RequestBody person: Person): ResponseEntity<String> {
        val testeVar = System.getenv("TESTE_VAR")
        println("Valor da variável de ambiente TESTE_VAR: $testeVar")

        return try {
            producerService.sendMessage(person)
            ResponseEntity.ok("Mensagem enviada com sucesso!")
        } catch (e: Exception) {
            logger.error("Erro ao enviar mensagem para Kafka.", e)
            ResponseEntity.status(500).body("Erro ao enviar mensagem: ${e.message}")
        }
    }
}