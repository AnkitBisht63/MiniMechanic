package com.instantmechanic.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class ServiceRequestControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void createsServiceRequest() throws Exception {
        String request = """
                {
                  "customerName": "Avery Stone",
                  "phoneNumber": "9876543210",
                  "vehicleNumber": "KA01AB1234",
                  "selectedService": "Oil Change",
                  "problemDescription": "Oil replacement needed.",
                  "mechanicId": 1
                }
                """;

        mockMvc.perform(post("/api/requests")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(request))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.status").value("CONFIRMED"))
                .andExpect(jsonPath("$.mechanicName").value("Quick Fix Garage"));
    }

    @Test
    void validatesRequestPayload() throws Exception {
        String request = """
                {
                  "customerName": "",
                  "phoneNumber": "123",
                  "vehicleNumber": "",
                  "selectedService": "",
                  "problemDescription": "",
                  "mechanicId": null
                }
                """;

        mockMvc.perform(post("/api/requests")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(request))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.message").value("Validation Failed"))
                .andExpect(jsonPath("$.errors.phoneNumber").value("Phone number must be 10 digits"));
    }

    @Test
    void rejectsUnsupportedServiceForMechanic() throws Exception {
        String request = """
                {
                  "customerName": "Avery Stone",
                  "phoneNumber": "9876543210",
                  "vehicleNumber": "KA01AB1234",
                  "selectedService": "Painting",
                  "problemDescription": "Paint scratch repair.",
                  "mechanicId": 1
                }
                """;

        mockMvc.perform(post("/api/requests")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(request))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.message").value("Selected service is not offered by this mechanic"));
    }
}
