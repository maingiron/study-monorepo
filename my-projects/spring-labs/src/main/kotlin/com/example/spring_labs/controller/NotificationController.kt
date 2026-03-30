package com.example.spring_labs.controller

import com.example.spring_labs.controller.dto.NotificationRequestDto
import com.example.spring_labs.service.NotificationService
import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.tags.Tag
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.ResponseStatus
import org.springframework.web.bind.annotation.RestController

@Tag(name = "Notificações", description = "Publica eventos internos via Spring Modulith Event Publication Registry.")
@RestController
@RequestMapping("/v1/notification")
class NotificationController(
    private val notificationService: NotificationService
) {

    @Operation(
        summary = "Publicar notificação",
        description = "Dispara um evento assíncrono registrado no Event Publication Registry."
    )
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    fun publish(@RequestBody request: NotificationRequestDto) {
        notificationService.send(id = request.id, message = request.message)
    }
}