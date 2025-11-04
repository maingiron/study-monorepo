package com.example.spring_labs.service.dto

import io.swagger.v3.oas.annotations.media.Schema

@Schema(description = "Representa a resposta da busca de CEP")
data class CepDto(
    @Schema(description = "Mensagem gerada com informações do CEP", example = "CEP 09132-350 encontrado na Unidade Federativa SP.")
    val greetingCep: String
)
