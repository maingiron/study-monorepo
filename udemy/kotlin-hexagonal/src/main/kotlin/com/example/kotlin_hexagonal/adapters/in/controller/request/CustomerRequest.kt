package com.example.kotlin_hexagonal.adapters.`in`.controller.request

import jakarta.validation.constraints.NotBlank

data class CustomerRequest(
    @field:NotBlank(message = "Nome não deve ser vazio")
    val name: String,

    @field:NotBlank(message = "CPF não deve ser vazio")
    val cpf: String,

    @field:NotBlank(message = "zipCode não deve ser vazio")
    val zipCode: String,
)
