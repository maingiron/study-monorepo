package com.example.kotlin_hexagonal.adapters.out

import com.example.kotlin_hexagonal.adapters.out.repository.CustomerRepository
import com.example.kotlin_hexagonal.adapters.out.repository.entity.CustomerEntity
import com.example.kotlin_hexagonal.application.core.domain.Customer
import com.example.kotlin_hexagonal.application.ports.out.UpdateCustomerOutputPort
import org.springframework.stereotype.Component

@Component
class UpdateCustomerAdapter(
    private val customerRepository: CustomerRepository
): UpdateCustomerOutputPort {
    override fun update(customer: Customer) {
        customerRepository.save(CustomerEntity(customer))
    }
}