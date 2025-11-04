package com.example.spring_labs.controller

import com.example.spring_labs.service.CepService
import com.example.spring_labs.service.dto.CepDto
import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.Parameter
import io.swagger.v3.oas.annotations.tags.Tag
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@Tag(name = "Consulta de CEP", description = "Serviço para buscar informações de CEPs brasileiros.")
@RestController
@RequestMapping("/v1/cep")
class CepController(
    private final val cepService: CepService
) {

    @Operation(summary = "Buscar endereço por CEP.", description = "Consulta o ViaCEP e retorna informações do endereço.")
    @GetMapping("/{cep}")
    fun getCep(
        @Parameter(description = "CEP com 8 dígitos numéricos.", example = "01001000")
        @PathVariable cep: String
        ): CepDto {
        return cepService.getCep(cep)
    }
}