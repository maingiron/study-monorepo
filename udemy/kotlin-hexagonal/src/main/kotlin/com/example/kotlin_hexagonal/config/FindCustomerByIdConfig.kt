package com.example.kotlin_hexagonal.config

import com.example.kotlin_hexagonal.adapters.out.FindCustomerByIdAdapter
import com.example.kotlin_hexagonal.application.core.usecase.FindCustomerByIdUseCase
import com.example.kotlin_hexagonal.application.ports.`in`.FindCustomerByIdInputPort
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class FindCustomerByIdConfig {
    @Bean
    fun findCustomerById(findCustomerByIdAdapter: FindCustomerByIdAdapter): FindCustomerByIdInputPort {
        return FindCustomerByIdUseCase(findCustomerByIdAdapter)
    }
}