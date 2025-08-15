package com.example.app_producer.src.service

import com.example.app_producer.src.model.Person
import org.springframework.kafka.core.KafkaTemplate
import org.springframework.stereotype.Service
import org.springframework.beans.factory.annotation.Value

@Service
class KafkaProducerService(
    private val kafkaTemplate: KafkaTemplate<String, Person>
) {
    @Value("\${app.topic.name}")
    private lateinit var topic: String

    fun sendMessage(person: Person) {
        kafkaTemplate.send(topic, person)
        println("Mensagem enviado para o tópico $topic: $person")
    }
}