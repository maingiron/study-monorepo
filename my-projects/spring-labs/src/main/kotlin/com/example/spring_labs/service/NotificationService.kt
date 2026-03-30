package com.example.spring_labs.service

import com.example.spring_labs.service.dto.NotificationEventDto
import org.springframework.context.ApplicationEventPublisher
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
class NotificationService(
    private val eventPublisher: ApplicationEventPublisher
) {

    @Transactional
    fun send(id: String, message: String) {
        val event = NotificationEventDto(id = id, message = message)
        eventPublisher.publishEvent(event)
    }
}