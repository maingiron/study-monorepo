package com.example.spring_labs.service.dto

import io.swagger.v3.oas.annotations.media.Schema

@Schema(description = "Resposta com valores mínimos e máximos de números inteiros e unsigned integers")
data class NumberResponseDto(
    @Schema(description = "Valor mínimo", example = "-2147483648")
    val minNumberInt : Int,

    @Schema(description = "Valor máximo", example = "2147483647")
    val maxNumberInt : Int,

    @Schema(description = "Valor máximo unsigned", example = "4294967295")
    val maxNumberUInt: UInt
)
