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
class StringBuilderControllerIntegrationTest {

    @Autowired
    lateinit var mockMvc: MockMvc

    @Test
    fun `should return response when called route without String Bulder`() {
        mockMvc.perform(MockMvcRequestBuilders.get("/v1/string-builder/no"))
            .andExpect(MockMvcResultMatchers.status().isOk())
            .andExpect(MockMvcResultMatchers.content().contentType(MediaType.APPLICATION_JSON))
            .andExpect(MockMvcResultMatchers.jsonPath("$.msDuration").exists())
            .andExpect(MockMvcResultMatchers.jsonPath("$.hey").value("Oh no!"))
    }

    @Test
    fun `should return response when called route with String Bulder`() {
        mockMvc.perform(MockMvcRequestBuilders.get("/v1/string-builder/yes-baby"))
            .andExpect(MockMvcResultMatchers.status().isOk())
            .andExpect(MockMvcResultMatchers.content().contentType(MediaType.APPLICATION_JSON))
            .andExpect(MockMvcResultMatchers.jsonPath("$.msDuration").exists())
            .andExpect(MockMvcResultMatchers.jsonPath("$.hey").value("Hey! Here has String Builder."))
    }
}