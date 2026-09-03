package com.instantmechanic.dto;

import java.time.LocalDateTime;

public class ServiceRequestResponseDTO {
    
    private Long requestId;
    private String customerName;
    private String phoneNumber;
    private String vehicleNumber;
    private String selectedService;
    private String problemDescription;
    private Long mechanicId;
    private String mechanicName;
    private String status;
    private LocalDateTime createdAt;
    private String message;

    public ServiceRequestResponseDTO() {
    }

    public ServiceRequestResponseDTO(Long requestId, String customerName, String phoneNumber,
                                     String vehicleNumber, String selectedService,
                                     String problemDescription, Long mechanicId,
                                     String mechanicName, String status,
                                     LocalDateTime createdAt, String message) {
        this.requestId = requestId;
        this.customerName = customerName;
        this.phoneNumber = phoneNumber;
        this.vehicleNumber = vehicleNumber;
        this.selectedService = selectedService;
        this.problemDescription = problemDescription;
        this.mechanicId = mechanicId;
        this.mechanicName = mechanicName;
        this.status = status;
        this.createdAt = createdAt;
        this.message = message;
    }

    public Long getRequestId() {
        return requestId;
    }

    public String getCustomerName() {
        return customerName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public String getVehicleNumber() {
        return vehicleNumber;
    }

    public String getSelectedService() {
        return selectedService;
    }

    public String getProblemDescription() {
        return problemDescription;
    }

    public Long getMechanicId() {
        return mechanicId;
    }

    public String getMechanicName() {
        return mechanicName;
    }

    public String getStatus() {
        return status;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public String getMessage() {
        return message;
    }
}
