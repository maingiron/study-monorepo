package com.example.spring_labs.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/v1")
class HelloControler {

    @GetMapping("/hello")
    fun hello(): String {
        return "Hello, World!"
    }
}
