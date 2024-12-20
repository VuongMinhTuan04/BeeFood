package com.vn.Backend.api;

import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class TestApi {
    @GetMapping("")
    public String test() {
        return "Hello World";
    }
}

