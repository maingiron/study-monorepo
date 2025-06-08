package com.example.kotlin_hexagonal.adapters.out

import com.example.kotlin_hexagonal.adapters.out.repository.CustomerRepository
import com.example.kotlin_hexagonal.application.core.domain.Customer
import com.example.kotlin_hexagonal.application.ports.out.FindCustomerByIdOutputPort
import org.springframework.stereotype.Component
import kotlin.jvm.optionals.getOrNull

@Component
class FindCustomerByIdAdapter(
    private val customerRepository: CustomerRepository
): FindCustomerByIdOutputPort {
    override fun find(id: String): Customer? {
        return customerRepository.findById(id)
            .getOrNull()
            .let {
                return it?.toCustomer()
            }
    }
}