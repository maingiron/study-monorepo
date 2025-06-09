package com.example.kotlin_hexagonal.application.core.usecase

import com.example.kotlin_hexagonal.application.ports.`in`.DeleteCustomerInputPort
import com.example.kotlin_hexagonal.application.ports.`in`.FindCustomerByIdInputPort
import com.example.kotlin_hexagonal.application.ports.out.DeleteCustomerOutputPort

class DeleteCustomerByIdUseCase(
    private val findCustomerByIdInputPort: FindCustomerByIdInputPort,
    private val deleteCustomerOutputPort: DeleteCustomerOutputPort
): DeleteCustomerInputPort {
    override fun delete(id: String) {
        // apenas para verificação de já existe na base
        findCustomerByIdInputPort.find(id)

        deleteCustomerOutputPort.delete(id)
    }
}