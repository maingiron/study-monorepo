package com.example.kotlin_hexagonal.adapters.out

import com.example.kotlin_hexagonal.adapters.out.client.FindAddressByZipCodeClient
import com.example.kotlin_hexagonal.application.core.domain.Address
import com.example.kotlin_hexagonal.application.ports.out.FindAddressByZipCodeOutputPort
import org.springframework.stereotype.Component

@Component
class FindAddressByZipCodeAdapter(
    private val findAddressByZipCodeClient: FindAddressByZipCodeClient
): FindAddressByZipCodeOutputPort {
//    override fun find(zipCode: String): Address {
//        val addressResponse = findAddressByZipCodeClient.find(zipCode)
//        return addressResponse.toAddress()
//    }

    // equivalente a função de cima
    override fun find(zipCode: String): Address =
        findAddressByZipCodeClient.find(zipCode).toAddress()
}