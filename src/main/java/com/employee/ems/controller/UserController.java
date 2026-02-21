package com.employee.ems.controller;

import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import com.employee.ems.dto.LoginResponse;
import com.employee.ems.model.User;
import com.employee.ems.service.UserService;



@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService service;

    // Register API
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {

        try {
            User savedUser = service.register(user);
            return ResponseEntity.ok(savedUser);

        } catch (RuntimeException e) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(e.getMessage());
        }
    }


    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> data) {

        User user = service.login(
                data.get("username"),
                data.get("password")
        );

        if (user != null) {
            LoginResponse response =
                    new LoginResponse(user.getUsername(), user.getRole());

            return ResponseEntity.ok(response);
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body("INVALID_CREDENTIALS");
    }

}
