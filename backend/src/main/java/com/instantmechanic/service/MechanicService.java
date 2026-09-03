package com.instantmechanic.service;

import com.instantmechanic.dto.MechanicDTO;
import com.instantmechanic.exception.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Map;
import java.util.List;

/**
 * Service layer for managing mechanics data
 * Currently uses mock data; can be replaced with database calls
 */
@Service
public class MechanicService {

    private static final List<MechanicDTO> mockMechanics = new ArrayList<>();

    static {
        mockMechanics.add(new MechanicDTO(1L, "Quick Fix Garage", 4.8, "2.5 km", "Downtown Area",
                List.of("Oil Change", "Tire Repair", "Battery Replacement", "Brake Service"),
                Map.of("Oil Change", "Rs. 799", "Tire Repair", "Rs. 349", "Battery Replacement", "From Rs. 2,499", "Brake Service", "From Rs. 1,499"),
                true, "9:00 AM - 9:00 PM", "123 Main Street, City Center", "9876543210"));

        mockMechanics.add(new MechanicDTO(2L, "Pro Auto Mechanics", 4.6, "3.2 km", "North District",
                List.of("Engine Repair", "Transmission Service", "Oil Change", "AC Service"),
                Map.of("Engine Repair", "From Rs. 3,999", "Transmission Service", "From Rs. 4,499", "Oil Change", "Rs. 899", "AC Service", "From Rs. 1,899"),
                true, "8:00 AM - 8:00 PM", "456 Oak Avenue, North Zone", "8765432109"));

        mockMechanics.add(new MechanicDTO(3L, "Premium Car Care", 4.9, "1.8 km", "Central Mall Area",
                List.of("Full Service", "Electrical Repair", "Suspension Work", "Painting"),
                Map.of("Full Service", "From Rs. 2,999", "Electrical Repair", "From Rs. 1,199", "Suspension Work", "From Rs. 2,499", "Painting", "From Rs. 3,499"),
                false, "10:00 AM - 7:00 PM", "789 Elm Street, Central Point", "7654321098"));

        mockMechanics.add(new MechanicDTO(4L, "Roadside Express", 4.5, "4.1 km", "East Region",
                List.of("Tire Repair", "Jump Start", "Towing", "Locksmith"),
                Map.of("Tire Repair", "Rs. 399", "Jump Start", "Rs. 599", "Towing", "From Rs. 1,499", "Locksmith", "From Rs. 899"),
                true, "6:00 AM - 11:00 PM", "321 Pine Road, East End", "6543210987"));

        mockMechanics.add(new MechanicDTO(5L, "Excellence Auto Service", 4.7, "2.9 km", "West Side",
                List.of("General Maintenance", "Diagnostic", "Warranty Service", "Body Work"),
                Map.of("General Maintenance", "From Rs. 1,499", "Diagnostic", "Rs. 799", "Warranty Service", "Rs. 499", "Body Work", "From Rs. 3,999"),
                true, "9:30 AM - 6:30 PM", "654 Maple Lane, West District", "5432109876"));

        mockMechanics.add(new MechanicDTO(6L, "Metro Wheel Works", 4.4, "5.3 km", "Industrial Layout",
                List.of("Wheel Alignment", "Tire Rotation", "Balancing", "Puncture Repair"),
                Map.of("Wheel Alignment", "Rs. 999", "Tire Rotation", "Rs. 499", "Balancing", "Rs. 799", "Puncture Repair", "Rs. 249"),
                true, "8:30 AM - 8:30 PM", "88 Service Road, Industrial Layout", "9123456780"));

        mockMechanics.add(new MechanicDTO(7L, "Spark Auto Electricals", 4.6, "3.8 km", "Market Road",
                List.of("Battery Replacement", "Wiring Repair", "Light Repair", "Diagnostic"),
                Map.of("Battery Replacement", "From Rs. 2,399", "Wiring Repair", "From Rs. 999", "Light Repair", "From Rs. 499", "Diagnostic", "Rs. 799"),
                true, "9:00 AM - 7:30 PM", "42 Market Road, Near Bus Stand", "9234567891"));

        mockMechanics.add(new MechanicDTO(8L, "Highway Rescue Garage", 4.3, "6.7 km", "Bypass Junction",
                List.of("Towing", "Jump Start", "Fuel Delivery", "Tire Repair"),
                Map.of("Towing", "From Rs. 1,699", "Jump Start", "Rs. 699", "Fuel Delivery", "From Rs. 499", "Tire Repair", "Rs. 449"),
                true, "24 Hours", "NH Bypass Junction, Service Lane", "9345678912"));

        mockMechanics.add(new MechanicDTO(9L, "City Diesel Care", 4.5, "4.6 km", "Transport Nagar",
                List.of("Diesel Engine Repair", "Injector Cleaning", "Oil Change", "General Maintenance"),
                Map.of("Diesel Engine Repair", "From Rs. 4,499", "Injector Cleaning", "From Rs. 1,799", "Oil Change", "Rs. 899", "General Maintenance", "From Rs. 1,499"),
                false, "10:00 AM - 6:00 PM", "17 Transport Nagar, Workshop Block", "9456789123"));

        mockMechanics.add(new MechanicDTO(10L, "BlueLine Bike & Car Service", 4.7, "2.1 km", "Lake View",
                List.of("Brake Service", "Chain Service", "AC Service", "Full Service"),
                Map.of("Brake Service", "From Rs. 1,199", "Chain Service", "Rs. 499", "AC Service", "From Rs. 1,799", "Full Service", "From Rs. 2,499"),
                true, "7:30 AM - 9:00 PM", "205 Lake View Main Road", "9567891234"));
    }

    /**
     * Get all mechanics
     */
    public List<MechanicDTO> getAllMechanics() {
        return new ArrayList<>(mockMechanics);
    }

    /**
     * Get mechanic by ID
     */
    public MechanicDTO getMechanicById(Long id) {
        return mockMechanics.stream()
                .filter(m -> m.getId().equals(id))
                .findFirst()
                .orElseThrow(() -> new ResourceNotFoundException("Mechanic not found with id: " + id));
    }
}
