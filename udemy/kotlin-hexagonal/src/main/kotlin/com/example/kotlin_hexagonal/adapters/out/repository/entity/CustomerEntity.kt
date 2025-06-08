package com.example.kotlin_hexagonal.adapters.out.repository.entity

import com.example.kotlin_hexagonal.application.core.domain.Customer
import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.data.mongodb.core.mapping.MongoId
import java.time.ZonedDateTime
import java.time.format.DateTimeFormatter

@Document(
    collection = "customers"
)
data class CustomerEntity(
    @MongoId val id: String?,
    val name: String,
    val cpf: String,
    val isValidCpf: Boolean,
    val address: AddressEntity,
    // eu adicionei... fora do curso isso (apenas para testar)
    val createdAt: String = ZonedDateTime.now().format(DateTimeFormatter.ISO_ZONED_DATE_TIME)
) {
    constructor(customer: Customer): this(
        customer.id,
        customer.name,
        customer.cpf,
        customer.isValidCpf,
        AddressEntity(customer.address!!)
    )
}
