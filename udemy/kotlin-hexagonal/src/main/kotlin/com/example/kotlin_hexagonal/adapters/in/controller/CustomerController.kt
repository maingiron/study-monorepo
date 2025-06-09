package com.example.kotlin_hexagonal.adapters.`in`.controller

import com.example.kotlin_hexagonal.adapters.`in`.controller.request.CustomerRequest
import com.example.kotlin_hexagonal.adapters.`in`.controller.response.CustomerResponse
import com.example.kotlin_hexagonal.application.core.domain.Customer
import com.example.kotlin_hexagonal.application.ports.`in`.DeleteCustomerInputPort
import com.example.kotlin_hexagonal.application.ports.`in`.FindCustomerByIdInputPort
import com.example.kotlin_hexagonal.application.ports.`in`.InsertCustomerInputPort
import com.example.kotlin_hexagonal.application.ports.`in`.UpdateCustomerInputPort
import jakarta.validation.Valid
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.ResponseStatus
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("api/v1/customers")
class CustomerController(
    private val insertCustomerInputPort: InsertCustomerInputPort,
    private val findCustomerInputPort: FindCustomerByIdInputPort,
    private val updateCustomerInputPort: UpdateCustomerInputPort,
    private val deleteCustomerInputPort: DeleteCustomerInputPort
) {
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    fun insert(@Valid @RequestBody customerRequest: CustomerRequest) {
        // com a função with, evita que eu precise colocar sempre customerRequest (ex: customerRequest.name)
        with(customerRequest) {
            val customer = Customer(
                name = name,
                cpf = cpf
            )
            insertCustomerInputPort.insert(customer, zipCode)
        }
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    fun findById(@PathVariable id: String): CustomerResponse {
        val customer = findCustomerInputPort.find(id)
        return CustomerResponse(customer)
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    fun update(@PathVariable id: String, @Valid @RequestBody customerRequest: CustomerRequest) {
        with(customerRequest) {
            val customer = Customer(id, name, cpf)
            updateCustomerInputPort.update(customer, zipCode)
        }
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    fun delete(@PathVariable id: String) {
        deleteCustomerInputPort.delete(id)
    }
}