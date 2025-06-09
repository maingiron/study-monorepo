package com.example.kotlin_hexagonal.application.ports.`in`

import com.example.kotlin_hexagonal.application.core.domain.Customer

interface UpdateCustomerInputPort {
    fun update(customer: Customer, zipCode: String)
}