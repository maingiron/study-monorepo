package com.example.kotlin_hexagonal.adapters.out

import com.example.kotlin_hexagonal.adapters.out.repository.CustomerRepository
import com.example.kotlin_hexagonal.adapters.out.repository.entity.CustomerEntity
import com.example.kotlin_hexagonal.application.core.domain.Customer
import com.example.kotlin_hexagonal.application.ports.out.InsertCustomerOutputPort
import org.springframework.stereotype.Component

@Component
class InsertCustomerAdapter(
    private val customerRepository: CustomerRepository
): InsertCustomerOutputPort {
    override fun insert(customer: Customer) {
        customerRepository.save(CustomerEntity(customer))
    }
}