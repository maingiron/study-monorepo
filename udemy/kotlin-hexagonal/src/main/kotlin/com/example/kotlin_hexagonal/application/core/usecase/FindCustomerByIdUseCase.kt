package com.example.kotlin_hexagonal.application.core.usecase

import com.example.kotlin_hexagonal.application.core.domain.Customer
import com.example.kotlin_hexagonal.application.core.exceptions.CustomerNotFoundException
import com.example.kotlin_hexagonal.application.ports.`in`.FindCustomerByIdInputPort
import com.example.kotlin_hexagonal.application.ports.out.FindCustomerByIdOutputPort

class FindCustomerByIdUseCase(
    private val findCustomerByIdOutputPort: FindCustomerByIdOutputPort
): FindCustomerByIdInputPort {
    override fun find(id: String): Customer {
        return findCustomerByIdOutputPort.find(id) ?: throw CustomerNotFoundException("Customer não encontrado.")
    }
}