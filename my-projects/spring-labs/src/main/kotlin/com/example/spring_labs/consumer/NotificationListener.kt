package com.example.spring_labs.consumer

import com.example.spring_labs.service.dto.NotificationEventDto
import org.slf4j.LoggerFactory
import org.springframework.modulith.events.ApplicationModuleListener
import org.springframework.stereotype.Component

@Component
class NotificationListener {

    private val logger = LoggerFactory.getLogger(NotificationListener::class.java)

    @ApplicationModuleListener
    fun onNotificationEvent(event: NotificationEventDto) {
        logger.info(">>>> Received message NotificationEvent -> $event")
    }
}
