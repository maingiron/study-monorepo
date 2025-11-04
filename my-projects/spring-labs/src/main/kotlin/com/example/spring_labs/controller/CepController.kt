package com.example.spring_labs.controller

import com.example.spring_labs.service.CepService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/v1/cep")
class CepController(
    private final val cepService: CepService
) {

    @GetMapping("/{cep}")
    fun getCep(@PathVariable cep: String): String {
        return cepService.getCep(cep)
    }
}