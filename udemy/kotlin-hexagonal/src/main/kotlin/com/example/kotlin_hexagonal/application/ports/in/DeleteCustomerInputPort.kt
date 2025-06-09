package com.example.kotlin_hexagonal.application.ports.`in`

interface DeleteCustomerInputPort {
    fun delete(id: String)
}