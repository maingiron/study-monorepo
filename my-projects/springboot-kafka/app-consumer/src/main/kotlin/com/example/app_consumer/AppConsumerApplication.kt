package com.example.app_consumer

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class AppConsumerApplication

fun main(args: Array<String>) {
	runApplication<AppConsumerApplication>(*args)
}
