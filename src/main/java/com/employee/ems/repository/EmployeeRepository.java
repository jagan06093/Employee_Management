package com.employee.ems.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.employee.ems.model.Employee;


public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
	boolean existsByEmail(String email);
}

