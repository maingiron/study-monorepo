package com.example.kotlin_hexagonal.application.ports.out

import com.example.kotlin_hexagonal.application.core.domain.Address

interface FindAddressByZipCodeOutputPort {
    fun find(zipCode: String): Address
}