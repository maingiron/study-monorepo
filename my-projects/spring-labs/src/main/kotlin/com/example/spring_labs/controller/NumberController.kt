package com.example.spring_labs.controller

import com.example.spring_labs.service.NumberService
import com.example.spring_labs.service.dto.NumberResponseDto
import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.media.Content
import io.swagger.v3.oas.annotations.media.ExampleObject
import io.swagger.v3.oas.annotations.responses.ApiResponse
import io.swagger.v3.oas.annotations.tags.Tag
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@Tag(name = "Números", description = "Operações relacionadas a números inteiros e unsigned integers")
@RestController
@RequestMapping("/v1/numbers")
class NumberController(
    private final val numberService: NumberService
) {

    @Operation(summary = "Retorna máximo e mínimo", description = "Retorna os valores mínimos e máximos de números inteiros e unsigned integers.")
    @GetMapping("/min-max")
    @ApiResponse(
        responseCode = "200",
        description = "Resposta com limites",
        content = [
            Content(
                mediaType = "application/json",
                examples = [
                    ExampleObject(
                        value = """
                    {
                      "minNumberInt": -2147483648,
                      "maxNumberInt": 2147483647,
                      "maxNumberUInt": 4294967295
                    }
                    """
                    )
                ]
            )
        ]
    )
    fun getMinMaxNumber(): NumberResponseDto {
        return numberService.getMinMaxNumber()
    }
}