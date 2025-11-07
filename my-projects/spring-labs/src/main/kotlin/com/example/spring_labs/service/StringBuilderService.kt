package com.example.spring_labs.service

import org.springframework.stereotype.Service

@Service
class StringBuilderService {
    val amount = 100000

    fun getWithoutStringBuilder(): String {
        var result = ""
        for (i in 1..amount) {
            result += "Número $i\n"
        }
        return result
    }

    fun getWithStringBuilder(): String {
        val stringBuilder = StringBuilder()
        for (i in 1..amount) {
            stringBuilder.append("Número $i\n")
        }
        return stringBuilder.toString()
    }
}