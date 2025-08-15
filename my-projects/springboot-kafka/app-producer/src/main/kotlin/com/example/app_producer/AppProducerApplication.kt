package com.example.app_producer

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class AppProducerApplication

fun main(args: Array<String>) {
	runApplication<AppProducerApplication>(*args)
}
