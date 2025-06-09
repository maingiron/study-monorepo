package com.example.kotlin_hexagonal.application.core.usecase

import com.example.kotlin_hexagonal.application.core.domain.Customer
import com.example.kotlin_hexagonal.application.ports.`in`.FindCustomerByIdInputPort
import com.example.kotlin_hexagonal.application.ports.`in`.UpdateCustomerInputPort
import com.example.kotlin_hexagonal.application.ports.out.FindAddressByZipCodeOutputPort
import com.example.kotlin_hexagonal.application.ports.out.UpdateCustomerOutputPort

class UpdateCustomerUseCase(
    private val findCustomerByIdInputPort: FindCustomerByIdInputPort,
    private val findAddressByZipCodeOutputPort: FindAddressByZipCodeOutputPort,
    private val updateCustomerOutputPort: UpdateCustomerOutputPort
): UpdateCustomerInputPort {
    override fun update(customer: Customer, zipCode: String) {
        if (customer.id === null) {
            throw IllegalArgumentException("O ID do customer não pode ser null.")
        }

        // apenas para verificação de já existe na base
        findCustomerByIdInputPort.find(customer.id)

        customer.apply {
            address = findAddressByZipCodeOutputPort.find(zipCode)
        }.let {
            updateCustomerOutputPort.update(it)
        }
    }
}