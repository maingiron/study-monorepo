package com.example.spring_labs.controller.dto

import io.swagger.v3.oas.annotations.media.Schema

@Schema(description = "DTO para resposta de String Builder")
data class StringBuilderDto(
    @Schema(description = "Tempo de duração", example = "200ms.")
    val msDuration: String,

    @Schema(description = "Uma mensagem bonita", example = "Hey!.")
    val hey: String
)
