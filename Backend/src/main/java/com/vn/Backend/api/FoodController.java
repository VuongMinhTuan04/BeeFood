package com.vn.Backend.api;

import com.vn.Backend.entity.Foods;
import com.vn.Backend.service.FoodService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5173, http://localhost:8080")
@RestController
@Slf4j
@RequestMapping("/api")
public class FoodController {
    @Autowired
    private FoodService foodService;

    @GetMapping("/foods")
    public ResponseEntity<List<Foods>> findAll() {
        try {
            List<Foods> foods = foodService.findAll();

            if(foods.isEmpty()) {
                return ResponseEntity.noContent().build(); //204 nếu không có dữ liệu
            }

            return ResponseEntity.ok(foods); //200 nếu có dữ liệu
        } catch (Exception e) {
            log.error("[FoodController][findAll] [error]: {}", e.getMessage());
            return ResponseEntity.badRequest().body(Collections.emptyList());
        }
    }
}
