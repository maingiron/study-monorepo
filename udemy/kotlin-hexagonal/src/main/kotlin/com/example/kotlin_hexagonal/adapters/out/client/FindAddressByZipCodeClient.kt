package com.example.kotlin_hexagonal.adapters.out.client

import com.example.kotlin_hexagonal.adapters.out.client.response.AddressResponse
import org.springframework.cloud.openfeign.FeignClient
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable

@FeignClient(
    name = "FindAddressByZipCodeClient",
    url = "\${example.client.address.url}"
)
interface FindAddressByZipCodeClient {
    @GetMapping("/{zipCode}")
    fun find(@PathVariable zipCode: String): AddressResponse
}