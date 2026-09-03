package com.instantmechanic.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

public class ServiceRequestDTO {
    
    @NotBlank(message = "Customer name is required")
    private String customerName;
    
    @NotBlank(message = "Phone number is required")
    @Pattern(regexp = "^[0-9]{10}$", message = "Phone number must be 10 digits")
    private String phoneNumber;
    
    @NotBlank(message = "Vehicle number is required")
    private String vehicleNumber;
    
    @NotBlank(message = "Selected service is required")
    private String selectedService;
    
    @NotBlank(message = "Problem description is required")
    private String problemDescription;
    
    @NotNull(message = "Mechanic ID is required")
    private Long mechanicId;

    public ServiceRequestDTO() {
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
}
