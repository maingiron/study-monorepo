package com.example.app_consumer.src.service

import com.example.app_consumer.src.model.Person
import org.springframework.kafka.annotation.KafkaListener
import org.springframework.stereotype.Service
import org.springframework.beans.factory.annotation.Value

@Service
class KafkaConsumerService() {
    @KafkaListener(topics = ["\${app.topic.name}"], groupId = "group_id")
    fun consumeMessage(person: Person) {
        println("Mensagem recebida do tópico: $person")
    }
}