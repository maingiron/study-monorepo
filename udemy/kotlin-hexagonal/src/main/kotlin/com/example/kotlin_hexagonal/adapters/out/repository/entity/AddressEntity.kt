package com.example.kotlin_hexagonal.adapters.out.repository.entity

import com.example.kotlin_hexagonal.application.core.domain.Address

data class AddressEntity(
    val street: String,
    val city: String,
    val state: String,
) {
    constructor(address: Address): this(
        address.street,
        address.city,
        address.state
    )
}