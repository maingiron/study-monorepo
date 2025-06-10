package com.example.kotlin_hexagonal.application.ports.out

interface SendCpfForValidationOutputPort {
    fun send(cpf: String)
}