package com.instantmechanic.controller;

import com.instantmechanic.dto.MechanicDTO;
import com.instantmechanic.service.MechanicService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/mechanics")
public class MechanicController {

    private final MechanicService mechanicService;

    public MechanicController(MechanicService mechanicService) {
        this.mechanicService = mechanicService;
    }

    @GetMapping
    public ResponseEntity<List<MechanicDTO>> getMechanics() {
        return ResponseEntity.ok(mechanicService.getAllMechanics());
    }

    @GetMapping("/{id}")
    public ResponseEntity<MechanicDTO> getMechanic(@PathVariable Long id) {
        return ResponseEntity.ok(mechanicService.getMechanicById(id));
    }
}
