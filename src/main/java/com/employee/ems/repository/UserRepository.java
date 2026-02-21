package com.employee.ems.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.employee.ems.model.User;


public interface UserRepository extends JpaRepository<User, Integer> {
    User findByUsername(String username);
    boolean existsByUsername(String username);
}


