package com.example.spring_labs.controller.dto

import io.swagger.v3.oas.annotations.media.Schema

@Schema(description = "DTO para notification (event publication)")
data class NotificationRequestDto(
    @Schema(description = "ID", example = "123")
    val id: String,

    @Schema(description = "Uma mensagem bonita", example = "Esse é o Event Publication do Spring Boot!")
    val message: String
)