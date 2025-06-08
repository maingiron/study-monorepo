package com.example.kotlin_hexagonal.application.core.domain

data class Customer(
    val id: String? = null,
    val name: String,
    val cpf: String,
    val isValidCpf: Boolean = false,
    var address: Address? = null,
)
