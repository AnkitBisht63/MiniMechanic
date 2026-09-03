package com.instantmechanic.dto;

import java.util.List;
import java.util.Map;

public class MechanicDTO {
    
    private Long id;
    private String name;
    private Double rating;
    private String distance;
    private String location;
    private List<String> services;
    private Map<String, String> servicePricing;
    private Boolean isOpen;
    private String workingHours;
    private String address;
    private String phoneNumber;

    public MechanicDTO() {
    }

    public MechanicDTO(Long id, String name, Double rating, String distance, String location,
                       List<String> services, Map<String, String> servicePricing, Boolean isOpen, String workingHours,
                       String address, String phoneNumber) {
        this.id = id;
        this.name = name;
        this.rating = rating;
        this.distance = distance;
        this.location = location;
        this.services = services;
        this.servicePricing = servicePricing;
        this.isOpen = isOpen;
        this.workingHours = workingHours;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Double getRating() {
        return rating;
    }

    public String getDistance() {
        return distance;
    }

    public String getLocation() {
        return location;
    }

    public List<String> getServices() {
        return services;
    }

    public Map<String, String> getServicePricing() {
        return servicePricing;
    }

    public Boolean getIsOpen() {
        return isOpen;
    }

    public String getWorkingHours() {
        return workingHours;
    }

    public String getAddress() {
        return address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }
}
