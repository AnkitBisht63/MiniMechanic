package com.instantmechanic.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class MechanicControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void returnsMechanics() throws Exception {
        mockMvc.perform(get("/api/mechanics").accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(10)))
                .andExpect(jsonPath("$[0].name").value("Quick Fix Garage"));
    }

    @Test
    void returnsMechanicDetails() throws Exception {
        mockMvc.perform(get("/api/mechanics/1").accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.services[0]").value("Oil Change"))
                .andExpect(jsonPath("$.servicePricing['Oil Change']").value("Rs. 799"));
    }

    @Test
    void returnsNotFoundForUnknownMechanic() throws Exception {
        mockMvc.perform(get("/api/mechanics/999").accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isNotFound())
                .andExpect(jsonPath("$.message").value("Mechanic not found with id: 999"));
    }
}
