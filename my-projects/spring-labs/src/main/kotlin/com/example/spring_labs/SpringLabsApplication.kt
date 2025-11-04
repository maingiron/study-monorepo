package com.example.spring_labs

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.cloud.openfeign.EnableFeignClients

@SpringBootApplication
@EnableFeignClients
class SpringLabsApplication

fun main(args: Array<String>) {
	runApplication<SpringLabsApplication>(*args)
}
