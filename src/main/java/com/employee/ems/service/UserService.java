package com.employee.ems.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.ems.model.User;
import com.employee.ems.repository.UserRepository;


@Service
public class UserService {

    @Autowired
    private UserRepository repo;

    public User register(User user) {

        if (repo.existsByUsername(user.getUsername())) {
            throw new RuntimeException("USERNAME_ALREADY_EXISTS");
        }
        
        if (user.getRole() == null) {
            user.setRole("USER");   
        }

        return repo.save(user);
    }

    public User login(String username, String password) {

        User user = repo.findByUsername(username);

        if (user == null) {
            return null;
        }

        if (!user.getPassword().equals(password)) {
            return null;
        }

        return user;
    }
}

