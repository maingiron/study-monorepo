package com.example.spring_labs.service

import com.example.spring_labs.service.dto.NumberResponseDto
import org.springframework.stereotype.Service

@Service
class NumberService {
    val minInt: Int = Int.MIN_VALUE
    val maxInt: Int = Int.MAX_VALUE
    val maxUInt: UInt = UInt.MAX_VALUE


    fun getMinMaxNumber(): NumberResponseDto {
        return NumberResponseDto(
            minNumberInt = minInt,
            maxNumberInt = maxInt,
            maxNumberUInt = maxUInt
        )
    }
}