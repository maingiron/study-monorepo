package com.example.kotlin_hexagonal.config

import com.example.kotlin_hexagonal.adapters.out.FindAddressByZipCodeAdapter
import com.example.kotlin_hexagonal.adapters.out.InsertCustomerAdapter
import com.example.kotlin_hexagonal.adapters.out.SendCpfForValidationAdapter
import com.example.kotlin_hexagonal.application.core.usecase.InsertCustomerUseCase
import com.example.kotlin_hexagonal.application.ports.`in`.InsertCustomerInputPort
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class InsertCustomerConfig {
    @Bean
    fun insertCustomer(
        findAddressByZipCodeAdapter: FindAddressByZipCodeAdapter,
        insertCustomerAdapter: InsertCustomerAdapter,
        sendCpfForValidationAdapter: SendCpfForValidationAdapter
    ): InsertCustomerInputPort {
        return InsertCustomerUseCase(
            findAddressByZipCodeAdapter,
            insertCustomerAdapter,
            sendCpfForValidationAdapter
        )
    }
}