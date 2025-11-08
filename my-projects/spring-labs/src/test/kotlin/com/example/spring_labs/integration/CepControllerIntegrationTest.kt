package com.example.spring_labs.integration

import com.example.spring_labs.client.ViaCepClient
import com.example.spring_labs.client.response.CepResponse
import org.junit.jupiter.api.Test
import org.mockito.kotlin.whenever
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.mock.mockito.MockBean
import org.springframework.http.MediaType
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.result.MockMvcResultMatchers

@SpringBootTest
@AutoConfigureMockMvc
class CepControllerIntegrationTest {

    @Autowired
    lateinit var mockMvc: MockMvc

    @MockBean
    lateinit var viaCepClient: ViaCepClient

    @Test
    fun `should return greeting when cep exists`() {
        val cepResponse = CepResponse(
            cep = "01001-000",
            logradouro = "Praça da Sé",
            complemento = "lado ímpar",
            unidade = "",
            bairro = "Sé",
            localidade = "São Paulo",
            uf = "SP",
            estado = "São Paulo",
            regiao = "Sudeste",
            ibge = "3550308",
            gia = "1004",
            ddd = "11",
            siafi = "7107"
        )

        whenever(viaCepClient.getCep("01001000")).thenReturn(cepResponse)

        mockMvc.perform(MockMvcRequestBuilders.get("/v1/cep/01001000"))
            .andExpect(MockMvcResultMatchers.status().isOk)
            .andExpect(MockMvcResultMatchers.content().contentType(MediaType.APPLICATION_JSON))
            .andExpect(MockMvcResultMatchers.jsonPath("$.greetingCep").value("CEP 01001-000 encontrado na Unidade Federativa SP."))
    }
}