package com.example.spring_labs.integration

import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.MediaType
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.result.MockMvcResultMatchers

@SpringBootTest
@AutoConfigureMockMvc
class NumberControllerIntegrationTest {

    @Autowired
    lateinit var mockMvc: MockMvc

    @Test
    fun `should return response when called route numbers min and max`() {
        mockMvc.perform(MockMvcRequestBuilders.get("/v1/numbers/min-max"))
            .andExpect(MockMvcResultMatchers.status().isOk())
            .andExpect(MockMvcResultMatchers.content().contentType(MediaType.APPLICATION_JSON))
            .andExpect(MockMvcResultMatchers.jsonPath("$.minNumberInt").value("-2147483648"))
            .andExpect(MockMvcResultMatchers.jsonPath("$.maxNumberInt").value("2147483647"))
            .andExpect(MockMvcResultMatchers.jsonPath("$.maxNumberUInt").value("4294967295"))
    }
}