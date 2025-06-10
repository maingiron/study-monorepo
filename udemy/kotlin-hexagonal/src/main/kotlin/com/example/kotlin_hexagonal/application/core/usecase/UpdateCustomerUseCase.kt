package com.example.kotlin_hexagonal.application.core.usecase

import com.example.kotlin_hexagonal.application.core.domain.Customer
import com.example.kotlin_hexagonal.application.ports.`in`.FindCustomerByIdInputPort
import com.example.kotlin_hexagonal.application.ports.`in`.UpdateCustomerInputPort
import com.example.kotlin_hexagonal.application.ports.out.FindAddressByZipCodeOutputPort
import com.example.kotlin_hexagonal.application.ports.out.SendCpfForValidationOutputPort
import com.example.kotlin_hexagonal.application.ports.out.UpdateCustomerOutputPort

class UpdateCustomerUseCase(
    private val findCustomerByIdInputPort: FindCustomerByIdInputPort,
    private val findAddressByZipCodeOutputPort: FindAddressByZipCodeOutputPort,
    private val updateCustomerOutputPort: UpdateCustomerOutputPort,
    private val sendCpfForValidationOutputPort: SendCpfForValidationOutputPort
): UpdateCustomerInputPort {
    override fun update(customer: Customer, zipCode: String) {
        if (customer.id === null) {
            throw IllegalArgumentException("O ID do customer não pode ser null.")
        }

        // apenas para verificação de já existe na base
        val savedCpf = findCustomerByIdInputPort.find(customer.id).cpf

        customer.apply {
            address = findAddressByZipCodeOutputPort.find(zipCode)
        }.let {
            updateCustomerOutputPort.update(it)
            if (savedCpf != it.cpf) {
                sendCpfForValidationOutputPort.send(it.cpf)
            }
        }
    }
}