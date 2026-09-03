package com.instantmechanic.service;

import com.instantmechanic.dto.ServiceRequestDTO;
import com.instantmechanic.dto.ServiceRequestResponseDTO;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.concurrent.atomic.AtomicLong;

/**
 * Service layer for managing service requests
 */
@Service
public class ServiceRequestService {

    private final MechanicService mechanicService;
    private final AtomicLong requestIdGenerator = new AtomicLong(1000);

    public ServiceRequestService(MechanicService mechanicService) {
        this.mechanicService = mechanicService;
    }

    /**
     * Create a new service request
     */
    public ServiceRequestResponseDTO createServiceRequest(ServiceRequestDTO requestDTO) {
        // Get mechanic details
        var mechanic = mechanicService.getMechanicById(requestDTO.getMechanicId());
        if (!mechanic.getServices().contains(requestDTO.getSelectedService())) {
            throw new IllegalArgumentException("Selected service is not offered by this mechanic");
        }

        // Generate request ID
        Long requestId = requestIdGenerator.incrementAndGet();

        return new ServiceRequestResponseDTO(
                requestId,
                requestDTO.getCustomerName(),
                requestDTO.getPhoneNumber(),
                requestDTO.getVehicleNumber(),
                requestDTO.getSelectedService(),
                requestDTO.getProblemDescription(),
                requestDTO.getMechanicId(),
                mechanic.getName(),
                "CONFIRMED",
                LocalDateTime.now(),
                "Service request confirmed! Mechanic will contact you shortly."
        );
    }
}
