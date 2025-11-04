package com.example.spring_labs.service

import com.example.spring_labs.client.ViaCepClient
import com.example.spring_labs.client.response.extensionCep
import com.example.spring_labs.service.dto.CepDto
import org.springframework.stereotype.Service

@Service
class CepService(
    private final val viaCepClient: ViaCepClient
) {

    fun getCep(cep: String): CepDto {
        validateCep(cep)

        return (viaCepClient.getCep(cep)).extensionCep()
    }

    private fun validateCep(cep: String): Boolean {
        val valid = cep.length == 8 && cep.all { it.isDigit() }

        if (!valid) {
            throw IllegalArgumentException("CEP inválido: $cep")
        }

        return true
    }
}