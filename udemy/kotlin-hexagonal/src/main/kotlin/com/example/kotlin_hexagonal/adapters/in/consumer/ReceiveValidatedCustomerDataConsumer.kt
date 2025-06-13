package com.example.kotlin_hexagonal.adapters.`in`.consumer

import com.example.kotlin_hexagonal.adapters.`in`.consumer.message.CustomerMessage
import com.example.kotlin_hexagonal.application.ports.`in`.UpdateCustomerInputPort
import org.springframework.kafka.annotation.KafkaListener
import org.springframework.stereotype.Component

@Component
class ReceiveValidatedCustomerDataConsumer(
    private val updateCustomerInputPort: UpdateCustomerInputPort
) {
    @KafkaListener(topics = ["tp-cpf-validated"], groupId = "kotlin_hexagonal")
    fun receive(customerMessage: CustomerMessage) {
        with(customerMessage) {
            updateCustomerInputPort.update(toCustomer(), zipCode)
        }
    }
}