package com.example.kotlin_hexagonal.adapters.`in`.controller.response

import com.example.kotlin_hexagonal.application.core.domain.Customer

data class CustomerResponse(
    val id: String,
    val name: String,
    val cpf: String,
    val isValidCpf: Boolean,
    val address: AddressResponse
) {
    constructor(customer: Customer): this(
        customer.id!!,
        customer.name,
        customer.cpf,
        customer.isValidCpf,
        AddressResponse(customer.address!!)
    )
}
