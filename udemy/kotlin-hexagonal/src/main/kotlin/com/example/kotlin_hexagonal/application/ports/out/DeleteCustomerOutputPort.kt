package com.example.kotlin_hexagonal.application.ports.out

interface DeleteCustomerOutputPort {
    fun delete(id: String)
}