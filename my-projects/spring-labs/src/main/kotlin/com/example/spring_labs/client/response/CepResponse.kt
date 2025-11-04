package com.example.spring_labs.client.response

import com.example.spring_labs.service.dto.CepDto
import com.fasterxml.jackson.annotation.JsonIgnoreProperties

@JsonIgnoreProperties(ignoreUnknown = true)
data class CepResponse(
    val cep: String?,
    val logradouro: String?,
    val complemento: String?,
    val unidade: String?,
    val bairro: String?,
    val localidade: String?,
    val uf: String?,
    val estado: String?,
    val regiao: String?,
    val ibge: String?,
    val gia: String?,
    val ddd: String?,
    val siafi: String?
)

fun CepResponse.extensionCep() = CepDto(
    greetingCep = "CEP $cep encontrado na Unidade Federativa $uf."
)