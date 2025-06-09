package com.example.kotlin_hexagonal.config

import com.example.kotlin_hexagonal.adapters.out.FindAddressByZipCodeAdapter
import com.example.kotlin_hexagonal.adapters.out.UpdateCustomerAdapter
import com.example.kotlin_hexagonal.application.core.usecase.FindCustomerByIdUseCase
import com.example.kotlin_hexagonal.application.core.usecase.UpdateCustomerUseCase
import com.example.kotlin_hexagonal.application.ports.`in`.UpdateCustomerInputPort
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class UpdateCustomerConfig {
    @Bean
    fun updateCustomer(
        findCustomerByIdUseCase: FindCustomerByIdUseCase,
        findAddressByZipCodeAdapter: FindAddressByZipCodeAdapter,
        updateCustomerAdapter: UpdateCustomerAdapter
    ): UpdateCustomerInputPort {
        return UpdateCustomerUseCase(
            findCustomerByIdUseCase,
            findAddressByZipCodeAdapter,
            updateCustomerAdapter
        )
    }
}