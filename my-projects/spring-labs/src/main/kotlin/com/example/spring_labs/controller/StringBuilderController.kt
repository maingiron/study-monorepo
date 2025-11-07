package com.example.spring_labs.controller

import com.example.spring_labs.controller.dto.StringBuilderDto
import com.example.spring_labs.service.StringBuilderService
import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.tags.Tag
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@Tag(name = "String Builder", description = "Teste usando String Builder.")
@RestController
@RequestMapping("/v1/string-builder")
class StringBuilderController(
    private final val stringBuilderService: StringBuilderService
) {

    @Operation(summary = "Teste SEM String Builder", description = "Um teste sem String Builder.")
    @GetMapping("/no")
    fun getWithoutStringBuilder(): StringBuilderDto {
        val duration = kotlin.system.measureTimeMillis {
            stringBuilderService.getWithoutStringBuilder()
        }

        return StringBuilderDto(
            msDuration = duration.toString() + "ms.",
            hey = "Oh no!"
        )
    }

    @Operation(summary = "Teste COM String Builder", description = "Um teste com String Builder.")
    @GetMapping("/yes-baby")
    fun getWithStringBuilder(): StringBuilderDto {
        val duration = kotlin.system.measureTimeMillis {
            stringBuilderService.getWithStringBuilder()
        }

        return StringBuilderDto(
            msDuration = duration.toString() + "ms.",
            hey = "Hey! Here has String Builder."
        )
    }
}