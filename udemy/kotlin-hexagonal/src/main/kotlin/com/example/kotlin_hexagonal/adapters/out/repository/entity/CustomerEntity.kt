package com.example.kotlin_hexagonal.adapters.out.repository.entity

import com.example.kotlin_hexagonal.application.core.domain.Customer
import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.data.mongodb.core.mapping.MongoId
import kotlin.String

@Document(
    collection = "customers"
)
data class CustomerEntity(
    @MongoId val id: String?,
    val name: String,
    val cpf: String,
    val isValidCpf: Boolean,
    val address: AddressEntity,
) {
    constructor(customer: Customer): this(
        customer.id,
        customer.name,
        customer.cpf,
        customer.isValidCpf,
        AddressEntity(customer.address!!)
    )

    fun toCustomer() = Customer(
        id,
        name,
        cpf,
        isValidCpf,
        address.toAddress(),
    )
}
