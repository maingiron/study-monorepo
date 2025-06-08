package com.example.kotlin_hexagonal.application.ports.out

import com.example.kotlin_hexagonal.application.core.domain.Customer

interface FindCustomerByIdOutputPort {
    fun find(id: String): Customer?
}