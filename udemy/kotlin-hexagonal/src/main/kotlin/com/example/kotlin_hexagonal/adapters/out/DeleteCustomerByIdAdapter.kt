package com.example.kotlin_hexagonal.adapters.out

import com.example.kotlin_hexagonal.adapters.out.repository.CustomerRepository
import com.example.kotlin_hexagonal.application.ports.out.DeleteCustomerOutputPort
import org.springframework.stereotype.Component

@Component
class DeleteCustomerByIdAdapter(
    private val customerRepository: CustomerRepository
): DeleteCustomerOutputPort {
    override fun delete(id: String) {
        customerRepository.deleteById(id)
    }
}