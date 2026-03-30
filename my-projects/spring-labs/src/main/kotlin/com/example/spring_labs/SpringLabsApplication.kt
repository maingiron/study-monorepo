package com.example.spring_labs

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.cloud.openfeign.EnableFeignClients
import org.springframework.scheduling.annotation.EnableAsync

@SpringBootApplication
@EnableFeignClients
@EnableAsync
class SpringLabsApplication

fun main(args: Array<String>) {
	runApplication<SpringLabsApplication>(*args)
}
