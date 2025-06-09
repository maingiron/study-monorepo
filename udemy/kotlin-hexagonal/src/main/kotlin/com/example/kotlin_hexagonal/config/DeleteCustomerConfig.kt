package com.example.kotlin_hexagonal.config

import com.example.kotlin_hexagonal.application.core.usecase.DeleteCustomerByIdUseCase
import com.example.kotlin_hexagonal.application.ports.`in`.DeleteCustomerInputPort
import com.example.kotlin_hexagonal.application.ports.`in`.FindCustomerByIdInputPort
import com.example.kotlin_hexagonal.application.ports.out.DeleteCustomerOutputPort
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class DeleteCustomerConfig {
    @Bean
    fun deleteCustomer(
        findCustomerByIdInputPort: FindCustomerByIdInputPort,
        deleteCustomerOutputPort: DeleteCustomerOutputPort
    ): DeleteCustomerInputPort {
        return DeleteCustomerByIdUseCase(
            findCustomerByIdInputPort,
            deleteCustomerOutputPort
        )
    }
}