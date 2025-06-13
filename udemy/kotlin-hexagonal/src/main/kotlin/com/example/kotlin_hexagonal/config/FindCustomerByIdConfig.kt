package com.example.kotlin_hexagonal.config

import com.example.kotlin_hexagonal.adapters.out.FindCustomerByIdAdapter
import com.example.kotlin_hexagonal.application.core.usecase.FindCustomerByIdUseCase
import com.example.kotlin_hexagonal.application.ports.`in`.FindCustomerByIdInputPort
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.Primary

@Configuration
class FindCustomerByIdConfig {
    @Bean
    fun findCustomerByIdUseCase(findCustomerByIdAdapter: FindCustomerByIdAdapter): FindCustomerByIdUseCase {
        return FindCustomerByIdUseCase(findCustomerByIdAdapter)
    }

    @Bean
    @Primary
    fun findCustomerById(findCustomerByIdUseCase: FindCustomerByIdUseCase): FindCustomerByIdInputPort {
        return findCustomerByIdUseCase
    }
}