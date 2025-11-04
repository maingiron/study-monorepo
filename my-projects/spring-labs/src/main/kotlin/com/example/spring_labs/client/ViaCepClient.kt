package com.example.spring_labs.client

import com.example.spring_labs.client.response.CepResponse
import org.springframework.cloud.openfeign.FeignClient
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable


@FeignClient(
    name = "viaCepClient",
    url = "https://viacep.com.br/ws"
)
interface ViaCepClient {

    @GetMapping("/{cep}/json/")
    fun getCep(@PathVariable cep: String): CepResponse
}