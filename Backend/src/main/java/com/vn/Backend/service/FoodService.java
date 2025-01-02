package com.vn.Backend.service;

import com.vn.Backend.entity.Foods;
import com.vn.Backend.repository.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FoodService {
    @Autowired
    private FoodRepository foodRepository;

    public List<Foods> findAll() {
        return foodRepository.findAll();
    }
}
