package com.example.kotlin_hexagonal

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.cloud.openfeign.EnableFeignClients

@EnableFeignClients
@SpringBootApplication
class KotlinHexagonalApplication

fun main(args: Array<String>) {
	runApplication<KotlinHexagonalApplication>(*args)
}
